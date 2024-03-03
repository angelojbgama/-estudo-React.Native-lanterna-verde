import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import symbolOn from './assets/pictures/symbol-on.png'
import symbolOff from './assets/pictures/symbol-off.png'

export default function App() {
  const [IsActive, setIsActive] = useState(false)
  
  function handleSymbol() {
    setIsActive((oldValue:boolean) =>{return !oldValue}) 
  }
  return (
    <View style={IsActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handleSymbol}>
        <Image source={IsActive ? symbolOn : symbolOff} />
      </TouchableOpacity>
    </View >
  );
}

const styles2 = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    backgroundColor: 'white',
  },
});

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
