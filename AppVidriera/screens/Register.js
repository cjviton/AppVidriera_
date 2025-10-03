import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';

export default function Register({ navigation }) {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Función para registrar usuario
  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    fetch("http://10.0.2.2:5297/register", {   // 👈 si usas emulador Android
    // fetch("http://192.168.1.50:5297/register", { // 👈 si usas móvil físico (cambia la IP por la de tu PC)
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombre: nombre,
        email: email,
        passwordHash: password,
        fechaRegistro: new Date().toISOString()
      })
    })
      .then(res => {
        if (!res.ok) throw new Error("Error al registrar usuario");
        return res.json();
      })
      .then(data => {
        Alert.alert("Éxito", "Usuario registrado correctamente");
        console.log("Usuario registrado:", data);

        // Redirige a Home (puedes cambiar a Login si prefieres)
        navigation.replace("Login");
      })
      .catch(err => {
        console.error(err);
        Alert.alert("Error", "No se pudo registrar el usuario");
      });
  };

  return (
    <ImageBackground
      source={require('../assets/logoMovil.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Crear nuevo usuario</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Usuario" 
          placeholderTextColor="#666"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Correo electrónico" 
          placeholderTextColor="#666"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Contraseña" 
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Confirmar contraseña" 
          placeholderTextColor="#666"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity 
          style={styles.buttonRegister} 
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Registrarme</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace("Login")}>
          <Text style={styles.backText}>Volver al Login</Text>
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
