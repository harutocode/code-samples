import * as Phaser from 'phaser'

export default class Player {
    angle:  number;
    scene:  Phaser.Scene;
    obj:    Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        this.scene  = scene;
        this.angle  = 0;
        this.obj    = scene.physics.add.sprite(
            x,
            y,
            "object"
        );
    }

    update(keys: Phaser.Types.Input.Keyboard.CursorKeys) {
        // ベクトルをもとに戻す
        this.obj.setVelocity(0,0);

        // 10度ずつ回転させる（スタイリッシュさ）
        this.angle+=10;
        this.obj.setAngle(this.angle);

        if (keys.up.isDown) {
            this.obj.setVelocityY(-200); // 「↑」を押すとY軸ベクトルに-200を設定
        }
        if (keys.left.isDown) {
            this.obj.setVelocityX(-200); // 「←」を押すとX軸ベクトルに-200を設定
        }
        if (keys.down.isDown) {
            this.obj.setVelocityY(200);  // 「↓」を押すとY軸ベクトルに200を設定
        }
        if (keys.right.isDown) {
            this.obj.setVelocityX(200);  // 「→」を押すとX軸ベクトルに200を設定
        }
    }
}