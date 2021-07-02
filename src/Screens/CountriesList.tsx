import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CountryComponent } from '../Components/CountryComponent'
import { countries } from '../Constants/countries';

export const CountriesList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>List of countries</Text>

      <View>
        {countries.map((country) => {
          return (
            <CountryComponent
              name={country} 
              key={country} 
              navigation={navigation}
            />
          )
        })}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
    fontSize: 30,
    marginBottom: 20,
  },
  container: {
    marginTop: 40,
  }
});