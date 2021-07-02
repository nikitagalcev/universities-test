import React, { useCallback } from 'react';
import { Text, View, TouchableOpacity, Linking, StyleSheet } from 'react-native';

export const UniversityComponent = ({ name, link }) => {

  const handleLinkPress = useCallback(async () => {
    if (link) {
      const supported = await Linking.canOpenURL(link);
      if (supported) {
        await Linking.openURL(link);
      }
    }
  }, [link]);
  
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity>
        <Text style={styles.link} onPress={handleLinkPress}>{link}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    width: 350,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: "#eaeaea"
  },
  name: {
    fontSize: 20,
  },
  link: {
    color: 'blue',
    fontSize: 18,
  }
});
