import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import canvasState from "../../store/canvasState";

import "./Canvas.css";
const Canvas = observer(() => {
  const canvasRef = useRef();
  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
  }, []);
  const mouseDownHandler = () => {
    canvasState.pushToUndo(canvasRef.current.toDataURL());
  };
  return (
    <div className="canvas">
      <canvas
        onMouseDown={() => mouseDownHandler()}
        ref={canvasRef}
        width={700}
        height={500}
      ></canvas>
    </div>
  );
});

export default Canvas;
