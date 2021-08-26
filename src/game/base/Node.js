/**
 * @created by Kame
 * abstract class for base entity
 */
export class Node extends Phaser.GameObjects.Container {

    constructor(scene) {
        super(scene);
        this.config = scene.config;
        this.initView();
        this.start();
    }

    initView() { }

    start() { }

}