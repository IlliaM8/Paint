import React from "react";
import "./DrowToolsModal.css";
import { toolsArr } from "../../utils/toolsArr";
import { handleTool } from "../../utils/HandleTool";

function DrowToolsModal() {
  return (
    <div className="tools__content">
      {toolsArr.map((tool) => (
        <div
          key={tool.name}
          className="tool__box"
          onClick={(event) => handleTool(event, tool)}
        >
          <div
            style={{
              backgroundImage: `url(${tool.icon})`,
            }}
            className="tool__icon"
          ></div>
          <div className="tool__name">{tool.name}</div>
        </div>
      ))}
    </div>
  );
}

export default DrowToolsModal;
