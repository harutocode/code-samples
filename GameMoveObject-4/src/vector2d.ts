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
    // ベクトルの速度を変更
    scale(scale: number) {
        this.x *= scale;
        this.y *= scale;
    }
    // ターゲットの角度を取得
    public static GetTargetAngle(start: Vector2D, target: Vector2D): number {
        let x = target.x - start.x;
        let y = target.y - start.y;
        return Math.atan2(y, x)
    }
    // 角度から向きベクトルを取得
    public static GetDirectionByAngle(angle: number): Vector2D {
        let y = Math.sin(angle);
        let x = Math.cos(angle);
        return new Vector2D(x, y);
    }
    // 円と円の衝突判定
    public static isCollision(len: number, p1: Vector2D, p2: Vector2D): boolean {
        let x = p1.x - p2.x;
        let y = p1.y - p2.y;
        let c = Math.sqrt(x * x + y * y);
    
        return c <= (len + len)
    }
}