import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Modal, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { Ionicons, Feather, Octicons, MaterialIcons } from '@expo/vector-icons';
import SplashScreen from './screens/SplashScreen';
import SubscriptionScreen from './screens/SubscriptionScreen';
import MainScreen from './screens/MainScreen';
import TipsScreen from './screens/TipsScreen';
import TipDetailScreen from './screens/TipDetailScreen';
import HistoryScreen from './screens/HistoryScreen';
import UploadScreen from './screens/UploadScreen';
import UploadButton from './components/UploadButton/UploadButton';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const styles = StyleSheet.create({
  headerLeftButton: {
    paddingLeft: 20,
  },
  headerRightButton: {
    paddingRight: 20,
  },
  logo: {
    width: 130,
    height: 50,
  },
  HistoryTitle: {
    fontSize: 28,
    fontWeight: '700',
  },
  TipTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    padding: 40,
    gap: 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeButton: {
    marginBottom: 20,
    zIndex: 1,
    marginLeft: 10,
  },
  modalButton: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#FC92C0',
    borderRadius: 10,
    gap: 20,
  },
  modalButtonText: {
    maxWidth: 277,
    fontSize: 28,
    color: 'black',
    fontWeight: '500',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    display: 'flex',
    gap: 20,
    alignItems: 'center',
  },
  modalButtonSubtext: {
    fontSize: 20,
    fontWeight: '500',
  },
  modalButtonIcon: {
    fontSize: 30,
  },
  modalButton2: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FC92C0',
    padding: 23,
    borderRadius: 40,
    gap: 10,
  },
  icon2: {
    marginLeft: 115,
  },
});

const forSlide = ({ current, next, inverted, layouts }: any) => {
  const translateY = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [layouts.screen.height, 0], // Переход снизу
  });

  return {
    cardStyle: {
      transform: [
        {
          translateY,
        },
      ],
    },
  };
};

const BackButton = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={styles.headerLeftButton}>
      <Ionicons name="chevron-back-sharp" size={30} color="#ED217C" />
    </TouchableOpacity>
  );
};

const BackButtonDark = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('TipsScreen')} style={styles.headerLeftButton}>
      <Ionicons name="chevron-back-sharp" size={30} color="white" />
    </TouchableOpacity>
  );
};

const BackButtonDarkTip = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={styles.headerLeftButton}>
      <Ionicons name="chevron-back-sharp" size={30} color="white" />
    </TouchableOpacity>
  );
};

const BackButtonUpdate = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={styles.headerLeftButton}>
      <Ionicons name="chevron-back-sharp" size={30} color="black" />
    </TouchableOpacity>
  );
};

const HistoryButton = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('HistoryScreen', { screenshots: [] })} style={styles.headerRightButton}>
      <Octicons name="history" size={30} color="black" />
    </TouchableOpacity>
  );
};

const LogoTitle = () => (
  <Image
    style={styles.logo}
    source={require('./assets/Frame-6.png')}
  />
);

const HistoryTitle = () => (
  <Text style={styles.HistoryTitle}>History</Text>
);

const TipTitle = () => (
  <Text style={styles.TipTitle}>TIPS</Text>
);

const MenuModal = ({ visible, onClose }: { visible: boolean, onClose: () => void }) => {
  const navigation = useNavigation<any>();

  const navigateToTipDetail = () => {
    navigation.navigate('TipDetailScreen', { tipId: 1 }); // Передача параметра tipId
    onClose();
  };

  const navigateToTips = () => {
    navigation.navigate('TipsScreen');
    onClose();
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={navigateToTipDetail}>
            <View style={styles.modalButtonContainer}>
              <Text style={styles.modalButtonText}>Struggling to get matches?</Text>
              <MaterialIcons name="navigate-next" size={33} color="black" />
            </View>
            <Text style={styles.modalButtonSubtext}>Try our AI app to enhance your appearance with personalized advice.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton2} onPress={navigateToTips}>
            <Text style={styles.modalButtonIcon}>💡</Text>
            <Text style={styles.modalButtonText}>Tips</Text>
            <MaterialIcons style={styles.icon2} name="navigate-next" size={33} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default function App() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleUpload = async (uri: string) => {
    setImageUri(uri); // Set the image URI to state
    console.log('Image uploaded:', uri); // For debugging
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen 
          name="SubscriptionScreen" 
          component={SubscriptionScreen} 
          options={{
            headerLeft: () => <BackButton />,
            headerBackTitleVisible: false,
            title: '',
            headerStyle: { backgroundColor: 'black', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
            headerTintColor: 'white',
          }} 
        />
        <Stack.Screen 
          name="MainScreen" 
          component={MainScreen} 
          options={{
            headerLeft: () => <TouchableOpacity onPress={() => toggleModal()} style={styles.headerLeftButton}>
              <Feather name="menu" size={30} color="black" />
            </TouchableOpacity>,
            headerTitle: () => <LogoTitle />,
            headerRight: () => <HistoryButton />,
            headerStyle: { backgroundColor: '#FC92C0', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
          }}
        />
        <Stack.Screen 
          name="UploadScreen" 
          component={UploadScreen} 
          options={{
            headerLeft: () => <BackButtonUpdate />,
            headerTitle: () => <LogoTitle />,
            headerRight: () => <UploadButton onUpload={handleUpload} />, // Pass the function here
            headerStyle: { backgroundColor: '#FC92C0', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
          }} 
        />
        <Stack.Screen 
          name="HistoryScreen" 
          component={HistoryScreen} 
          options={{
            headerLeft: () => <BackButtonUpdate />,
            headerTitle: () => <HistoryTitle />,
            headerStyle: { backgroundColor: '#FC92C0', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
          }}
        />
        <Stack.Screen 
          name="TipsScreen" 
          component={TipsScreen} 
          options={{
            headerLeft: () => <BackButtonDarkTip />,
            headerTitle: () => <TipTitle />,
            headerStyle: { backgroundColor: 'black', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
          }}
        />
        <Stack.Screen 
          name="TipDetailScreen" 
          component={TipDetailScreen} 
          options={{
            cardStyleInterpolator: forSlide,
            headerLeft: () => <BackButtonDark />,
            headerStyle: { backgroundColor: 'black', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
            headerTintColor: 'white',
            headerBackTitleVisible: false,
            title: '',
          }}
        />
      </Stack.Navigator>
      <MenuModal 
        visible={isModalVisible} 
        onClose={toggleModal} 
      />
    </NavigationContainer>
  );
}
