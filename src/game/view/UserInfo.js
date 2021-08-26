import { Node } from "../base/Node";

export class UserInfo extends Node {

    constructor(scene) {
        super(scene);
        this.setData({ userName: "", level: 1, avatar: "" });
        this.on("changeData", this.changeData, this);
        this.initView();
    }

    initView() {
        if (!this.overlay) {
            this.overlay = this.scene.add.graphics();
            this.add(this.overlay);
            this.overlay.fillStyle(0x000000, 1)
            this.overlay.fillRect(0, 0, this.config.width, 250);
            this.overlay.alpha = 0.2;
        }
        if (!this.avatar) {
            this.avatar = this.scene.add.sprite(100, 125, "ava1");
            this.add(this.avatar);
        }
    }

    changeData() {
        const { level, avatar } = this.getData();
        if (avatar) this.updateAvatar(avatar);
        if (level) this.updateLevel();
    }

    updateAvatar(avatar) {
        this.avatar.setTexture(avatar);
    }

    updateLevel() { }


}