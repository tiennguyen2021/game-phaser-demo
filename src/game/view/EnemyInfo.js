import { UserInfo } from "./UserInfo";

export class EnemyInfo extends UserInfo {

    create() {
        super.create();
        this.avatar.x = this.config.width - 125;
        this.updateAvatar("ava2");
    }

}