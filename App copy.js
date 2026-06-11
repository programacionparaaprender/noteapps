import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AllNotesScreen from './screens/AllNotesScreen';
import AddNote from './screens/AddNote';
import React, { useState } from 'react';
import { ScreenType, ScreenTypeLogin } from './constants/constants';
import './App.css';
import BackButton from './components/BackButton';

export default function App() {
  const [screenLogin, setScreenLogin] = useState(ScreenTypeLogin.login);
  const [screen, setScreen] = useState(ScreenType.home);
  const [notes, setNotes] = useState([]);
  const updateScreen = (data) => {
    setScreen(data);
  }
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  }
  let content;
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
  //      <StatusBar style="auto" />
  console.log(notes);
  return (
    <View style={styles.container}>
      <Header />
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
