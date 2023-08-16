import React from 'react';
import { SafeAreaView, } from 'react-native-safe-area-context';
import { StyleSheet, View, Button } from 'react-native';
import  PassInput  from './src/components/PassInput.js';
import * as SecureStore from 'expo-secure-store';
import  UserNameInput from './src/components/UserNameInput.js';
import axios from 'axios';

//http://localhost:3001/
export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chHead}></View>
      <View style={styles.chMain}>
        <UserNameInput />
        <PassInput />
        
        <Button onPress={intentaLoguear} title="ENTRAR" style={styles.logButton} accessibilityLabel="Learn more about this purple button"/>
      </View>
       <View style={{flex:4}}></View>
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
    flex: 7,
    justifyContent: 'center'
  },
  chHead: {
    flex: 0.5,
    backgroundColor: '#D2B48C'
  },
  chFoot: {
    flex: 0.5,
    backgroundColor: '#BFC9A2'
  },
  logButton: {
    flex: 1,
    color: "#841584"
  }
});

//const baseUrl = 'http://localhost:3001';
const baseUrl = 'http://192.168.0.101:3001';

const apiToken = 'api_token';

const intentaLoguear = () => {
  let checkingExistingtToken = SecureStore.getItemAsync(apiToken);
  checkingExistingtToken.then(function (token) {
    if (token) {
      console.log('Ya estás logueado ' + token);
      return;
    }
    peticionLogueo();

  }, function (error) {
    console.log('Error comprobando si hay una sesión iniciada en este dispositivo: '+ error)
  })
};

function peticionLogueo() {
  axios
    .post(
      `${baseUrl}/api/get-acces-token`,
      {
        email: '[user]',
        password: '[password]',
        device_name: '[device_name]'
      },
      {
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
        },
      },
    )
    .then(function (response) {
      let respuesta = response.data;
      let isresultadoOk = respuesta.ok;
      if (isresultadoOk) {
        let token = respuesta.response.token;
        console.log(token);
        SecureStore.setItemAsync(apiToken, token);

      }
    }
    )
    .catch(err => console.log(err));
}



