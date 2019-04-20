import { RenderingBehavior } from "./RenderingBehavior.js"
import {DisplayComponent} from "./DisplayComponent.js";

export class HtmlRendering extends RenderingBehavior {

    constructor(html_id: string = '#screen') {
        super();

        this.screen = document.querySelector(html_id);
    }
    public render(component: DisplayComponent): void {

        this.screen.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ${component.getHtml().character}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
    }
}