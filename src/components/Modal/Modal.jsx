import React from "react";
import "./Modal.css";
function Modal({ active, children, top, left }) {
  return (
    <div
      style={{ top: top, left: left }}
      className={active ? "modal active" : "modal"}
    >
      <div className="modal__content">{children}</div>
    </div>
  );
}

export default Modal;
