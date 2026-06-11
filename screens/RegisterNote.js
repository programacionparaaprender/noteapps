import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Pressable, StatusBar, Dimensions } from 'react-native';
import { ScreenTypeLogin } from '../constants/constants';

const { width } = Dimensions.get('window');

const RegisterNote = ({ onRegister, onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (email.trim().length === 0 || password.trim().length === 0 || confirmPassword.trim().length === 0) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }
    
    console.log("Intento de registro con:", email);
    Alert.alert("Éxito", "Registro completado. Por favor inicia sesión.");
    
    if (onRegister) onRegister(ScreenTypeLogin.login); 
  };

  return (
    <View style={styles.container}>
      {/* Barra de estado integrada con la cabecera oscura */}
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      {/* Contenedor del Formulario */}
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#C0C0C0"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#C0C0C0"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          placeholderTextColor="#C0C0C0"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />

        {/* Botón de Registro Personalizado */}
        <Pressable 
          style={({ pressed }) => [
            styles.registerButton,
            pressed && styles.registerButtonPressed
          ]}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </Pressable>

        {/* Mantenemos el acceso a Login comentando u omitiendo si prefieres el diseño limpio de la imagen */}
        {/* <Pressable onPress={() => onSwitchToLogin && onSwitchToLogin(ScreenTypeLogin.login)} style={styles.switchPressable}>
          <Text style={styles.switchText}>¿Ya tienes cuenta? Inicia sesión aquí</Text>
        </Pressable>
        */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  // Estilos de la Cabecera Oscura
  headerContainer: {
    height: '25%',
    backgroundColor: '#1B2B41',
    position: 'relative',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
    overflow: 'hidden',
  },
  // Arcos de fondo calculados dinámicamente según el ancho de la pantalla
  circle: {
    position: 'absolute',
    borderRadius: 200,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
  },
  circle1: {
    width: width * 1.0,
    height: width * 1.0,
    top: -width * 0.45,
    left: -width * 0.15,
  },
  circle2: {
    width: width * 0.8,
    height: width * 0.8,
    top: -width * 0.35,
    right: -width * 0.2,
  },
  headerTextWrapper: {
    zIndex: 10,
  },
  titleText: {
    fontSize: 42,
    fontWeight: '300',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  subtitleText: {
    fontSize: 16,
    color: '#AAB8C2',
    marginTop: 5,
  },
  // Estilos del Formulario
  contentContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  input: {
    height: 52,
    backgroundColor: '#F5F5F5',
    borderColor: '#E2E2E2',
    borderWidth: 1.5,
    borderRadius: 18, // Forma de cápsula exacta de tus inputs
    marginBottom: 16,
    fontSize: 16,
    paddingHorizontal: 20,
    color: '#333333',
  },
  // Estilos del Botón de Registro
  registerButton: {
    backgroundColor: '#2E80EB',
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  registerButtonPressed: {
    opacity: 0.85,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '400',
  },
  // switchPressable: {
  //   marginTop: 25,
  //   alignItems: 'center',
  // },
  // switchText: {
  //   color: '#2E80EB',
  //   fontSize: 14,
  // },
});

export default RegisterNote;