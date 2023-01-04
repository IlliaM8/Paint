import { makeAutoObservable } from "mobx";

class ToolState {
  toolInformation = null;
  tool = null;
  toolWidth = 1;
  constructor() {
    makeAutoObservable(this);
  }
  setTool(tool) {
    this.tool = tool;
  }

  setFillColor(color) {
    this.tool.fillColor = color;
  }
  setStrokeColor(color) {
    this.tool.strokeColor = color;
  }
  setLineWidth(width) {
    this.tool.lineWidth = width;
    this.toolWidth = width;
  }
  setToolInformation(toolInformation) {
    this.toolInformation = toolInformation;
  }
}
export default new ToolState();
