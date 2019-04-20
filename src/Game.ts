import { System} from "./System.js";
import { Entity} from "./Entity.js";

/**
 * basic game structure
 * need at least:
 *  - DisplaySystem
 *  - InputSystem
 *  - MovementSystem
 *
 */
export class Game {
    name: string;
    systems: Array<System>;
    entities: Array<Entity>;

    constructor() {
        this.systems = [];
        this.entities = [];
    }
    /**
     * @return string [game name]
     */
    getName(): string {
        return this.name;
    }

    //TODO check instanceOf system to avoid double
    //TODO use collection check
    addSystem(system: System): boolean {
        this.systems.push(system);
        return true;
    }

    //TODO check instanceOf system to avoid double
    //TODO use collection check
    addEntity(entity: Entity): boolean {
        this.entities.push(entity);
        return true;
    }

    public play(): void {
        console.log('Play !');
        for(let i = 0; i < 1000; i++) {
            this.systems.forEach( (e) => {
                this.entities.forEach((el) => {
                    if (el.hasComponent(e.getName()))
                        console.log(`do something  with ${e.getName()}!`);
                })
            });
        }
    }

    public pause(): void {
        console.log('Paused');
    }

    public quit(): void {
        console.log('Good Bye - Quitting... !');
    }
}