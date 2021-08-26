import 'phaser';
import { GameScene } from "./game/GameScene";

const appConfig = {
	type: Phaser.AUTO,
	width: 455,
	height: 905,
	scene: [
		GameScene,
	]
};

const game = new Phaser.Game(appConfig);
console.warn("Debug: Phaser game", game);
