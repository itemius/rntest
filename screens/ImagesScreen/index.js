import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {useNavigation} from '@react-navigation/core';

const HistoryScreen = () => {
  const images = useSelector(state => state.userReducer.images);
  // [{takenTime: Date(), coords:{longitude:"2", latitude:"3"}, uri:"3F7D1B19-1D4B-41BF-A6FC-35745F81757E.jpg"}, 
  //   {takenTime: Date(), coords:{longitude:"2", latitude:"3"}, uri:"test"}, 
  //   {takenTime: Date(), coords:{longitude:"2", latitude:"3"}, uri:"test"}];
  const navigation = useNavigation();
//weather api key 7ecbd9692e8e44afbc1c3e6590423c55

  const sync = () => {
    axios
      .post('https://this.is.a.test/')
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  };

  return (
      <ScrollView style={styles.wrapper}>
        {images.map(item => {
          return (
            <View>
              <Image
                source={{uri: item.uri?.toString()}}></Image>
              <View>
                <Text>
                  {new Date(item.takenTime).toLocaleString()}
                </Text>
                <Text>
                  {item.coords.latitude + '; ' + item.coords.longitude}
                </Text>
              </View>
              <TouchableOpacity
                  onPress={() => {
                      sync();
                  }}>
                  <Text style={styles.buttonText}>sync</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
  );
};

export default HistoryScreen;
