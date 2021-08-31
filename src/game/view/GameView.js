import { Node } from "../base/Node";
import { Background } from "./Background";
import { UserInfo } from "./UserInfo";
import { EnemyInfo } from "./EnemyInfo";
import { gsap } from "gsap";
export class GameView extends Node {

    create() {
        this.initBackground();
        this.initLayer();
        this.initUsers();
        this.initSkillBox();
    }

    start() {
        //! always call the class by emit - better for encapsulation
        this.on("PLAY_ANIM_PREPARE", this.showAnimPrepare, this);
    }

    initLayer() {
        if (!this.usersLayer) {
            this.usersLayer = this.scene.add.container();
            this.add(this.usersLayer);
        }
        if (!this.battleLayer) {
            this.battleLayer = this.scene.add.container();
            this.add(this.battleLayer);
            this.battleLayer.x = this.config.width / 2;
            this.battleLayer.y = this.config.height / 2;
        }
    }

    initBackground() {
        if (!this.background) {
            this.background = new Background(this.scene);
            this.add(this.background);
        }
    }

    initUsers() {
        if (!this.myInfo) {
            this.myInfo = new UserInfo(this.scene);
            this.usersLayer.add(this.myInfo);
            this.myInfo.showY = this.myInfo.y = this.config.height - 250;
        }
        if (!this.enemyInfo) {
            this.enemyInfo = new EnemyInfo(this.scene);
            this.usersLayer.add(this.enemyInfo);
            this.enemyInfo.showY = this.enemyInfo.y;
        }
    }

    initSkillBox() {
        if (!this.skillBox) {
            this.skillBox = this.scene.add.sprite(0, 0, 'battle', "Skills.png");
            this.battleLayer.add(this.skillBox);
            this.skillBox.scale = 0.3;
        }
    }

    showAnimPrepare() {
        // this.myInfo.y = this.myInfo.showY + 250;
        // this.enemyInfo.y = this.enemyInfo.showY - 250;

        // gsap.timeline({repeat: -1}).to(this.skillBox, { scale: 1, duration: 2 })
        // gsap.timeline({repeat: -1}).to(this.myInfo, { y: this.myInfo.showY, delay: 1, duration: 1 });
        // gsap.timeline({repeat: -1}).to(this.enemyInfo, { y: this.enemyInfo.showY, delay: 1, duration: 1 });

    }

}