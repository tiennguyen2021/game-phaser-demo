import { UserInfo } from "./UserInfo";

export class Player extends UserInfo {

    initView() {
        this.avatar = this.scene.add.sprite(0, 0);
        this.add(this.avatar);
    }

}