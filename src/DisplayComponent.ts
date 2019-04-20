import {Component} from "./Component.js";

//replace all instance variable by decorator
export class DisplayComponent extends Component {
    character: string;
    web: object;
    sprite: object;
    model: object;

    constructor({character = null, web = null, sprite = null, model = null}) {
        super();
        this.name = 'display';
        this.character = character;
        this.web = web;
        this.sprite = sprite;
        this.model = model;
    }

    public getCharacter(): string {
        return this.character;
    }
}