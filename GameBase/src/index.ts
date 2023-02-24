import * as Phaser from 'phaser'

class GameScene extends Phaser.Scene {
    constructor() {
        super('game-scene')
    }

    init() {
    }

    preload() {
    }

    create() {
        let text = this.add.text(20, 20, "Hello World!")
        text.setFontSize(50);
    }

    update() {
    }
}

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt: false,
    backgroundColor: 0x000000,
    parent: 'game-app',
    scene: GameScene
}

new Phaser.Game(config)