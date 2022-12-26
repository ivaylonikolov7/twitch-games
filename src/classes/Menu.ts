import { Game, Scene } from "phaser";
import { SelectableText } from "./SelectableText";

export class Menu {
    private active: number;
    private totalItems: number;
    private textObjects: SelectableText[];
    private keyDown!: Phaser.Input.Keyboard.Key;
    private keyUp!: Phaser.Input.Keyboard.Key;
    private keyEnter!: Phaser.Input.Keyboard.Key;
    private scene!: Scene;

    constructor(scene: Scene, texts: string[]) {
        this.active = 0;
        this.totalItems = texts.length;
        this.scene = scene;
        this.keyDown = scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.DOWN
        );
        this.keyUp = scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.UP
        );
        this.keyEnter = scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.ENTER
        );

        this.textObjects = texts.map((text, index) => {
            return new SelectableText(scene, 400, 200 + index * 40, text, {
                color: "#fff",
                fontSize: "30px",
            });
        });
        this.textObjects[0].active = true;
    }

    update() {
        this.textObjects.map((textObject) => {
            textObject.update();
        });

        if (Phaser.Input.Keyboard.JustDown(this.keyDown)) {
            this.moveMenuItemDown();
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyUp)) {
            this.moveMenuItemUp();
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyEnter)) {
            this.enterScene();
        }
    }

    moveMenuItemDown() {
        this.active++;
        if (this.active >= this.totalItems) {
            this.active = 0;
        }
        this.textObjects.map((textObject) => {
            textObject.active = false;
        });
        this.textObjects[this.active].active = true;
    }

    moveMenuItemUp() {
        this.active--;
        if (this.active < 0) {
            this.active = this.totalItems - 1;
        }
        this.textObjects.map((textObject) => {
            textObject.active = false;
        });
        this.textObjects[this.active].active = true;
    }

    enterScene() {
        if (this.active == 1) {
            this.scene.scene.start("About");
        }
    }
}
