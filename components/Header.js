import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window');

const Header = (title, description) => {
  return (
    <View style={styles.headerContainer}>
      {/* Forzar que la barra de estado del celular se fusione con el fondo oscuro */}
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Arcos decorativos de fondo (Ondas translúcidas) */}
      <View style={[styles.circle, styles.circle1]} />
      <View style={[styles.circle, styles.circle2]} />

      {/* Textos del Header */}
      <View style={styles.textWrapper}>
        <Text style={styles.headerTitle}>Your Sticky Notes</Text>
        <Text style={styles.headerSubtitle}>Your Sticky Notes</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 180, // Una altura fija adecuada para albergar el diseño y los textos cómodamente
    backgroundColor: '#1B2B41', // El azul oscuro idéntico a tus pantallas de Login/Registro
    position: 'relative',
    justifyContent: 'flex-end',
    paddingHorizontal: 25,
    paddingBottom: 25,
    overflow: 'hidden', // Evita que los círculos decorativos se salgan del contenedor
    paddingTop: StatusBar.currentHeight || 30, // Evita que el contenido choque con la barra de notificaciones
  },
  // Base para los círculos translúcidos de fondo
  circle: {
    position: 'absolute',
    borderRadius: 999, // Lo hace completamente esférico
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.04)', // Línea del arco casi invisible
    backgroundColor: 'rgba(255, 255, 255, 0.03)', // Relleno con opacidad sutil
  },
  circle1: {
    width: width * 1.1,
    height: width * 1.1,
    top: -width * 0.5,
    left: -width * 0.2,
  },
  circle2: {
    width: width * 0.85,
    height: width * 0.85,
    top: -width * 0.4,
    right: -width * 0.25,
  },
  textWrapper: {
    zIndex: 10, // Asegura que el texto flote por encima de los círculos decorativos
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 40, // Texto grande como en la imagen
    fontWeight: "300", // Un grosor más fino y estilizado
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    color: '#AAB8C2', // Color grisáceo/celeste tenue para el subtítulo
    fontSize: 16,
    marginTop: 4,
    fontWeight: "400",
  },
})