import React from 'react';
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native';
import {clientSendVotes} from '../../api/api'
import { GameInterface } from '../../interfaces/GameInterface';

const sendVote = (id:number) => {
    Alert.alert(
        'Vote Send', 
        'Thanks for helping decide game of the year!',
        [
            {text: 'Ok', onPress:() => clientSendVotes(id)}
        ]
    )
}

export function GameCard(props: GameInterface | any) {
    return(
        <View style={styles.Cardcontainer}>
            <View>
                <Image source={{uri: props.cover}} style={styles.card}></Image>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.label}>{props.name}</Text>
                <Button title='Vote' onPress={()=> sendVote(props.id)} color='#5D3FD3'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  Cardcontainer:{
    borderWidth:2,
    padding:10,
    borderBottomColor:'#fff',
    width:'100%',
    borderRadius:8,
    flexDirection: 'row',
    backgroundColor:'#404040'
  },
  card:{
    borderRadius:10,
    width: 200, 
    height: 300,
  },
  label:{
    fontSize:22,
    color:'white',
    paddingBottom:15,
    textAlign:'center',
  },
  infoContainer:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    textAlign:'center',
    paddingTop:20,
  }
});