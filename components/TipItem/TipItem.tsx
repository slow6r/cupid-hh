// components/TipItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Импорт иконок

interface TipItemProps {
  title: string;
  onPress: () => void;
}

const TipItem: React.FC<TipItemProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <Text style={styles.itemTitle}>{title}</Text>
      <MaterialIcons style={styles.icon} name="navigate-next" size={33} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row', // Расположить элементы по горизонтали
    justifyContent: 'space-between', // Пространство между элементами
    alignItems: 'center', // Выравнивание по центру по вертикали
    backgroundColor: '#FC92C0', // Фон элемента
    padding: 35,
    marginVertical: 8,
    borderRadius: 10,
  },
  itemTitle: {
    color: 'black', // Цвет текста
    fontSize: 28,
    fontWeight: 'bold',
    maxWidth: 260,
  },
  icon: {
    marginLeft: 10, // Отступ между текстом и иконкой
  },
});

export default TipItem;
