import ExpoModulesCore

public class SmoothyModule: Module {
  public func definition() -> ModuleDefinition {
    Name("Smoothy")

    View(SmoothyView.self) {
    }
  }
}
