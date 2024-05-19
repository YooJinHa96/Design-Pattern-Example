import ExportStrategy from "../interface/ExportStrategy";

class ExportContext {
  private strategy: ExportStrategy | null = null;

  setStrategy(strategy: ExportStrategy) {
    this.strategy = strategy;
  }
  exportStragegy() {
    this.strategy!.export();
  }
}
export default ExportContext;
