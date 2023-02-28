import * as Phaser from 'phaser'
import Vector2D from '@/vector2d'

export default class Player {
    p:      Vector2D; // 位置
    v:      Vector2D; // 進む方向とスピード
    tp:     Vector2D; // 進む位置
    speed:  number;   // スピード
    angle:  number;
    scene:  Phaser.Scene;
    obj:    Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        this.scene  = scene;
        this.angle  = 0;
        this.speed  = 4;
        this.p      = new Vector2D(x, y);
        this.v      = new Vector2D(0, 0);
        this.tp     = new Vector2D(0, 0);
        this.obj    = scene.physics.add.sprite(
            x,
            y,
            "object"
        );
    }

    update(keys: Phaser.Types.Input.Keyboard.CursorKeys) {
        let mousePoint: Phaser.Input.Pointer = this.scene.input.activePointer;
        if (mousePoint.isDown) {
            this.tp = new Vector2D(mousePoint.worldX, mousePoint.worldY);
        }

        let targetAngle = Vector2D.GetTargetAngle(this.p, this.tp);
        let vectorToTarget = Vector2D.GetDirectionByAngle(targetAngle);
        vectorToTarget.scale(this.speed);
        // 3ピクセル内で衝突したらベクトルを0にする
        if (Vector2D.isCollision(3, this.p, this.tp)) {
            vectorToTarget.toZero();
        }
        this.v = vectorToTarget;

        // 10度ずつ回転させる（スタイリッシュさ）
        this.angle+=10;
        this.obj.setAngle(this.angle);

        this.p.add(this.v);
        this.obj.setPosition(this.p.x, this.p.y);
    }
}