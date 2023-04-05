import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';


export default function HexToDecimalConverter() {
  const [hexInput, setHexInput] = useState('');
  const [decInput, setDecInput] = useState('');
//   const [decimalOutput, setDecimalOutput] = useState('');

  const handleHexInputChange = (text) => {
    setHexInput(text);
    // Convert the hex input to decimal and update the output state
    setDecInput(parseInt(text, 16).toString(10));
  };

  function handleDecInputChange(text) {
    setDecInput(text);
    const hexValue = text.toString(16).toUpperCase();
    setHexInput(hexValue);
  }
  

  return (
    <View style = {styles.container}>
      <Text style = {styles.label}>Hex to Decimal Converter</Text>
      <TextInput  style = {styles.input}
        placeholder="Enter hex value"
        onChangeText={handleHexInputChange}
        value={hexInput}
        keyboardType="default"
      />
      <TextInput  style = {styles.input}
        placeholder="Enter Decimal value"
        onChangeText={handleDecInputChange}
        value={decInput}
        keyboardType="default"
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc'
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginTop: 5
    }
  });
