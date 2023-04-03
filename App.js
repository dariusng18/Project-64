import React, {Component} from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { Header } from 'react-native-elements';

export default class App extends React.Component{
    constructor() {
        super();
        this.state = {
          text: '',
          displayText: '',
        };
      }
    render()  {
         return (
            <View>
                <HomeScreen/>
            </View>

         )
            
                
            

        
    }
}
    

    
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    inputBoxContainer: {
        flex:0.3,
        alignItems:'center',
        justifyContent:'center'
    },
    inputBox: {
        width: '80%',
        alignSelf:'center',
        height:40,
    },
})
