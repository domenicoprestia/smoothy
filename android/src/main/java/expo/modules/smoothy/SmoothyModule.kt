package expo.modules.smoothy

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class SmoothyModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("Smoothy")

    View(SmoothyView::class) {
    }
  }
}
