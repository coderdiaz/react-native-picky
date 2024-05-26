import React from 'react';
import { ColorValue, Text, TextStyle } from 'react-native';

export interface PickerItemProps {
  label: string;
  value: string | number;
  testID?: string;
  style?: TextStyle;
  color?: ColorValue;
}

export const PickerItem = ({
  label,
  color,
  style,
  ...props
}: PickerItemProps) => {
  return (
    <Text style={{ color, ...style }} {...props}>
      {label}
    </Text>
  );
};
