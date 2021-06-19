import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {
    TouchableOpacity,
    Text,
    TextInput,
    View,
  } from 'react-native';

function LoginScreen() {

    const navigation = useNavigation();
    // const dispatch = useDispatch();
  
    return (

    <View style={styles.view}>
        <TextInput
          autoCapitalize="none"
          placeholder="Email"
          style={styles.textInput}></TextInput>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.textInput}></TextInput>

        <TouchableOpacity     
            style = {styles.button}
            onPress={e => {
                navigation.navigate('Tabs');
            }}
        ><Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>    
    );
  }
  
export default LoginScreen;