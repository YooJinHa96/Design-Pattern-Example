import lovelz from "./assets/lovelz.webp";
import "./App.css";
import { useState } from "react";
import Context from "./class/exportContext";
import ExportStrategyGLB from "./class/exportStrategyGLB";
import exportStrategyJSON from "./class/exportStratergJSON";

function App() {
  const [context] = useState(new Context());

  const handleGLBExport = () => {
    context.setStrategy(new ExportStrategyGLB());
    context.exportStragegy();
  };
  const handleGLTFExport = () => {
    context.setStrategy(new exportStrategyJSON());
    context.exportStragegy();
  };
  const handleFBXExport = () => {
    context.setStrategy(new exportStrategyJSON());
    context.exportStragegy();
  };
  return (
    <>
      <div>
        <img src={lovelz} className="logo" alt="Vite logo" />
      </div>
      <div style={{ display: "flex", gap: "5px" }}>
        <button onClick={handleGLBExport}>GLB EXPORT</button>
        <button onClick={handleGLTFExport}>GLTF EXPORT</button>
        <button onClick={handleFBXExport}>FBX EXPORT</button>
      </div>
    </>
  );
}

export default App;
