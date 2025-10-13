import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const quickActions = [
  { id: 'catalog', label: 'Ver catálogo', description: 'Explora productos y novedades' },
  { id: 'orders', label: 'Mis pedidos', description: 'Consulta el estado de tus pedidos' },
  { id: 'support', label: 'Soporte', description: 'Chatea con un asesor especializado' },
];

export default function Home({ navigation, route }) {
  const user = route?.params?.user;
  const firstName = user?.nombre?.split(' ')?.[0] ?? 'Usuario';

  const handleLogout = () => {
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hola, {firstName} 👋</Text>
          <Text style={styles.subtitle}>¿Listo para impulsar tus ventas hoy?</Text>
        </View>

        <View style={styles.highlightCard}>
          <Text style={styles.highlightTitle}>Resumen del día</Text>
          <Text style={styles.highlightMetric}>12 pedidos en curso</Text>
          <Text style={styles.highlightDescription}>
            Revisa los pedidos pendientes y confirma entregas para mantener la satisfacción de tus clientes.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Accesos rápidos</Text>
        <View style={styles.actionsContainer}>
          {quickActions.map(action => (
            <TouchableOpacity key={action.id} style={styles.actionCard} activeOpacity={0.85}>
              <Text style={styles.actionLabel}>{action.label}</Text>
              <Text style={styles.actionDescription}>{action.description}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>Consejo del día</Text>
          <Text style={styles.tipMessage}>
            Añade descripciones atractivas y fotografías de calidad para destacar tus productos en el catálogo.
          </Text>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} activeOpacity={0.8}>
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  scrollContainer: {
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E3A5F',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 16,
    color: '#4A6076',
  },
  highlightCard: {
    backgroundColor: '#3B6FB6',
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  highlightTitle: {
    fontSize: 16,
    color: '#E8F1FD',
    marginBottom: 8,
    fontWeight: '600',
  },
  highlightMetric: {
    fontSize: 26,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  highlightDescription: {
    fontSize: 14,
    color: '#E3ECF9',
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A5F',
    marginBottom: 16,
  },
  actionsContainer: {
    gap: 16,
    marginBottom: 32,
  },
  actionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: '#D8E1F0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  actionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E3A5F',
    marginBottom: 6,
  },
  actionDescription: {
    fontSize: 14,
    color: '#4A6076',
    lineHeight: 20,
  },
  tipCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 20,
    borderWidth: 1,
    borderColor: '#D8E1F0',
    marginBottom: 24,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3B6FB6',
    marginBottom: 8,
  },
  tipMessage: {
    fontSize: 14,
    color: '#4A6076',
    lineHeight: 20,
  },
  logoutButton: {
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#3B6FB6',
  },
  logoutText: {
    fontSize: 16,
    color: '#3B6FB6',
    fontWeight: '600',
  },
});
