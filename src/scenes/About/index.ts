import { Scene } from "phaser";
import { Menu } from "../..//classes/Menu";

export class About extends Scene {
    private menu!: Menu;
    private keyEscape!: Phaser.Input.Keyboard.Key;
    constructor() {
        super("About");
    }
    preload(): void {
        this.load.image("background", "assets/background/Background 10x.png");
    }
    create(): void {
        let background = this.physics.add.image(0, 150, "background");
        background.setOrigin(0, 0);
        background.scale = 0.5;

        let rect = this.add.rectangle(400, 300, 400, 400, 0x000000, 0.5);
        rect.setOrigin(0.5, 0.5);

        let role = this.add.text(400, 150, "Developer");
        role.setOrigin(0.5, 0.5);

        let developerName = this.add.text(400, 180, "Ivaylo Nikolov", {
            color: "#FFA500",
        });
        developerName.setOrigin(0.5, 0.5);

        let graphicRole = this.add.text(400, 210, "Graphic Artist");
        graphicRole.setOrigin(0.5, 0.5);

        let sirma = this.add.text(400, 240, "Sirma Sirmov", {
            color: "#FFA500",
        });
        sirma.setOrigin(0.5, 0.5);
        let control = this.add.text(400, 475, "Press Esc to go back");

        this.keyEscape = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.ESC
        );
    }
    update(): void {
        if (Phaser.Input.Keyboard.JustDown(this.keyEscape)) {
            this.scene.start("start-game");
        }
    }
}
