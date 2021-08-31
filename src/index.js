import 'phaser';
import { TestScene } from "./game/scenes/TestScene";
import { GameScene } from "./game/scenes/GameScene";

const appConfig = {
	type: Phaser.AUTO,
	width: 455,
	height: 905,
	scene: [
		// TestScene
		GameScene,
	]
};

const game = new Phaser.Game(appConfig);
console.warn("Debug: Phaser game", game);
