// components/Screenshot/ScreenshotItem.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { tw } from 'react-native-tailwindcss';

interface ScreenshotItemProps {
  uri: string;
  onDelete: () => void;
}

const ScreenshotItem: React.FC<ScreenshotItemProps> = ({ uri, onDelete }) => {
  return (
    <View style={[tw.flexRow, tw.justifyBetween, tw.itemsCenter, tw.mY2]}>
      <Image source={{ uri }} style={[tw.w20, tw.h20]} />
      <TouchableOpacity onPress={onDelete}>
        <Text style={[tw.textRed500, tw.textLg]}>✖</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenshotItem;
