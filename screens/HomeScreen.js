import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScreenType } from '../constants/constants';

const HomeScreen = ({ onExit }) => {
  return (
    <View style={styles.container}>
      
      {/* Botón: ADD NEW NOTE */}
      <Pressable 
        style={({ pressed }) => [
          styles.itemButton,
          pressed && styles.buttonPressed
        ]} 
        onPress={() => onExit(ScreenType.addNote)}
      >
        <Text style={styles.buttonText}>Add New</Text>
      </Pressable>

      {/* Botón: VIEW ALL NOTES */}
      <Pressable 
        style={({ pressed }) => [
          styles.itemButton,
          pressed && styles.buttonPressed
        ]} 
        onPress={() => onExit(ScreenType.allNotes)}
      >
        <Text style={styles.buttonText}>View All</Text>
      </Pressable>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: "center",
    // Desplazamos los elementos hacia arriba usando padding en vez de space-evenly
    paddingTop: '25%', 
  },
  itemButton: {
    // Ocupa el ancho completo dejando un margen limpio a los lados
    width: Dimensions.get("window").width - 60, 
    height: 60,                     // Altura fija y estilizada igual que en Login/Registro
    backgroundColor: "#2E80EB",     // El azul plano institucional del boceto
    borderRadius: 8,                // Esquinas ligeramente redondeadas
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,             // Separación controlada entre ambos botones
    
    // Eliminamos las sombras pesadas para mantener la estética plana (flat design) del diseño
  },
  buttonText: {
    color: '#000000',               // El texto en tu mockup es oscuro/negro
    fontSize: 32,                   // Tamaño prominente pero equilibrado
    fontWeight: "400",              // Trazo limpio, removiendo el bold pesado anterior
  },
  buttonPressed: {
    opacity: 0.85,                  // Feedback visual táctil al presionar
  }
})