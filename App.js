import React from 'react';
import { SafeAreaView, } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import  PassInput  from './src/components/PassInput.js';
import  UserNameInput from './src/components/UserNameInput.js';

//http://localhost:3001/
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chHead}></View>
      <View style={styles.chMain}>
        <UserNameInput />
        <PassInput />
      </View>
      <View style={styles.chFoot}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFDD0',
  },
  chMain: {
     flex: 10 
  },
  chHead: {
    flex: 0.5,
    backgroundColor: '#D2B48C'
  },
  chFoot: {
    flex: 0.5,
    backgroundColor: '#BFC9A2'
  }

});


