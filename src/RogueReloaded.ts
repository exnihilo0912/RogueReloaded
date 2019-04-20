import { Game } from "./Game.js";
import { Player } from "./Player.js";
import { HPComponent } from "./HPComponent.js";
import { DisplayComponent } from "./DisplayComponent.js";
import { DisplaySystem } from "./DisplaySystem.js";
import { HtmlRendering} from "./HtmlRendering.js";

//TODO ExitObserver design system to stop the game outside the inputs

export class RogueReloaded {
    game: Game;

    constructor() {
        this.game = new Game();
        this.game.addSystem(new DisplaySystem(new HtmlRendering()));
        //this.game.addSystem(); add inputs
        //this.game.addSystem(); add movement
        //this.game.addSystem(); add physics
        const player = new Player();
        player.addComponent(new HPComponent(100));
        player.addComponent(new DisplayComponent({character: '@'}));

        this.game.addEntity(player);
    }

    play() {
        this.game.play();
    }
}