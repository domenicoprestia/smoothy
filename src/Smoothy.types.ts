import type { StyleProp, ViewStyle } from 'react-native';

export type OnTapEventPayload = Record<string, never>;

export type SmoothyViewProps = {
  style?: StyleProp<ViewStyle>;
};
