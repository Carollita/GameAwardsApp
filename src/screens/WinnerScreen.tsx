import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useFocusEffect} from '@react-navigation/native'

import {GameInterface} from '../interfaces/GameInterface';
import {Winner} from '../components/Winner/Winner';
import {clientGetWinner} from '../api/api';

export function WinnerScreen() {

    const [game, setGame] = useState<GameInterface>(
        {
            id: 0,
            name: '--',
            description: '--',
            cover: '',
            votes: 0,
        }
    )

    useFocusEffect(
        useCallback(() => {
        (async() => {
            const winner = await clientGetWinner()
            setGame(winner)
        })()
        }, [])
    )

    return(
        <View style={styles.container}>
            <Winner name={game.name} cover={game.cover} votes={game.votes}></Winner>
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