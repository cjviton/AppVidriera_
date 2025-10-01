import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function Login({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/logoMovil.png')} // 👈 logo como fondo
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Iniciar sesión</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Usuario" 
          placeholderTextColor="#666"
        />
        <TextInput 
          style={styles.input} 
          placeholder="Contraseña" 
          placeholderTextColor="#666"
          secureTextEntry 
        />

        {/* Botón de login */}
        <TouchableOpacity 
          style={styles.buttonLogin} 
          onPress={() => navigation.replace("Home")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Botón para crear cuenta */}
        <TouchableOpacity 
          style={styles.buttonRegister} 
          onPress={() => alert('Pantalla de registro en construcción 🚧')}
        >
          <Text style={styles.buttonRegisterText}>Crear nuevo usuario</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3B6FB6',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonLogin: {
    backgroundColor: '#3B6FB6',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3B6FB6',
    backgroundColor: '#f0f0f0',
  },
  buttonRegisterText: {
    color: '#3B6FB6',
    fontSize: 16,
    fontWeight: '600',
  },
});
