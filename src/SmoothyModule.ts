import { NativeModule, requireNativeModule } from 'expo';

declare class SmoothyModule extends NativeModule<{}> {}

export default requireNativeModule<SmoothyModule>('Smoothy');
