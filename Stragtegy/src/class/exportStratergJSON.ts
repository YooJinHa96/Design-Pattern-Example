import ExportStrategy from "../interface/ExportStrategy";

class exportStrategyJSON implements ExportStrategy {
  export() {
    console.log("Exporting JSON...");
    alert("Exporting JSON...");
  }
}
export default exportStrategyJSON;
