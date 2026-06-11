import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { ScreenType } from '../constants/constants'

const BackButton = ({ onButtonClick }) => {
  return (
    <View style={styles.container}>
      <Pressable 
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}
        onPress={() => onButtonClick(ScreenType.home)}
      >
        <Text style={styles.backButtonText}>&lt; back</Text>
      </Pressable>
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // Un pequeño margen por defecto para que no se pegue al borde de las pantallas donde lo uses
    paddingTop: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#2E80EB', // El azul idéntico de tus diseños anteriores
    paddingVertical: 10,       // Espaciado interno vertical (arriba/abajo)
    paddingHorizontal: 22,     // Espaciado interno horizontal (lados)
    borderRadius: 6,           // Suave redondeado en las esquinas como el recorte
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#000000',          // Texto completamente oscuro como en la imagen
    fontSize: 24,              // Tamaño de fuente prominente
    fontWeight: '400',         // Grosor de fuente regular y limpio
  },
  buttonPressed: {
    opacity: 0.85,             // Efecto visual sutil al mantener presionado
  }
})