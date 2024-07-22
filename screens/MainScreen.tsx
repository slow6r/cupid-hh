import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'MainScreen'>;

const MainScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('UploadScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Upload a screenshot of a chat or bio</Text>
        <Image
          style={styles.image}
          source={require('../assets/Group-61.png')} // Обновите путь к вашему изображению
        />
      </View>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Image
          source={require('../assets/Frame8.png')} // Картинка для кнопки
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FC92C0', // Кастомный цвет
  },
  textContainer: {
    width: 268, // Ограничение ширины контейнера
    alignItems: 'center', // Центрируем текст и изображение внутри контейнера
    marginTop: 80, // Отступ сверху
    marginBottom: 53, // Отступ снизу для кнопки загрузки
  },
  text: {
    textAlign: 'center', // Центрируем текст внутри контейнера
    fontSize: 28, // Установите нужный размер шрифта 
    marginBottom: 20,
    fontWeight: '700', // Установите нужное значение для fontWeight
  },
  image: {
    width: 300, // Установите нужные размеры
    height: 320,
    resizeMode: 'stretch',
    marginBottom: 40, // Установите нужные размеры
  },
  button: {
    width: 391,
    height: 70,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default MainScreen;
