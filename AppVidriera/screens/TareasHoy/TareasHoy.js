import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./TareasHoyStyles";

export default function TareasHoy({ navigation }) {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    cargarTareasHoy();
  }, []);

  const cargarTareasHoy = async () => {
    const hoy = new Date();

    const desde = new Date(
      hoy.getFullYear(),
      hoy.getMonth(),
      hoy.getDate(),
      0, 0, 0
    ).toISOString();

    const hasta = new Date(
      hoy.getFullYear(),
      hoy.getMonth(),
      hoy.getDate(),
      23, 59, 59
    ).toISOString();

    const res = await fetch(
      `http://10.0.2.2:5088/api/calendar/events?from=${desde}&to=${hasta}`
    );

    const data = await res.json();
    setTareas(data.filter(e => e.colorId === "2"));
  };

  return (
    <View style={styles.container}>

      {/* BOTÓN ATRÁS */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>⬅ Volver</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Tareas activas hoy</Text>

      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.summary}>{item.summary}</Text>
            <Text style={styles.time}>
              {item.start?.dateTime?.substring(11,16)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
