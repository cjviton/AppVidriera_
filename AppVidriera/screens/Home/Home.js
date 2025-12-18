// Home.js (CORRECTO)

import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./HomeStyles";

export default function Home({ navigation }) {
  const [tareasActivasHoy] = useState(0);
  const [proximasAcciones, setProximasAcciones] = useState([]);

  useEffect(() => {
    cargarProximasAcciones();
  }, []);

  const cargarProximasAcciones = async () => {
    try {
      const hoy = new Date();
      const inicio = new Date(
        hoy.getFullYear(),
        hoy.getMonth(),
        hoy.getDate(),
        0, 0, 0
      );

      const domingo = new Date(inicio);
      domingo.setDate(inicio.getDate() + (7 - inicio.getDay()));

      const res = await fetch(
        `http://10.0.2.2:5088/api/calendar/events?from=${inicio.toISOString()}&to=${domingo.toISOString()}`
      );
      const data = await res.json();

      const amarillas = data
        .filter((e) => String(e.colorId) === "5")
        .sort((a, b) => {
          const fa = a.start?.dateTime || a.start?.date;
          const fb = b.start?.dateTime || b.start?.date;
          return new Date(fa) - new Date(fb);
        })
        .slice(0, 3);

      setProximasAcciones(amarillas);
    } catch (e) {
      console.error(e);
    }
  };

  const formatFecha = (ev) => {
    const iso = ev?.start?.dateTime || ev?.start?.date;
    return iso ? iso.substring(0, 10).split("-").reverse().join("/") : "";
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Vidriera Arandina</Text>
        <Text style={styles.subtitle}>Departamento de Mantenimiento</Text>
        <Text style={styles.welcome}>👋 Hola, Bienvenid@</Text>

        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>🔧 Tareas activas (hoy)</Text>
            <Text style={[styles.cardValue, { color: "#2ecc71" }]}>
              {tareasActivasHoy}
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>⚠️ Incidencias</Text>
            <Text style={styles.cardValue}>3</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🗓️ Revisiones</Text>
            <Text style={styles.cardValue}>5</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Crear / Modificar / Eliminar</Text>
            <Text style={styles.cardValue}>5</Text>
          </View>
        </View>

        <View style={styles.navContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("TareasHoy")}
          >
            <Text style={styles.buttonText}>VER TAREAS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("IncidenciasHoy")}
          >
            <Text style={styles.buttonText}>VER INCIDENCIAS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("RevisionesSemana")}
          >
            <Text style={styles.buttonText}>VER REVISIONES</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.calendarSection}>
          <Text style={styles.sectionTitle}>Próximas acciones</Text>

          {proximasAcciones.map((ev) => (
            <Text key={ev.id} style={styles.calendarItem}>
              • {formatFecha(ev)} - {ev.summary}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
