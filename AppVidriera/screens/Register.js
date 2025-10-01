import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear nuevo usuario</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Usuario" 
        placeholderTextColor="#666"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Correo electrónico" 
        placeholderTextColor="#666"
        keyboardType="email-address"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Contraseña" 
        placeholderTextColor="#666"
        secureTextEntry
      />
      <TextInput 
        style={styles.input} 
        placeholder="Confirmar contraseña" 
        placeholderTextColor="#666"
        secureTextEntry
      />

      <TouchableOpacity 
        style={styles.buttonRegister} 
        onPress={() => navigation.replace("Home")}
      >
        <Text style={styles.buttonText}>Registrarme</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.replace("Login")}>
        <Text style={styles.backText}>Volver al Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  buttonRegister: {
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
  backText: {
    marginTop: 10,
    fontSize: 16,
    color: '#3B6FB6',
  },
});
