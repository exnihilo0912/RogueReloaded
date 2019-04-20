import { System} from "./System.js";
import { RenderingBehavior } from "./RenderingBehavior.js";
import {DisplayComponent} from "./DisplayComponent.js";

export class DisplaySystem implements System {

    renderer: RenderingBehavior;

    constructor(renderer: RenderingBehavior) {
        this.renderer = renderer;
    }

    /** call the renderer to display the component **/
    public do(component: DisplayComponent): void {
        this.renderer.render(component);
    }

    public getName(): string {
        return 'display';
    }
}