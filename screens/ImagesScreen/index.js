import React, {useEffect, useState, useFocusEffect, useIsFocused} from 'react';
import {
  SafeAreaView,
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
import { ImageSchema, IMAGE_SCHEMA } from '../../realm/schemas';


const Realm = require('realm');
const databaseOptions = {
  path: 'pixofarm.realm',
  schema: [ImageSchema],
  schemaVersion: 0
};



const ImagesScreen = props => {

  // let images = [];
  const [images, setImages] = useState([]);
  // const isFocused = useIsFocused();


  useEffect(() => {
    Realm.open(databaseOptions).then(realm => {
      let imagesRealm = realm.objects(IMAGE_SCHEMA);

      console.log('images from realm end');
      console.log(imagesRealm);
      setImages(imagesRealm)

    });

}, []); 

// useFocusEffect(
//   Realm.open(databaseOptions).then(realm => {
//     let imagesRealm = realm.objects(IMAGE_SCHEMA);

//     console.log('images from realm end');
//     // console.log(imagesRealm);
//     // setImages(imagesRealm)

//   })

// )

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
    <SafeAreaView style={styles.container}>
      <Text>test</Text>
      <ScrollView style={styles.wrapper}>
        {images.map(item => {
          return (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: item.uri.startsWith('file://') ? item.uri.substr('file://'.length) : item.uri
              }}></Image> 
                <View>
                <Text style={styles.dateText}>
                  {new Date(item.date).toLocaleString()}
                </Text>
                <Text style={styles.dateText}>
                  {item.lat + '; ' + item.lng}
                </Text>
              </View>
              <TouchableOpacity style={styles.button}
                  onPress={() => {
                      sync();
                  }}>
                  <Text style={styles.buttonText}>sync</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      </SafeAreaView>
  );
};

export default ImagesScreen;
