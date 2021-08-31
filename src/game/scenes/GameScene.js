import { GameView } from "../view/GameView";
export class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene',
            active: true
        });
    }
    init() {
        const config = Object.create(null);
        config.width = this.game.config.width;
        config.height = this.game.config.height;

        this.config = config;
        console.warn("Debug: Scene", this);
    }
    preload() {
        this.load.image("bgBlue", 'assets/images/background/blue.png');
        this.load.image("ava1", 'assets/images/avatar1.png');
        this.load.image("ava2", 'assets/images/avatar2.png');
        this.load.spritesheet("light", 'assets/spritesheet/light.png', { frameWidth: 310, frameHeight: 310 });
        this.load.atlas("battle", 'assets/images/AtlasBattle.png', 'assets/images/AtlasBattle.json');
    }
    create() {
        this.gameContainer = this.add.container();
        this.gameView = new GameView(this);
        this.gameContainer.add(this.gameView);
        this.gameView.emit("PLAY_ANIM_PREPARE");
    }

}
