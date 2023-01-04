import { useState } from "react";
import Canvas from "./components/Canvas/Canvas";
import ToolBar from "./components/ToolBar/ToolBar";
import modalState from "./store/modalState";
import "./style/App.css";

function App() {
  const [tool, setTool] = useState();

  return (
    <div className="app">
      <ToolBar tool={tool} setTool={setTool} />
      <div
        className="canvas-container"
        onClick={() => modalState.setModalClose()}
      >
        <Canvas />
      </div>
    </div>
  );
}

export default App;
