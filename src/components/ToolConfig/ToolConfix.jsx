import React, { useState } from "react";
import { toolsArr } from "../../utils/toolsArr";
import Modal from "../Modal/Modal";
import Tools from "../Totls/Tools";
import "./ToolConfig.css";
function ToolConfig({ tool, setTool }) {
  const [toolModalActive, setToolModalActive] = useState(false);
  return (
    <div className="tools-config">
      <div
        className="tools__tool options"
        onClick={() =>
          toolModalActive ? setToolModalActive(false) : setToolModalActive(true)
        }
      >
        <div className="tool__name">{tool ? tool.name : toolsArr[0].name}</div>
        <div
          className="tools__icon"
          style={{
            backgroundImage: `url(${tool ? tool.icon : toolsArr[0].icon})`,
          }}
        ></div>
        <Modal
          top={80}
          left={-10}
          active={toolModalActive}
          setActive={setToolModalActive}
        >
          <Tools
            active={toolModalActive}
            setActive={setToolModalActive}
            tool={tool}
            setTool={setTool}
          />
        </Modal>
        <div className="arrow"></div>
      </div>
      <div className="tool_color options">
        <div className="color__name">Red</div>
        <div className="color__plate" style={{ background: "red" }}></div>
        <div className="arrow"></div>
      </div>
      <div className="toole__range options">
        <div className="range__label">Line width</div>
        <input type="range" />
        <div className="arrow"></div>
      </div>
    </div>
  );
}

export default ToolConfig;
