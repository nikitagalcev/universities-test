import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const CountryComponent = ({ navigation, name }) => {

  const onCountryPressHandler = () => {
    navigation.push('Country', { name })
  }
  
  return (
    <TouchableOpacity style={styles.country} onPress={onCountryPressHandler}>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  country: {
    alignItems: 'center',
    alignSelf: 'center',
    width: 350,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: "#eaeaea"
  },
  name: {
    fontSize: 25,
  },
});