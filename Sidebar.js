import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Sidebar = ({ navigation }) => {
  const slideAnim = useRef(new Animated.Value(-300)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 300, delay: 100, useNativeDriver: true }),
    ]).start();
  }, [slideAnim, fadeAnim]);

  const handleButtonPressIn = () => {
    Animated.spring(buttonAnim, { toValue: 0.95, useNativeDriver: true }).start();
  };

  const handleButtonPressOut = () => {
    Animated.spring(buttonAnim, { toValue: 1, useNativeDriver: true }).start();
  };

  return (
    <Animated.View style={[styles.container, { transform: [{ translateX: slideAnim }] }]}>
      <View style={styles.innerContainer}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profilePic} />
          <Text style={styles.profileName}>Jane Smith</Text>
        </View>
        {['Home', 'Profile', 'Alerts', 'Report', 'Settings', 'Oil Spill Prediction'].map((screen) => (
          <Animated.View key={screen} style={[styles.buttonContainer, { opacity: fadeAnim }]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(screen)}
              onPressIn={handleButtonPressIn}
              onPressOut={handleButtonPressOut}
            >
              <Icon name={getIconName(screen)} size={22} color="#007AFF" style={styles.icon} />
              <Text style={styles.buttonText}>{screen}</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
      </Animated.View>
  );
};

const getIconName = (screen) => {
  switch (screen) {
    case 'Home':
      return 'home-outline';
    case 'Profile':
      return 'person-outline';
    case 'Alerts':
      return 'notifications-outline';
    case 'Report':
      return 'document-text-outline';
    case 'Settings':
      return 'settings-outline';
    case 'Oil Spill Prediction':
      return 'git-compare-outline'; // Icon for Oil Spill Prediction
    default:
      return 'menu-outline';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Light gray background for the sidebar
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0', // Subtle border color
  },
  innerContainer: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {
    marginBottom: 30,
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: '#fff', // White background for the profile section
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#007AFF', // Blue border for the profile picture
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Darker text color for better readability
  },
  buttonContainer: {
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#fff', // White background for buttons
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    color: '#333', // Darker text color for better readability
    marginLeft: 15,
  },
  icon: {
    marginRight: 15,
  },
});

export default Sidebar;

