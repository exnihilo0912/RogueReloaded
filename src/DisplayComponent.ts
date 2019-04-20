import {Component} from "./Component.js";

//replace all instance variable by decorator
export class DisplayComponent extends Component {
    protected character: string;
    protected html: {x: number, y: number, character: string};//{x, y, char}
    protected sprite: object;
    protected model: object;

    constructor({character = null, html = null, sprite = null, model = null}) {
        super();
        this.name = 'display';
        this.character = character;
        this.html = html;
        this.sprite = sprite;
        this.model = model;
    }

    public getCharacter(): string {
        return this.character;
    }

    public getHtml(): {x: number, y: number, character: string} {
        return this.html;
    }

    //TODO modifier that changes all the display mode data (if possible)
}