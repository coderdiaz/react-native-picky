import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

export interface PickerItemProps {
  label: string;
  value: string | number;
  testID?: string;
  style?: StyleProp<TextStyle>;
}

export const PickerItem = ({ label, ...props }: PickerItemProps) => {
  return <Text {...props}>{label}</Text>;
};
