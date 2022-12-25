import { Scene } from "phaser";
export class StartGame extends Scene {
    constructor() {
        super("start-game");
    }
    preload(): void {
        this.load.image("background", "assets/background/Background 10x.png");
    }
    create(): void {
        let background = this.physics.add.image(0, 150, "background");
        background.setOrigin(0, 0);
        background.scale = 0.5;

        this.add.text(300, 200, "Start Game", {
            color: "orange",
            fontSize: "40px",
        });
    }
}
