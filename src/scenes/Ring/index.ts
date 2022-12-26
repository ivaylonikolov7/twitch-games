import { Scene } from "phaser";
import { Menu } from "../..//classes/Menu";

export class Ring extends Scene {
    constructor() {
        super("Ring");
    }
    preload(): void {
        this.load.image("background", "assets/background/Background 10x.png");
        this.load.image("ring", "assets/background/Ring 10x.png");
    }
    create(): void {}
}
