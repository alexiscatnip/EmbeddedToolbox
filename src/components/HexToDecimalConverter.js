import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';


export default function HexToDecimalConverter() {
    const [hexInput, setHexInput] = useState('');
    const [decInput, setDecInput] = useState('');
    //   const [decimalOutput, setDecimalOutput] = useState('');

    const handleHexInputChange = (text) => {
        setHexInput(text);

        const isValidHex = /^[0-9A-Fa-f]+$/.test(text);
        if (!isValidHex) {
            setDecInput('Invalid Input.');
        } else {
            setDecInput(parseInt(text, 16).toString(10));
        }
    };

    function handleDecInputChange(text) {
        setDecInput(text);
        const hexValue = text.toString(16);
        if (isNaN(hexValue)) {
            setHexInput("Invalid Input.");
        } else {
            setHexInput(hexValue.toUpperCase());
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.label}>Hex to Decimal Converter</Text>
            <TextInput
                style={styles.input}
                testID="hex-input"
                placeholder="Enter hex value"
                onChangeText={handleHexInputChange}
                value={hexInput}
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                testID="dec-input"
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
