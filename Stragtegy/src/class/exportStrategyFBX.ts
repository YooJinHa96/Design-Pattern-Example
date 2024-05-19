import ExportStrategy from "../interface/ExportStrategy";

class ExportStrategyFBX implements ExportStrategy {
  export(): void {
    console.log("Exporting FBX...");
    alert("Exporting FBX...");
  }
}
export default ExportStrategyFBX;
