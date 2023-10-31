import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ball from './src/Ball';
// import { Card, Button } from 'react-native-elements';
// import Deck from './src/Deck';

class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Ball/>
        </View>
    ) 
  }
}

const styles = StyleSheet.create({  
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default App;