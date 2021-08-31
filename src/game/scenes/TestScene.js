export class TestScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'Test',
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
        const bg = this.make.sprite();
        this.gameContainer.add(bg);
        bg.setTexture('bgBlue');
        bg.displayWidth = this.config.width;
        bg.displayHeight = this.config.height;
        bg.scale = 0.5;
        bg.setOrigin(0, 0);
        // console.error("create");
        const graphics = this.add.graphics();
        graphics.fillStyle(0xcd0000, 1);
        graphics.fillRect(0, 0, this.config.width, 300);
        graphics.x = 0;
        graphics.y = this.config.height / 2;
        this.gameContainer.add(graphics);

        const mask = graphics.createGeometryMask();
        // this.gameContainer.setMask(mask);
    }

}
