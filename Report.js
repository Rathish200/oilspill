import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

const Report = () => {
  const [report, setReport] = useState({
    location: '',
    spillType: '',
    severity: '',
    latitude: '',
    longitude: '',
    additionalInfo: ''
  });

  const handleChange = (field, value) => {
    setReport({ ...report, [field]: value });
  };

  const handleSubmit = () => {
    // Simple validation check
    if (!report.location || !report.spillType || !report.severity || !report.latitude || !report.longitude) {
      Alert.alert('Error', 'Please fill out all required fields.');
      return;
    }

    // Submit logic here (e.g., send to a server or API)

    Alert.alert('Success', 'Oil spill report submitted successfully!');
    setReport({
      location: '',
      spillType: '',
      severity: '',
      latitude: '',
      longitude: '',
      additionalInfo: ''
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Report Oil Spill</Text>

      <TextInput
        style={styles.input}
        placeholder="Location"
        value={report.location}
        onChangeText={(text) => handleChange('location', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Type of Spill"
        value={report.spillType}
        onChangeText={(text) => handleChange('spillType', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Severity (e.g., Minor, Moderate, Severe)"
        value={report.severity}
        onChangeText={(text) => handleChange('severity', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Latitude"
        keyboardType="numeric"
        value={report.latitude}
        onChangeText={(text) => handleChange('latitude', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Longitude"
        keyboardType="numeric"
        value={report.longitude}
        onChangeText={(text) => handleChange('longitude', text)}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Additional Information (optional)"
        multiline
        numberOfLines={4}
        value={report.additionalInfo}
        onChangeText={(text) => handleChange('additionalInfo', text)}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Report</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007AFF',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Report;
