import React, { useContext } from "react";
import "./Tool.css";
import { toolsArr } from "../../utils/toolsArr";

function Tools({ setTool, active, setActive }) {
  const handleTool = (tool) => {
    setTool({
      name: tool.name,
      icon: tool.icon,
    });
    setActive(false);
  };
  return (
    <div className="tools__content">
      {toolsArr.map((tool) => (
        <div
          key={tool.name}
          className="tool__box"
          onClick={() => handleTool(tool)}
        >
          <div
            style={{ backgroundImage: `url(${tool.icon})` }}
            className="tool__icon"
          ></div>
          <div className="tool__name">{tool.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Tools;
