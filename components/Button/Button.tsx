// components/Button/Button.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { tw } from 'react-native-tailwindcss';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[tw.bgBlue500, tw.p4, tw.rounded, style]} onPress={onPress}>
      <Text style={[tw.textWhite, tw.textCenter]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
