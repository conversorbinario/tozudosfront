import React from 'react';
import {SafeAreaView, } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { PassInput } from './PassInput.js';
import { UserNameInput } from './UserNameInput.js';

//http://localhost:3001/
export default function App() {
  return (
    <SafeAreaView style={baseView.container}>
      <View style={{ flex: 0.5, backgroundColor: '#D2B48C' }}></View>
      <View style={{ flex: 10 }}>
        <UserNameInput />
        <PassInput />
      </View>
      <View style={{ flex: 0.5, backgroundColor: '#BFC9A2' }}></View>
    </SafeAreaView>
  );
}

const baseView = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFDD0',
  
  },
});


