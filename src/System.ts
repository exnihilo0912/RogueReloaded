export interface System {
    getName(): string;
    do(component: any): void;
}