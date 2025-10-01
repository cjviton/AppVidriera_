import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a la pantalla Home 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3B6FB6',
  },
});
