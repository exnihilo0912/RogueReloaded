import {Component} from "./Component.js";

export class HPComponent extends Component {
    hp: number;

    constructor(hp: number = 100) {
        super();
        this.name = 'hp';
    }

    getHp(): number {
        return this.hp;
    }

    alterHp(amount: number) {
        return (this.hp - amount >= 0) ? (this.hp - amount) : 0;
    }
}