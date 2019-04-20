import {Component} from "./Component.js";

export abstract class Entity {
    components: Array<Component>;

    //TODO use collection
    public hasComponent(type: string) {
        return this.components.some( (e) => e.getName() === type );
    }

    //TODO use collection
    public getComponent(type: string) {
        let comp = this.components.filter( (e) =>  e.getName() === type);
        return comp.pop();
    }

    //TODO use collection
    public addComponent(component: Component) {
        this.components.push(component);
    }
}