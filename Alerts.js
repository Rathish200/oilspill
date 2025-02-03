import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, message: 'New oil spill detected near the Gulf of Mexico.', date: '2024-09-07', lat: 27.5, lng: -90.0 },
    { id: 2, message: 'Marine traffic increased in the North Atlantic Ocean.', date: '2024-09-05', lat: 40.7, lng: -50.5 },
    { id: 3, message: 'Temperature anomalies detected in the South Pacific.', date: '2024-09-03', lat: -25.3, lng: 130.4 }
  ]);

  const clearAlerts = () => {
    Alert.alert(
      "Clear All Alerts",
      "Are you sure you want to clear all alerts?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => setAlerts([]) // Clears the alerts
        }
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Alerts</Text>
        <TouchableOpacity style={styles.clearButton} onPress={clearAlerts}>
          <Text style={styles.clearButtonText}>Clear All</Text>
        </TouchableOpacity>
      </View>
      {alerts.length > 0 ? (
        alerts.map(alert => (
          <View key={alert.id} style={styles.alertBox}>
            <Text style={styles.alertMessage}>{alert.message}</Text>
            <Text style={styles.alertDate}>{alert.date}</Text>
            <View style={styles.locationContainer}>
              <Text style={styles.locationLabel}>Location:</Text>
              <Text style={styles.locationText}>Latitude: {alert.lat}</Text>
              <Text style={styles.locationText}>Longitude: {alert.lng}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.noAlerts}>No alerts at the moment.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  clearButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 5,
    padding: 10,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  alertMessage: {
    fontSize: 16,
    color: '#333',
  },
  alertDate: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  locationContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  locationLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  locationText: {
    fontSize: 14,
    color: '#333',
  },
  noAlerts: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default Alerts;
