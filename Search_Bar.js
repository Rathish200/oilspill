import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Search_Bar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (text) => {
    setQuery(text);
    if (onSearch) {
      onSearch(text); // Call the onSearch prop with the query text
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="search-outline" size={20} color="#007AFF" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={handleChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    marginHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
});

export default Search_Bar;
