import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';

const HistoryScreen = () => {
  const [screenshots, setScreenshots] = useState<string[]>([]);

  useEffect(() => {
    const loadScreenshots = async () => {
      try {
        const storedScreenshots = await AsyncStorage.getItem('screenshots');
        if (storedScreenshots) {
          setScreenshots(JSON.parse(storedScreenshots));
        }
      } catch (error) {
        console.error('Failed to load screenshots from AsyncStorage', error);
      }
    };

    loadScreenshots();
  }, []);

  const handleDelete = async (uri: string) => {
    try {
      const updatedScreenshots = screenshots.filter((item) => item !== uri);
      setScreenshots(updatedScreenshots);
      await AsyncStorage.setItem('screenshots', JSON.stringify(updatedScreenshots));
    } catch (error) {
      console.error('Failed to delete screenshot from AsyncStorage', error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={screenshots}
        keyExtractor={(item) => item}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
            <TouchableOpacity onPress={() => handleDelete(item)} style={styles.deleteButton}>
              <AntDesign name="close" size={30} color="white" />
            </TouchableOpacity>
          </View>
        )}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FC92C0',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginBottom: 10,
    position: 'relative',
    flex: 1,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 183,
    borderRadius: 20,
  },
  deleteButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    color: 'white',
    padding: 5,
    borderRadius: 10,
  },
});

export default HistoryScreen;
