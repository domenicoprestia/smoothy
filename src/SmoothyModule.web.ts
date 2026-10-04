import { registerWebModule, NativeModule } from 'expo';

// SmoothyModule is not available on the web platform.
class SmoothyModule extends NativeModule<{}> {}

export default registerWebModule(SmoothyModule, 'SmoothyModule');
