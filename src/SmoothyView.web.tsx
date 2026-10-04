import { SmoothyViewProps } from './Smoothy.types';

// SmoothyView is not available on the web platform.
export default function SmoothyView(_props: SmoothyViewProps) {
  throw new Error('SmoothyView is not available on the web platform.');
}
