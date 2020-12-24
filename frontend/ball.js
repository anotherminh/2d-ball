export default class Ball {
    constructor(position, canvasCtx) {
        this.position = position;
        this.canvasCtx = canvasCtx;
    }

    move(position) {
        this.position = position;
    }

    render() {
        const { canvasCtx } = this;
        canvasCtx.fillStyle = 'green';
        canvasCtx.beginPath();
        canvasCtx.arc(100, 75, 50, 0, 2 * Math.PI);
        canvasCtx.stroke();
        canvasCtx.fill();
    }
}
