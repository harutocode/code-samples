export default class Vector2D {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x      = x;
        this.y      = y;
    }

    toZero() {
        this.x = 0;
        this.y = 0;
    }
    addToX(x: number) {
        this.x += x;
    }
    addToY(y: number) {
        this.y += y;
    }
    add(v: Vector2D) {
        this.addToX(v.x);
        this.addToY(v.y);
    }
}