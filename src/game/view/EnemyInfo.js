import { UserInfo } from "./UserInfo";

export class EnemyInfo extends UserInfo {

    initView() {
        super.initView();
        this.avatar.x = this.config.width - 100;
        this.updateAvatar("ava2");
    }

}