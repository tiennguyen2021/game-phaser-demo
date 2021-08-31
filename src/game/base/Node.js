/**
 * @created by Kame
 * abstract class for base entity
 */
export class Node extends Phaser.GameObjects.Container {

    constructor(scene) {
        super(scene);
        this.config = scene.config;
        if (typeof this.init === 'function') {
            this.init();
        }
        if (typeof this.create === 'function') {
            this.create();
        }
        if (typeof this.start === 'function') {
            this.start();
        }
        if (typeof this.onUpdateData === 'function') {
            this.on("changeData", this.onUpdateData, this);
        }
    }

    init() { }

    create() { }

    start() { }

}