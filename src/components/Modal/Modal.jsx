import { observer } from "mobx-react-lite";
import React from "react";
import modalState from "../../store/modalState";
import "./Modal.css";
const Modal = observer(({ children, top, left, instrumental }) => {
  return (
    <div
      style={{ top: top, left: left }}
      className={
        instrumental
          ? modalState.instrumentModal
            ? "modal active"
            : "modal"
          : modalState.modal
          ? "modal active"
          : "modal"
      }
    >
      <div className="modal__content">{children}</div>
    </div>
  );
});

export default Modal;
