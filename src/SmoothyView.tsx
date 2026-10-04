import { requireNativeView } from 'expo';
import * as React from 'react';

import { SmoothyViewProps } from './Smoothy.types';

const NativeView: React.ComponentType<SmoothyViewProps> = requireNativeView('Smoothy');

export default function SmoothyView(props: SmoothyViewProps) {
  return <NativeView {...props} />;
}
