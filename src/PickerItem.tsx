import React from 'react';
import { ColorValue, StyleProp, Text, TextStyle } from 'react-native';

export interface PickerItemProps {
  color?: ColorValue;
  label: string;
  value: string | number;
  testID?: string;
  style?: StyleProp<TextStyle>;
}

export const PickerItem = ({ color, label, ...props }: PickerItemProps) => {
  return (
    <Text style={{ color }} {...props}>
      {label}
    </Text>
  );
};
