import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ImageBackground, 
  ScrollView 
} from 'react-native';

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/logoMovil.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          <Text style={styles.title}>AppVidriera</Text>
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
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#dcdde1',
    textAlign: 'center',
    marginBottom: 20,
  },
  welcome: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  card: {
    backgroundColor: 'rgba(59, 111, 182, 0.85)',
    borderRadius: 15,
    padding: 20,
    width: '48%',
    marginBottom: 15,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 8,
  },
  cardValue: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  navContainer: {
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3B6FB6',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  calendarSection: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
    padding: 15,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  calendarItem: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
});
