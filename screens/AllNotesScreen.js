import { SafeAreaView, FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const AllNotesScreen = ({ notes, onDelete, onBack }) => {
  
  const renderItem = (itemData) => {
    return (
      <View style={styles.itemRow}>
        {/* Contenedor del Texto de la Nota */}
        <View style={styles.noteTextContainer}>
          <Text style={styles.noteText}>{itemData.item.note}</Text>
        </View>
        
        {/* Botón X de Borrado Personalizado (Azul) */}
        <Pressable 
          style={({ pressed }) => [
            styles.deleteButton,
            pressed && styles.buttonPressed
          ]} 
          onPress={() => onDelete(itemData.item.id)}
        >
          <Text style={styles.deleteButtonText}>X</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>


      {/* Contenedor del Título Principal */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>View Notes</Text>
      </View>

      {/* Listado de Notas */}
      <FlatList 
        style={styles.list} 
        data={notes} 
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default AllNotesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  // Barra superior y botón Back
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#2E80EB', // Azul idéntico a la imagen
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  backButtonText: {
    color: '#000000', // El texto en la imagen es oscuro
    fontSize: 22,
    fontWeight: '400',
  },
  // Contenedor del Título "View Notes"
  titleContainer: {
    width: '100%',
    backgroundColor: '#F5F5F5', // Fondo gris claro de la imagen
    borderWidth: 1.5,
    borderColor: '#E2E2E2',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 35,
  },
  title: {
    fontSize: 44, // Texto prominente como en el boceto
    fontWeight: "400",
    color: '#000000',
  },
  list: {
    width: '100%',
  },
  // Fila completa de la Nota (Cápsula Unificada)
  itemRow: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#F5F5F5', // Mismo fondo gris claro
    borderWidth: 1.5,
    borderColor: '#E2E2E2',
    borderRadius: 10,
    height: 65,
    marginBottom: 15,
    overflow: 'hidden', // Crucial para que el botón azul respete las esquinas redondeadas derechas
  },
  noteTextContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  noteText: {
    fontSize: 22,
    color: '#000000',
  },
  // Botón "X" acoplado a la derecha
  deleteButton: {
    backgroundColor: '#2E80EB',
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  deleteButtonText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '400',
  },
  buttonPressed: {
    opacity: 0.8,
  }
});