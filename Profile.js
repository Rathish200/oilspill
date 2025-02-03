import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Profile = () => {
  const profileData = {
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "+9876543210",
    location: "New York, USA",
    role: "Marine Environmental Analyst",
    bio: "Passionate about preserving marine ecosystems. I specialize in analyzing marine pollution and oil spill detection.",
    recentActivity: [
      "Reported an oil spill in the Pacific Ocean.",
      "Monitored environmental data for the Gulf of Mexico.",
      "Submitted a report on marine biodiversity."
    ],
    expertise: [
      "Oil Spill Detection",
      "Marine Life Conservation",
      "Data Analysis",
      "Environmental Impact Assessment"
    ]
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={{ uri: 'https://via.placeholder.com/120' }} style={styles.profilePic} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{profileData.name}</Text>
          <Text style={styles.role}>{profileData.role}</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.sectionHeader}>Contact Information</Text>
        <Text style={styles.info}>Email: {profileData.email}</Text>
        <Text style={styles.info}>Phone: {profileData.phone}</Text>
        <Text style={styles.info}>Location: {profileData.location}</Text>

        <Text style={styles.sectionHeader}>Bio</Text>
        <Text style={styles.bio}>{profileData.bio}</Text>

        <Text style={styles.sectionHeader}>Expertise</Text>
        {profileData.expertise.map((skill, index) => (
          <Text key={index} style={styles.listItem}>• {skill}</Text>
        ))}

        <Text style={styles.sectionHeader}>Recent Activity</Text>
        {profileData.recentActivity.map((activity, index) => (
          <Text key={index} style={styles.listItem}>• {activity}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#007AFF',
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: 18,
    color: '#555',
    marginTop: 5,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  listItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});

export default Profile;
