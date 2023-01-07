import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {GameInterface} from '../../interfaces/GameInterface';

export function Winner(props: GameInterface | any) {
    return (
    <View style = {styles.container}>
        <Image source={{uri: props.cover}} style={styles.card}/>
        <Text style={styles.gameLabel}>Votes: {props.votes}</Text>
        <Text style={styles.winnerLabel}>WINNER</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      color:'#fff',
      backgroundColor: '#191919',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
      borderWidth:3,
      borderColor:'#fff',
      borderRadius:30
    },
    gameLabel:{
      color:'#fff',
      textAlign:'center',
      fontSize:22
    },
    winnerLabel:{
      backgroundColor:'#5D3FD3',
      borderRadius:4,
      textAlign:'center',
      color:'#fff',
      fontWeight:'bold',
      fontSize:30,
      paddig:10
    },
    card:{
      borderRadius:10,
      width: 200, 
      height: 300,
    }
  });