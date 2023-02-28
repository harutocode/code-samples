import * as Phaser from 'phaser'
import Vector2D from '@/vector2d'

export default class Player {
    p:      Vector2D; // 位置
    v:      Vector2D; // 進む方向とスピード
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
        this.obj    = scene.physics.add.sprite(
            x,
            y,
            "object"
        );
    }

    update(keys: Phaser.Types.Input.Keyboard.CursorKeys) {
        // ベクトルをもとに戻す
        this.v.toZero();

        // 10度ずつ回転させる（スタイリッシュさ）
        this.angle+=10;
        this.obj.setAngle(this.angle);

        if (keys.up.isDown) {
            this.v.addToY(-this.speed); // 「↑」を押すとY軸ベクトルに-変数「-speed」を設定
        }
        if (keys.left.isDown) {
            this.v.addToX(-this.speed); // 「←」を押すとX軸ベクトルに-変数「-speed」を設定
        }
        if (keys.down.isDown) {
            this.v.addToY(this.speed); // 「↓」を押すとY軸ベクトルに変数「speed」を設定
        }
        if (keys.right.isDown) {
            this.v.addToX(this.speed); // 「→」を押すとX軸ベクトルに変数「speed」を設定
        }
        this.p.add(this.v);
        this.obj.setPosition(this.p.x, this.p.y);
    }
}