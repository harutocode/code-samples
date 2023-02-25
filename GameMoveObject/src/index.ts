import * as Phaser from 'phaser'

// キャラの最初の位置
let playerInitX: number = 100
let playerInitY: number = 100
// キャラの回転度
let playerAngle: number = 0

let player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
let keys: Phaser.Types.Input.Keyboard.CursorKeys

class GameScene extends Phaser.Scene {
    constructor() {
        super('game-scene')
    }
 
    init() {
    }

    preload() {
        // 画像"chara.png"の読み込みと画像名"chara"の設定
        this.load.image("chara", "assets/chara.png")
        // キーボードの入力情報を取得
        keys = this.input.keyboard.createCursorKeys()
    }

    create() {
        // イメージ"chara"で「プレイヤー」をゲームシーンに生成
        player = this.physics.add.sprite(
            playerInitX, 
            playerInitY, 
            "chara"
        )
    }

    update() {
        // ベクトルをもとに戻す
        player.setVelocity(0,0)

        // 10度ずつ回転させる（スタイリッシュさ）
        playerAngle+=10
        player.setAngle(playerAngle)

        if (keys.up.isDown) {
            // 「↑」を押すとY軸ベクトルに-200を設定
            player.setVelocityY(-200)
        }
        if (keys.left.isDown) {
            // 「←」を押すとX軸ベクトルに-200を設定
            player.setVelocityX(-200)
        }
        if (keys.down.isDown) {
            // 「↓」を押すとY軸ベクトルに200を設定
            player.setVelocityY(200)
        }
        if (keys.right.isDown) {
            // 「→」を押すとX軸ベクトルに200を設定
            player.setVelocityX(200)
        }
    }
}

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt: false,
    backgroundColor: 0x000000,
    parent: 'game-app',
    scene: GameScene,
	physics: {
		default: "arcade",
		arcade: {
            // 重力は0
			gravity: { y: 0 }
		}
	}
}

new Phaser.Game(config)