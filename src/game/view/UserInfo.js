import { Node } from "../base/Node";
import { CompoAvatar } from "../base/components/CompoAvatar";
export class UserInfo extends Node {

    constructor(scene) {
        super(scene);
        this.setData({ userName: "", level: 1, avatar: "" });
        this.create();
    }

    create() {
        if (!this.overlay) {
            this.overlay = this.scene.add.graphics();
            this.add(this.overlay);
            this.overlay.fillStyle(0x000000, 1)
            this.overlay.fillRect(0, 0, this.config.width, 250);
            this.overlay.alpha = 0.2;
        }
        if(!this.avatar){
            this.avatar = new CompoAvatar(this.scene);
            this.add(this.avatar);
        }
    }

    onUpdateData() {
        const { level, avatar } = this.getData();
        if (avatar) this.updateAvatar(avatar);
        if (level) this.updateLevel();
    }

    updateAvatar(texture) {
        this.avatar.setAvatar(texture);
    }

    updateLevel() { }


}