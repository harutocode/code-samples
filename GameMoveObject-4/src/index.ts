import * as Phaser from 'phaser'
import Player from '@/player'

const isDebug: boolean = true;
let player: Player;
let keys: Phaser.Types.Input.Keyboard.CursorKeys;
let text1: Phaser.GameObjects.Text;
let text2: Phaser.GameObjects.Text;

class GameScene extends Phaser.Scene {
    constructor() {
        super('game-scene');
    }

    init() {
    }

    preload() {
        // 画像"object.png"の読み込みと画像名"object"の設定
        this.load.image("object", "assets/object.png");
        // キーボードの入力情報を取得
        keys = this.input.keyboard.createCursorKeys();
        // 右クリックした時にメニューが出ないようにする
        this.input.mouse.disableContextMenu();
    }

    create() {
        // プレイヤー生成
        player = new Player(this, 10, 10);

        this.input.mouse.disableContextMenu();

        // デバッグテキスト表示
        if (isDebug) {
            type TextStyle = Phaser.Types.GameObjects.Text.TextStyle;
            text1 = this.add.text(10, 10, '', { color: "#00ff00" });
            text2 = this.add.text(500, 10, '', { color: "#00ff00" });

            this.input.on('pointerup', (pointer: any) => {
                if (pointer.leftButtonReleased()) {
                    text2.setText('Left Button was released');
                } else if (pointer.rightButtonReleased()) {
                    text2.setText('Right Button was released');
                } else if (pointer.middleButtonReleased()) {
                    text2.setText('Middle Button was released');
                } else if (pointer.backButtonReleased()) {
                    text2.setText('Back Button was released');
                } else if (pointer.forwardButtonReleased()) {
                    text2.setText('Forward Button was released');
                }
            });
        }
    }

    update() {
        player.update(keys);

        // デバッグテキスト表示
        if (isDebug) {
            let pointer: Phaser.Input.Pointer = this.input.activePointer;
            text1.setText([
                'x: ' + pointer.worldX,
                'y: ' + pointer.worldY,
                'isDown: ' + pointer.isDown
            ]);
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
};

new Phaser.Game(config);