import { System} from "./System.js";
import { RenderingBehavior } from "./RenderingBehavior.js";
import {DisplayComponent} from "./DisplayComponent.js";

export class DisplaySystem implements System {

    renderer: RenderingBehavior;

    constructor(renderer: RenderingBehavior) {
        this.renderer = renderer;
    }

    /** call the renderer to display the component **/
    render(component: DisplayComponent) {
        this.renderer.render(component);
    }

    getName(): string {
        return 'display';
    }
}