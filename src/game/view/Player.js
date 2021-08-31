import { UserInfo } from "./UserInfo";

export class Player extends UserInfo {

    create() {
        this.avatar = this.scene.add.sprite(0, 0);
        this.add(this.avatar);
    }

}