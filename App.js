import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AllNotesScreen from './screens/AllNotesScreen';
import AddNote from './screens/AddNote';
import React, { useState } from 'react';
import { ScreenType } from './constants/constants';
import './App.css';
import BackButton from './components/BackButton';
export class App2 extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.container}>
        <Header />
        <HomeScreen onExit={() => {}} />
        <StatusBar style="auto" />
      </View>
    )
    
  }
  
}

export default function App() {
  const [screen, setScreen] = useState(ScreenType.home);
  const [notes, setNotes] = useState([]);
  const updateScreen = (data) => {
    setScreen(data);
  }
  let content;
  if(screen === ScreenType.allNotes){
    content = <AllNotesScreen notes={notes} />;
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
