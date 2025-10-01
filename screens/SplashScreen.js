
import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login"); // 👈 Redirige a la pantalla de Login
    }, 50000); // ⏱️ 5 segundos

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logoMovil.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // fondo blanco
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '95%',   // margen lateral para que no se corte
    height: '100%',
  },
});

