import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './HomeStyles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text style={styles.title}>Vidriera Arandina</Text>
        <Text style={styles.subtitle}>Departamento de Mantenimiento</Text>
        <Text style={styles.welcome}>👋 Hola, Carlos</Text>

        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>🔧 Tareas activas</Text>
            <Text style={styles.cardValue}>12</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>⚠️ Incidencias</Text>
            <Text style={styles.cardValue}>3</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🗓️ Revisiones</Text>
            <Text style={styles.cardValue}>5</Text>
          </View>
        </View>

        <View style={styles.navContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Tareas')}
          >
            <Text style={styles.buttonText}>Ver Tareas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Historial')}
          >
            <Text style={styles.buttonText}>Historial</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Configuracion')}
          >
            <Text style={styles.buttonText}>Configuración</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.calendarSection}>
          <Text style={styles.sectionTitle}>Próximas acciones</Text>
          <Text style={styles.calendarItem}>• 9 Oct - Cambio filtro horno 2</Text>
          <Text style={styles.calendarItem}>• 10 Oct - Revisión línea templado</Text>
          <Text style={styles.calendarItem}>• 11 Oct - Limpieza lavadora de vidrio</Text>
        </View>

      </ScrollView>
    </View>
  );
}
