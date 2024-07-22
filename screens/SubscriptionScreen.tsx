import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type SubscriptionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SubscriptionScreen'>;

const SubscriptionScreen = () => {
  const navigation = useNavigation<SubscriptionScreenNavigationProp>();

  // Пустая функция, ничего не делает при нажатии
  const onPress = () => {
    // Ничего не делаем
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
            source={require('../assets/match1.png')}
            style={styles.image} // Обновите путь к вашему изображению
          />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}><Text style={styles.icon}>🔥</Text> Unlimited Rizz</Text>
        <Text style={styles.listItem}><Text style={styles.icon}>🤝</Text> Trusted by Millions</Text>
        <Text style={styles.listItem}><Text style={styles.icon}>❤️‍🔥</Text> Coach Recommended</Text>
        <Text style={styles.listItem}><Text style={styles.icon}>🍯</Text> Proven to Get Dates</Text>
        <Text style={styles.listItem}><Text style={styles.icon}>📈</Text> x10 More Responses</Text>
        <Text style={styles.listItem}><Text style={styles.icon}>😈</Text> x8 More Dates</Text>
      </View>
      <View style={styles.footer}>
        <Image source={require('../assets/Group-62.png')} style={styles.tag}/>
        <Text style={styles.footerTitle}>Elevate Your Game</Text>
        <TouchableOpacity style={styles.subscribeButton} onPress={onPress}>
            <Text style={styles.buttonText}>Unlock Free Trial</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>risk-free trial then $8.67/week</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 134
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  icon: {
    fontSize: 35,
  },
  tag: {
    position: 'absolute',
    top: -15,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    paddingTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subscribeButton: {
    backgroundColor: '#00A676',
    padding: 15,
    alignItems: 'center',
    width: 273,
    height: 53,
    borderRadius: 50,
  },
  listContainer: {
    gap: 5,
    flexGrow: 1,
    justifyContent: 'center',
    margin: 'auto',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
  listItem: {
    fontSize: 20,
    color: 'white',
  },
  footer: {
    position: 'relative',
    top: -30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 342,
    height: 213,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#00A676',
    shadowColor: '#00A676',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    overflow: 'visible',
    paddingTop: 50,
    marginBottom: 20,
  },
  footerTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: 'white',
    marginBottom: 16,
  },
  footerText: {
    fontSize: 15,
    color: 'white',
    marginTop: 22,
    textAlign: 'center',
  },
});

export default SubscriptionScreen;
