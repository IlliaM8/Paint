import { useState } from "react";
import Canvas from "./components/Canvas/Canvas";
import ToolBar from "./components/ToolBar/ToolBar";
import { ModalContext } from "./context";
import "./style/App.css";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        modalActive,
        setModalActive,
      }}
    >
      <div className="app">
        <ToolBar />
        <div className="canvas-container" onClick={() => setModalActive(false)}>
          <Canvas />
        </div>
      </div>
    </ModalContext.Provider>
  );
}

export default App;
