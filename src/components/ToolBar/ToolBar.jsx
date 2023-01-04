import React from "react";
import Modal from "../Modal/Modal";

import ToolModal from "../ToolConfig/ToolModal";
import modalState from "../../store/modalState";
import toolState from "../../store/toolState";
import canvasState from "../../store/canvasState";
import { toolsArr } from "../../utils/toolsArr";
import { observer } from "mobx-react-lite";

import Eraser from "../../tools/Eraser";
import Rectangle from "../../tools/Rectagle";

import "./ToolBar.css";

const ToolBar = observer(() => {
  return (
    <div className="toolbar">
      <div className="toolbar__container">
        <button
          onClick={() => {
            modalState.modal
              ? modalState.setModalClose()
              : modalState.setModalActive();
          }}
          style={{
            backgroundImage: `url(${
              toolState.toolInformation
                ? toolState.toolInformation.icon
                : toolsArr[0].icon
            })`,
          }}
          className="toolbar__tools tools-settings"
        ></button>
        <button
          className="toolbar__tools eraser"
          onClick={(e) => toolState.setTool(new Eraser(canvasState.canvas))}
        ></button>
        <button
          className="toolbar__tools rect"
          onClick={(e) => toolState.setTool(new Rectangle(canvasState.canvas))}
        ></button>
        <button
          className="toolbar__tools undo"
          onClick={() => canvasState.undo()}
        ></button>
        <button
          className="toolbar__tools redo"
          onClick={() => canvasState.redo()}
        ></button>
        <Modal top={68} left={100}>
          <ToolModal />
        </Modal>
      </div>
    </div>
  );
});

export default ToolBar;
