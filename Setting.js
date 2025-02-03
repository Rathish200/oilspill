import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Modal, FlatList, Pressable, useColorScheme } from 'react-native';

const SettingsScreen = () => {
  const colorScheme = useColorScheme();
  const [isLocationEnabled, setLocationEnabled] = useState(true);
  const [isSoundEnabled, setSoundEnabled] = useState(true);
  const [isDarkMode, setDarkMode] = useState(colorScheme === 'dark');
  const [language, setLanguage] = useState('English');
  const [modalVisible, setModalVisible] = useState(false);

  const handleLocationToggle = () => setLocationEnabled(prev => !prev);
  const handleSoundToggle = () => setSoundEnabled(prev => !prev);
  const handleDarkModeToggle = () => setDarkMode(prev => !prev);
  const toggleModal = () => setModalVisible(!modalVisible);

  const languages = ['English', 'Spanish', 'French', 'German'];

  const isDark = isDarkMode || colorScheme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#121212' : '#fff' }]}>
      <Text style={[styles.header, { color: isDark ? '#fff' : '#333' }]}>Settings</Text>

      <View style={styles.section}>
        <Text style={[styles.label, { color: isDark ? '#ccc' : '#333' }]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={handleDarkModeToggle}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.label, { color: isDark ? '#ccc' : '#333' }]}>Enable Location</Text>
        <Switch
          value={isLocationEnabled}
          onValueChange={handleLocationToggle}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.label, { color: isDark ? '#ccc' : '#333' }]}>Enable Sound</Text>
        <Switch
          value={isSoundEnabled}
          onValueChange={handleSoundToggle}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.label, { color: isDark ? '#ccc' : '#333' }]}>Language</Text>
        <TouchableOpacity style={[styles.languageButton, { backgroundColor: isDark ? '#333' : '#fff' }]} onPress={toggleModal}>
          <Text style={[styles.languageButtonText, { color: isDark ? '#fff' : '#333' }]}>{language}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity
          style={styles.contactSupportButton}
          onPress={() => alert('Contact Us pressed')}
        >
          <Text style={styles.contactSupportText}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => alert('Logout button pressed')}
          style={styles.logoutButton}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Language Selection Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={[styles.modalContainer, { backgroundColor: isDark ? '#00000099' : '#ffffff99' }]}>
          <View style={[styles.modalContent, { backgroundColor: isDark ? '#333' : '#fff' }]}>
            <FlatList
              data={languages}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Pressable
                  style={[styles.languageOption, { backgroundColor: language === item ? '#007AFF' : 'transparent' }]}
                  onPress={() => {
                    setLanguage(item);
                    toggleModal();
                  }}
                >
                  <Text style={[styles.languageOptionText, { color: language === item ? '#fff' : isDark ? '#ccc' : '#333' }]}>{item}</Text>
                </Pressable>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  languageButton: {
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  languageButtonText: {
    fontSize: 16,
  },
  contactSupportButton: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#007AFF', // Primary color for button
    alignItems: 'center',
  },
  contactSupportText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
  logoutButton: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#FF3B30', // Color for logout button
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  languageOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  languageOptionText: {
    fontSize: 16,
  },
});

export default SettingsScreen;
