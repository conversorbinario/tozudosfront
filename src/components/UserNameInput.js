import React from "react";
import {TextInput, SafeAreaView, StyleSheet } from 'react-native';

 const UserNameInput = () => {
    return(<SafeAreaView>
       <TextInput
        style={styles.input}
        placeholder="Introduce tu usuario"
      />

    </SafeAreaView>);

};


const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UserNameInput;

  