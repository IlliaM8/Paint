import React from "react";
import "./ToolBar.css";
import pan from "../../assets/img/pencil.svg";

function ToolBar() {
  return (
    <div className="toolbar">
      <button className="toolbar__tools pointer"></button>
      <button
        style={{ backgroundImage: `url(${pan})` }}
        className="toolbar__tools tools-settings"
      ></button>
      <button className="toolbar__tools fill"></button>
    </div>
  );
}

export default ToolBar;
