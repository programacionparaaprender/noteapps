import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AllNotesScreen from './screens/AllNotesScreen';
import RegisterNote from './screens/RegisterNote';
import LoginNote from './screens/LoginNote';
import AddNote from './screens/AddNote';
import React, { useState } from 'react';
import { ScreenType, ScreenTypeLogin } from './constants/constants';
import './App.css';
import BackButton from './components/BackButton';

export default function App() {
  const [screenLogin, setScreenLogin] = useState(ScreenTypeLogin.login);
  const [screen, setScreen] = useState(ScreenType.home);
  const [notes, setNotes] = useState([]);
  
  let title = 'Your Sticky Notes'
  let description = 'Your Sticky Notes';

  const updateScreenLogin = (data) => {
    setScreenLogin(data);
  }
  
  const updateScreen = (data) => {
    setScreen(data);
  }
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  }
  let content;

  if(screenLogin === ScreenTypeLogin.login){
    title = 'Login'
    description = 'Sign in to your account';
    content = content = (
      <LoginNote
        onLogin={updateScreenLogin} 
        onSwitchToRegister={updateScreenLogin} />
    );
  }else if(screenLogin === ScreenTypeLogin.register){
    title = 'Register'
    description = 'Create a new account';
    content = (
      <RegisterNote
        onRegister={updateScreenLogin}
        onSwitchToLogin={updateScreenLogin} />
    );
  }else if(screenLogin === ScreenTypeLogin.home){
    if(screen === ScreenType.allNotes){
      content = <AllNotesScreen notes={notes} onDelete={deleteNote} />;
    }else if (screen === ScreenType.addNote){
      content = (
        <AddNote
          onExit={updateScreen} 
          onSave={(data)=>setNotes([...notes, {id: Date.now(), note: data}])} />
      );
    }else if (screen === ScreenType.home){
      content = (
        <HomeScreen onExit={updateScreen} />
      );
    }
  }
  

  
  //      <StatusBar style="auto" />
  console.log(notes);
  return (
    <View style={styles.container}>
      <Header title={title} description={description} />
      {screen !== ScreenType.home && (
        <BackButton onButtonClick={updateScreen} />
      )}
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
