import { Node } from "../Node";

export class CompoAvatar extends Node {

    create() {
        this._setup();
        this._createBackground();
        this._createAvatar();
        this._createMask();
    }

    _setup() {
        this.WIDTH = 150;
        this.HEIGHT = 150;
        this.BORDER = 2;
    }

    _createBackground() {
        if (!this.background) {
            this.background = this.scene.add.graphics();
            this.background.fillStyle(0x000000);
            this.background.fillRoundedRect(0, 0, this.WIDTH + 2 * this.BORDER, this.HEIGHT + 2 * this.BORDER, 25);
            this.add(this.background);
        }
    }

    _createAvatar() {
        if (!this.avatar) {
            this.avatar = this.scene.make.sprite();
            this.add(this.avatar);
            this.avatar.setTexture('ava1');
            this.avatar.x = this.BORDER + this.WIDTH / 2;
            this.avatar.y = this.BORDER + this.HEIGHT / 2;
        }
        
    }

    _createMask() {
        if (!this.mask) {
            const shape = this.scene.make.graphics();
            shape.fillStyle(0xcd0000, 1);
            shape.fillRoundedRect(-this.WIDTH / 2, -this.HEIGHT / 2, this.WIDTH, this.HEIGHT, 25);

            setTimeout(() => {
                const mask = shape.createGeometryMask();
                shape.x = this.avatar.getWorldTransformMatrix().tx;
                shape.y = this.avatar.getWorldTransformMatrix().ty;
                console.error(this.avatar.getWorldTransformMatrix());
                this.avatar.setMask(mask);
            }, 20);
        }
    }

    setAvatar(texture) {
        this.avatar.setTexture(texture);
    }
}