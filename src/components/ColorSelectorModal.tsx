import React, { useState } from 'react';
import { Button, View, Text, Modal, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { colors } from './ResistorColorDecoder';

export const ColorSelectorModal = ({ visible, onClose, onSelect }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={[styles.colorButton, { backgroundColor: item }]} onPress={() => onSelect(item)}>
            {/* Display the selected color */}
        </TouchableOpacity>
    );

    return (
        <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
            <View style={styles.container}>
                <Text style={styles.headerText}>Pick a color:</Text>
                <FlatList
                    data={colors}
                    renderItem={renderItem}
                    keyExtractor={(item) => item}
                    numColumns={3} // Display the colors in 3 columns
                    contentContainerStyle={styles.colorGrid} // Set the styles for the container of the color grid
                />
                <Button title="Cancel" onPress={onClose} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    colorButton: {
        width: 80,
        height: 80,
        borderRadius: 10,
        margin: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

        borderWidth: 2,
        borderColor: 'black',
    },
    cancelButton: {
        marginTop: 20,
    },
    cancelButtonText: {
        color: 'blue',
        fontSize: 18,
    },
});