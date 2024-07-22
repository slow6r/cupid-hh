import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Defs, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SplashScreen'>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'SubscriptionScreen' }],
      });
    }, 1500); // Задержка 3 секунды для имитации загрузки

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Svg width="100%" height="100%" viewBox="0 0 300 100">
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#ED217C" />
            <Stop offset="100%" stopColor="#5C1E35" />
          </LinearGradient>
        </Defs>
        <SvgText
          fill="url(#grad)"
          fontSize="50" // Размер шрифта 50 пикселей
          fontFamily="Syncopate-Bold"
          x="150" // Координата X (центр по горизонтали в viewBox)
          y="60" // Координата Y (центр по вертикали в viewBox)
          textAnchor="middle" // Центрирование по горизонтали
          alignmentBaseline="central" // Центрирование по вертикали
        >
          CUPID
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Фоновый цвет экрана
  },
});

export default SplashScreen;
