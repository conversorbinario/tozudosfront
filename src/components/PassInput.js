import React from "react";
import {TextInput, SafeAreaView,StyleSheet } from 'react-native';

const PassInput = () => {
    return(<SafeAreaView>
       <TextInput
       secureTextEntry={true}
        style={styles.input}
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

export default PassInput;

  
