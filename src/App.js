import Canvas from "./components/Canvas/Canvas";
import ToolBar from "./components/ToolBar/ToolBar";
import "./style/App.css";

function App() {
  return (
    <div className="app">
      <ToolBar />
      <Canvas />
    </div>
  );
}

export default App;
