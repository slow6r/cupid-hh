import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '../types';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';

type UploadScreenNavigationProp = StackNavigationProp<RootStackParamList, 'UploadScreen'>;

export const UploadScreen = () => {
  const navigation = useNavigation<UploadScreenNavigationProp>();
  const [imageUri, setImageUri] = useState<string | null>(null);

  useEffect(() => {
    const loadScreenshots = async () => {
      try {
        const storedScreenshots = await AsyncStorage.getItem('screenshots');
        if (storedScreenshots) {
          const screenshotsArray = JSON.parse(storedScreenshots);
          // You can use this array to set the initial state if needed
        }
      } catch (error) {
        console.error('Failed to load screenshots from AsyncStorage', error);
      }
    };

    loadScreenshots();
  }, []);

  const handlePublish = async () => {
    if (imageUri) {
      try {
        const storedScreenshots = await AsyncStorage.getItem('screenshots');
        let screenshotsArray = storedScreenshots ? JSON.parse(storedScreenshots) : [];

        screenshotsArray.push(imageUri);

        await AsyncStorage.setItem('screenshots', JSON.stringify(screenshotsArray));

        setImageUri(null);

        console.log('Screenshot published and saved!');

        // Navigate to the HistoryScreen
        navigation.navigate('HistoryScreen' as any);
      } catch (error) {
        console.error('Failed to save screenshot to AsyncStorage', error);
      }
    }
  };

  useEffect(() => {
    const uploadHandler = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access media library is required!');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        if (result.assets && result.assets.length > 0) {
          const { uri } = result.assets[0];
          setImageUri(uri);
        } else {
          Alert.alert('No image selected');
        }
      }
    };

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={uploadHandler} style={styles.uploadButton}>
          <AntDesign name="plus" size={28} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.align}>
        <View style={styles.imageContainer}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
            <View style={styles.placeholder} />
          )}
        </View>
        <Image
          source={require('../assets/Frame-20.png')}
          style={styles.border}
        />

        <View style={styles.containers}>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.icon}>❤️</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.icon}>👑</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.icon}>🧠</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handlePublish} style={styles.publishButton}>
          <Image
            source={require('../assets/Group-63.png')}
            style={styles.buttonImg}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 67,
    paddingRight: 67,
    paddingTop: 30,
    backgroundColor: '#FC92C0',
  },
  buttonImg: {
    marginTop: 40,
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 60,
  },
  align: {
    alignItems: 'center',
  },
  textContainer: {
    width: 350,
    height: 99,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  containers: {
    gap: 10,
  },
  icon: {
    fontSize: 34,
  },
  text: {
    fontSize: 23,
  },
  imageContainer: {
    width: '100%',
    height: 523,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  border: {
    width: 360,
    marginTop: 30,
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  publishButton: {
    backgroundColor: '#FC92C0',
    padding: 10,
    borderRadius: 5,
  },
  publishButtonText: {
    color: 'white',
    fontSize: 16,
  },
  uploadButton: {
    backgroundColor: '#FC92C0',
    padding: 10,
    borderRadius: 5,
    marginRight: 15,
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default UploadScreen;
