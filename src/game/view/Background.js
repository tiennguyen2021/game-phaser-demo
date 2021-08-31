import { Node } from "../base/Node";

export class Background extends Node {

    create() {
        if (!this.mainBg) {
            this.mainBg = this.scene.add.sprite(0, 0, "bgBlue");
            this.add(this.mainBg);
        }

        if (!this.redBg) {
            this.redBg = this.scene.add.sprite(0, 0, 'battle', "red.png");
            this.redBg.displayWidth = this.config.width;
            this.redBg.setOrigin(0, 0);
            this.add(this.redBg);
            // this.redBg.setVisible(false);
        }

        if (!this.versus) {
            this.versus = this.scene.add.sprite(this.config.width / 2, 300, 'battle', "versus.png");
            this.add(this.versus);
        }


    }

    showBackground() {

    }

}