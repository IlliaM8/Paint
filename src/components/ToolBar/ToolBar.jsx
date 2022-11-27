import React, { useContext, useState } from "react";
import "./ToolBar.css";
import Modal from "../Modal/Modal";
import { ModalContext } from "../../context";
import ToolConfig from "../ToolConfig/ToolConfix";
import { toolsArr } from "../../utils/toolsArr";

function ToolBar() {
  const [tool, setTool] = useState(false);
  const { modalActive, setModalActive } = useContext(ModalContext);
  return (
    <div className="toolbar">
      <button className="toolbar__tools pointer"></button>
      <button
        onClick={() => {
          modalActive ? setModalActive(false) : setModalActive(true);
        }}
        style={{
          backgroundImage: `url(${tool ? tool.icon : toolsArr[0].icon})`,
        }}
        className="toolbar__tools tools-settings"
      ></button>
      <Modal
        top={70}
        left={100}
        active={modalActive}
        setActive={setModalActive}
      >
        <ToolConfig tool={tool} setTool={setTool} />
      </Modal>
    </div>
  );
}

export default ToolBar;
