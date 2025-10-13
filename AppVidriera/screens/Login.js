import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    fetch("http://10.0.2.2:5297/api/usuarios/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        passwordHash: password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          Alert.alert("Bienvenido", `Hola ${data.nombre}`);
          // guardar nombre en AsyncStorage si quieres mostrarlo en Home
          navigation.replace("Home");
        } else {
          Alert.alert("Error", "Email o contraseña incorrectos");
        }
      })
  };

  return (
    <ImageBackground
      source={require('../assets/logoMovil.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Iniciar sesión</Text>

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#666"
          keyboardType="default"   // 👈 para que funcione bien con @ en emulador
          autoCapitalize="none"
          autoCorrect={false}
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

        <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace("Register")}>
          <Text style={styles.registerText}>¿No tienes cuenta? Regístrate</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#3B6FB6",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttonLogin: {
    backgroundColor: "#3B6FB6",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerText: {
    marginTop: 10,
    fontSize: 16,
    color: "#3B6FB6",
  },
});
