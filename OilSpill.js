import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const OilSpillPrediction = () => {
  return (
    <View style={styles.container}>
      <Text>Oil Spill Prediction Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OilSpillPrediction;
