// screens/TipsScreen.tsx
import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import TipItem from '../components/TipItem'; // Импорт компонента TipItem
import { RootStackParamList } from '../types';

// Определите типы для экрана
type TipsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TipsScreen'>;

// Создайте данные для примера
const tips = [
  { id: '1', title: 'What Attracts People?' },
  { id: '2', title: 'First Impressions Matter'},
  { id: '3', title: 'First Date Success' },
  { id: '4', title: 'Tips for a successful first date' },
  { id: '5', title: 'Engaging Conversations' },
  { id: '6', title: 'Avoid These Mistakes' },
  { id: '7', title: 'Date Dress Tips' },
  { id: '8', title: 'Struggling to get matches?' },
];

const TipsScreen = () => {
  const navigation = useNavigation<TipsScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <FlatList
        data={tips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TipItem
            title={item.title}
            onPress={() => navigation.navigate('TipDetailScreen', { tipId: item.id })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Черный фон для страницы
    padding: 16, // Внутренний отступ для контейнера
  },
});

export default TipsScreen;
