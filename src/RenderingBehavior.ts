import { DisplayComponent} from "./DisplayComponent.js";

//display subsystem
export abstract class RenderingBehavior {
    screen: any;

    /** render display component om the screen **/
    public abstract render(component: DisplayComponent): void;
}