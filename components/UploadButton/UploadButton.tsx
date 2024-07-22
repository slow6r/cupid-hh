import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';

type UploadButtonProps = {
  onUpload: (uri: string) => void;
};

const UploadButton: React.FC<UploadButtonProps> = ({ onUpload }) => {
  const pickImage = async () => {
    // Запрос разрешений на доступ к медиатеке
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access media library is required!');
      return;
    }

    // Открытие медиатеки для выбора изображения
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // Печать результата для отладки
      console.log(result);

      // Проверка на существование URI
      if (result.assets && result.assets.length > 0) {
        const { uri } = result.assets[0];
        onUpload(uri);
      } else {
        Alert.alert('No image selected');
      }
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <AntDesign name="plus" size={30} color="black" />
    </TouchableOpacity>
  );
};

export default UploadButton;
