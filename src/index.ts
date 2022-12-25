import { Game, Types } from "phaser";
import { StartGame } from "./scenes";
const gameConfig: Types.Core.GameConfig = {
    title: "Phaser game tutorial",
    type: Phaser.AUTO,
    backgroundColor: "#000",
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        },
    },
    render: {
        antialiasGL: false,
        pixelArt: true,
    },
    autoFocus: true,
    audio: {
        disableWebAudio: false,
    },
    scene: [StartGame],
};

window.game = new Game(gameConfig);
