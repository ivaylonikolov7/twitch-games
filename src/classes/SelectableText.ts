import { Console } from "console";
import { Scene } from "phaser";

export class SelectableText extends Phaser.GameObjects.Text {
    public scene!: Scene;
    public active: boolean;
    public sceneText!: Phaser.GameObjects.Text;
    private line!: Phaser.GameObjects.Line;
    ORANGE = 0xffa500;

    constructor(
        scene: Scene,
        x: number,
        y: number,
        text: string,
        textStyle: Phaser.Types.GameObjects.Text.TextStyle
    ) {
        super(scene, x, y, text, textStyle);
        this.active = false;

        this.sceneText = this.scene.add.existing(this);
        this.sceneText.setOrigin(0.5, 0.5);

        this.line = this.scene.add.line(
            this.x, // x + 1/4
            this.y + this.height / 2, // under text
            0,
            0,
            this.sceneText.width / 2, // width is half of text
            0,
            this.ORANGE,
            1
        );
        this.line.setOrigin(0.5, 0.5);
        this.scene.add.tween({
            targets: this.line,
            duration: 1000,
            repeat: -1,
            strokeAlpha: 0,
            ease: Phaser.Math.Easing.Sine.InOut,
        });
    }
    update() {
        this.line.alpha = Number(this.active);
    }
}
