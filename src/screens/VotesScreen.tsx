import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function VotesScreen() {
    return(
        <View style={styles.container}>
            <Text>Hello, world</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#ffffff',
        backgroundColor: '#191919',
        alignItems: 'center',
        justifyContent: 'center'
    }
})