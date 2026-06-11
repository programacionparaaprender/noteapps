import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Pressable, StatusBar, Dimensions } from 'react-native';
import { ScreenTypeLogin } from '../constants/constants';

const { width } = Dimensions.get('window');

const LoginNote = ({ onLogin, onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim().length === 0 || password.trim().length === 0) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }
    
    // Aquí podrías implementar la lógica de validación con tu backend
    console.log("Intento de login con:", email);
    
    // Al tener éxito, navegamos al Home
    if (onLogin) onLogin(ScreenTypeLogin.home);
  };

  return (
    <View style={styles.container}>
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

        {/* Botón de Inicio de Sesión Personalizado */}
        <Pressable 
          style={({ pressed }) => [
            styles.loginButton,
            pressed && styles.loginButtonPressed
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>

        {/* El diseño de la imagen no incluye un enlace de registro, pero lo mantengo aquí por funcionalidad */}
        
        <Pressable onPress={() => onSwitchToRegister && onSwitchToRegister(ScreenTypeLogin.register)} style={styles.switchPressable}>
          <Text style={styles.switchText}>¿No tienes cuenta? Regístrate aquí</Text>
        </Pressable>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  // Estilos de la Cabecera
  headerContainer: {
    height: '25%', // Aproximadamente un cuarto de la pantalla
    backgroundColor: '#1B2B41', // Color azul oscuro de fondo
    position: 'relative',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
    overflow: 'hidden', // Importante para que los círculos no se salgan
  },
  // Círculos superpuestos
  circle: {
    position: 'absolute',
    borderRadius: 200,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)', // Línea muy sutil
    backgroundColor: 'rgba(255, 255, 255, 0.03)', // Relleno translúcido
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
    fontWeight: '300', // Un peso de fuente más ligero
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  subtitleText: {
    fontSize: 16,
    color: '#AAB8C2',
    marginTop: 5,
  },
  // Estilos del Contenido
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
    borderRadius: 18, // Bordes muy redondeados
    marginBottom: 16,
    fontSize: 16,
    paddingHorizontal: 20,
    color: '#333333',
  },
  // Estilos del Botón Personalizado
  loginButton: {
    backgroundColor: '#2E80EB', // Color azul del botón
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  loginButtonPressed: {
    opacity: 0.85,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '400',
  },
  // switchPressable: {
  //   marginTop: 20,
  //   alignItems: 'center',
  // },
  switchText: {
     color: '#2E80EB',
     fontSize: 14,
  },
});

export default LoginNote;