import * as Phaser from 'phaser';
import Player from '@/player';

let player: Player;
let keys: Phaser.Types.Input.Keyboard.CursorKeys;

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
    }

    create() {
        // プレイヤー生成
        player = new Player(this, 10, 10);
    }

    update() {
        player.update(keys);
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