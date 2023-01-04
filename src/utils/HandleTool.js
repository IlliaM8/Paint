import canvasState from "../store/canvasState";
import modalState from "../store/modalState";
import toolState from "../store/toolState";
import Pensil from "../tools/Pensil";

export const handleTool = (event, tool) => {
  event.stopPropagation();
  toolState.setToolInformation({
    name: tool.name,
    icon: tool.icon,
  });
  modalState.setInstrumentModalClose();
  if (tool.name === "Pensil") {
    toolState.setTool(new Pensil(canvasState.canvas));
  }
};
