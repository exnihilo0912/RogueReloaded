import { Game } from "./Game";
//TODO ExitObserver design system to stop the game outside the inputs
export class RogueReloaded extends Game {
    constructor() {
        super();
    }
    play() {
        console.log('Play !');
    }
    pause() {
        console.log('Paused');
    }
    quit() {
        console.log('Good Bye - Quitting... !');
    }
}
