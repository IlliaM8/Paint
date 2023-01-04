import Pensil from "./Pensil";

export default class Eraser extends Pensil {
  constructor(canvas) {
    super(canvas);
    this.setWhiteColor();
  }
  setWhiteColor() {
    this.ctx.fillStyle = "white";
    this.ctx.strokeStyle = "white";
  }
}
