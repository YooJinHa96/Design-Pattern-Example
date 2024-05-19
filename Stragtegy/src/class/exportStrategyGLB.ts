import ExportStrategy from "../interface/ExportStrategy";
class ExportStrategyGLB implements ExportStrategy {
  export(): void {
    console.log("Exporting GLB...");
    alert("Exporting GLB...");
  }
}
export default ExportStrategyGLB;
