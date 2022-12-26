import { Scene } from "phaser";
import { Menu } from "../..//classes/Menu";
export class StartGame extends Scene {
    private menu!: Menu;

    constructor() {
        super("start-game");
    }
    preload(): void {
        this.load.image("background", "assets/background/Background 10x.png");
    }
    create(): void {
        let background = this.add.image(0, 150, "background");
        background.setOrigin(0, 0);
        background.scale = 0.5;
        this.add.rectangle(400, 300, 350, 350, 0x000000, 0.7);
        this.menu = new Menu(this, ["Start Game", "About", "Controls"]);
    }
    update(): void {
        this.menu.update();
    }
}
