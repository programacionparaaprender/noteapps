import { Alert, StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React,{ useState } from 'react'

import { ScreenType } from '../constants/constants';


class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }
  handleChange(val){
    //val = val.toLowerCase();
    this.setState({ text: val });
  }
  handleClick(){
    //if(enteredText.trim().length > 0){
      this.props.onSave(this.state.text);
      this.props.onExit(ScreenType.allNotes);
    //}
  }

  onKeyPress({ nativeEvent }){
    if (nativeEvent.key === 'Backspace') {
      console.log('espacio');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Add Note</Text>
          <View>
            <TextInput 
              value={this.state.text}
              onKeyPress={({ nativeEvent }) => {
                console.log(nativeEvent.key);
                if (nativeEvent.key === 'Backspace') {
                  Alert.alert('BACKSPACE!');
                }
              }}
              onChangeText={textValue => this.handleChange(textValue)}
              styles={styles.input}  />
          </View>
          <Button onPress={this.handleClick} title="Add" />
        </View>
      </View>
    )
  }
}

const AddNote2 = ({onSave, onExit}) => {
  const [text, onChangeText] = useState('');
  const handleChange = (val) => {
    onChangeText(val);
  }
  const handleClick = () => {
    //if(enteredText.trim().length > 0){
      onSave(text);
      onExit(ScreenType.allNotes);
    //}
  }
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Add Note</Text>
        <View>
          <TextInput 
            value={text}
            onChangeText={handleChange} 
            styles={styles.input}  />
        </View>
        <Button onPress={handleClick} title="Add" />
      </View>
    </View>
  )
}

export default AddNote

const styles = StyleSheet.create({
  input: {
    marginVertical: 20,
    width: '100%',
    borderBottonWidth: 2,
    fontSize: 16,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  container:{
    flex: 1,
  },
  formContainer: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  }
})