import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
    // SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';

function LoginScreen() {

    var style = StyleSheet.create({
        button: {
            backgroundColor: '#6dcfb6',
            borderRadius: 10,
            borderWidth: 0,
            height: 40,
            width: '80%',
            elevation: 3,
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',        
        },
        buttonText: {
            color: '#ffffff'
        },
        textInput: {
            width: '80%',
            borderWidth: 1,
            borderRadius: 10,
            height: 40,
            marginTop: 20,
            borderColor: 'lightgray',
            paddingHorizontal: 20
        }
    });

    const navigation = useNavigation();
    // const dispatch = useDispatch();
  
    return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          autoCapitalize="none"
          placeholder="Email"
          style={style.textInput}></TextInput>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={style.textInput}></TextInput>

        <TouchableOpacity     
            style = {style.button}
            onPress={e => {
                navigation.navigate('Tabs');
            }}
        ><Text style={style.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>    
    );
  }
  
export default LoginScreen;