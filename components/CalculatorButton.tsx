import React, { useMemo } from "react";
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle, Text } from "react-native"

type ButtonType = 'number' | 'operator' | 'utility';

const colorVariants: Record<ButtonType, { background: TextStyle['color'], foreground: TextStyle['color'] }> = {
  number: { background: '#333333', foreground: '#fdfdfd' },
  operator: { background: '#ff9f0a', foreground: '#fdfdfd'},
  utility: { background: '#a5a5a5', foreground: '#000000' }
} 

export type Props = Omit<TouchableOpacityProps, 'onPress'> & {
  isSelected?: boolean,
  size?: 'md' | 'lg',
  type?: ButtonType,
  textStyle?: StyleProp<TextStyle>
  value: string,
  onPress?: (type: ButtonType, value: string) => void,
}

const getColors = (type: ButtonType, invert = false) => {
  const colors = colorVariants[type];
  return !invert ? colors : {
    background: colors.foreground,
    foreground: colors.background,
  }
}

export const CalculatorButton = ({
  size = 'md',
  style,
  textStyle,
  type = 'number',
  isSelected = false,
  value,
  onPress,
  ...rest
}: Props) => {
  const buttonStyles: StyleProp<ViewStyle> = [common.button];
  const textStyles: StyleProp<TextStyle> = [common.text];
  if(size === 'lg'){
    buttonStyles.push(common.largeButton);
  }
  const { background, foreground } = useMemo(() => getColors(type, isSelected), [type, isSelected]);
  buttonStyles.push({ backgroundColor: background }, style);
  textStyles.push({ color: foreground }, textStyle);
  return (
    <TouchableOpacity style={buttonStyles} onPress={() => onPress?.(type, value)}>
      <Text style={textStyles}>{value}</Text>
    </TouchableOpacity>
  )
}

export const common = StyleSheet.create({
  text: {
    fontSize: 24,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: '#ffffff',
    margin: 5
  },
  largeButton: {
    flex: 2,
    alignItems: "flex-start",
    paddingHorizontal: 40
  },
});