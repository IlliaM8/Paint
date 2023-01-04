import { observer } from "mobx-react-lite";
import React from "react";
import modalState from "../../store/modalState";
import toolState from "../../store/toolState";
import { toolsArr } from "../../utils/toolsArr";
import DrowToolsModal from "../DrowToolsModal/DrowToolsModal";
import Modal from "../Modal/Modal";
import "./ToolConfig.css";
const ToolModal = observer(() => {
  const changeColor = (e) => {
    toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value);
  };
  return (
    <div className="tools-config">
      <div
        className="tools__tool options "
        onClick={() => modalState.setInstrumentModalActive()}
      >
        <div className="tool__name">
          {toolState.toolInformation
            ? toolState.toolInformation.name
            : toolsArr[0].name}
        </div>
        <div
          className="tools__icon"
          style={{
            backgroundImage: `url(${
              toolState.toolInformation
                ? toolState.toolInformation.icon
                : toolsArr[0].icon
            })`,
          }}
        ></div>
        <Modal instrumental={true} top={80} left={-10}>
          <DrowToolsModal />
        </Modal>
        <div className="arrow"></div>
      </div>
      <div className="tool_color options">
        <div className="coolor__label">Color</div>
        <input
          type="color"
          className="color__plate"
          onChange={(e) => changeColor(e)}
        />
        <div className="arrow"></div>
      </div>
      <div htmlFor="widthChange" className="toole__range options">
        <label className="range__label">Line width:{toolState.toolWidth}</label>
        <input
          type="range"
          id="widthChange"
          value={toolState.toolWidth}
          min="1"
          max="100"
          onChange={(e) => toolState.setLineWidth(e.target.value)}
        />
        <div className="arrow"></div>
      </div>
    </div>
  );
});

export default ToolModal;
