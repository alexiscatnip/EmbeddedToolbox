import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ColorSelectorModal } from './ColorSelectorModal';
import { colors, color2Tolerance, colors2Ohms } from './ResistorColorDecoder';


export default function ResistorPage() {

    const [buttonColors, setButtonColors] = useState([
        { id: 'color1', color: 'black' },
        { id: 'color2', color: 'blue' },
        { id: 'color3', color: 'black' },
        { id: 'color4', color: 'black' },
        { id: 'color5', color: 'black' },
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedBandId, setSelectedBandId] = useState(undefined);

    const calculateResistance = (colors: any[]) => {
        // Calculate the resistance based on the color code
        // Return the calculated resistance
        var res;
        var digit1 = colors[0]
        var digit2 = colors[1]
        var digit3 = colors[2]
        var multiplier = colors[3]

        if (digit3 === undefined || digit3 === null) {
            digit3 = undefined
        }
        res = colors2Ohms(digit1, digit2, digit3, multiplier);

        console.log('calculateResistance')
        return res
    };

    const handleBandColorUpdate = (color: string) => {
        console.log(`Selected color: ${color}`);

        setButtonColors((oldButtonColors) => {
            const buttonColorIndex = oldButtonColors.findIndex(buttonColor => buttonColor.id === selectedBandId);
            if (buttonColorIndex < 0) {
                return oldButtonColors
            }

            const updatedButtonColors = [...oldButtonColors];
            updatedButtonColors[buttonColorIndex] = { ...oldButtonColors[buttonColorIndex], color };
            return updatedButtonColors;
        });


        setSelectedBandId(undefined);
        setModalVisible(false);
    };


    const pickBandColor = (buttonId) => {
        // Set the selected band to the one that was clicked
        setSelectedBandId(buttonId);

        // Show the color selector modal
        setModalVisible(true);
    };

    const resistanceValue = calculateResistance(buttonColors.map((buttonColor) => buttonColor.color));
    const resistanceText = resistanceValue !== undefined ? `Resistor Value: ${resistanceValue} ohms 0%` : "Error: Invalid input";

    return (
        <View style={styles.container}>
            <Text style={styles.resistanceText}>
                Resistance calculator
            </Text>

            <View style={{ flexDirection: 'row' }}>
                {buttonColors.map((buttonColor, index) => (
                    <View key={index} style={styles.colorButton}>
                        <TouchableOpacity
                            style={[styles.colorCircle, { backgroundColor: buttonColor.color }]}
                            onPress={() => pickBandColor(buttonColor.id)} />
                    </View>
                ))}
            </View>

            <Text style={styles.resistanceText}>
                {resistanceText}
            </Text>

            <ColorSelectorModal
                visible={modalVisible != false}
                onClose={() => setModalVisible(false)}
                onSelect={handleBandColorUpdate}
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
    colorButton: {
        margin: 10,
    },
    colorCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'black',
    },
    resistanceText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
    },
});
