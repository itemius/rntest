import React, {useEffect, useRef, useState} from 'react';
import {
    Text,
    TouchableOpacity,
    Platform,
    View,
  } from 'react-native';
import { RNCamera } from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {addImage} from '../../actions'
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import userReducer from '../../redux/reducer';
import { ImageSchema, IMAGE_SCHEMA } from '../../realm/schemas';


const Realm = require('realm');
const databaseOptions = {
  path: 'pixofarm.realm',
  schema: [ImageSchema],
  schemaVersion: 0
};

const CameraScreen = props => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    
    const askPermission = () => {
      if (Platform.OS == 'ios') {
        check(PERMISSIONS.IOS.CAMERA)
          .then(result => {
            switch (result) {
              case RESULTS.UNAVAILABLE:
                request(PERMISSIONS.IOS.CAMERA).then(result => {});
                break;
              case RESULTS.DENIED:
                request(PERMISSIONS.IOS.CAMERA)
                  .then(result => {})
                  .catch(err => {
                    console.log(err);
                  });
                break;
              case RESULTS.LIMITED:
                request(PERMISSIONS.IOS.CAMERA).then(result => {
                  console.log(result);
                });
                break;
              case RESULTS.GRANTED:
                break;
              case RESULTS.BLOCKED:
                break;
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        check(PERMISSIONS.ANDROID.CAMERA)
          .then(result => {
            switch (result) {
              case RESULTS.UNAVAILABLE:
                request(PERMISSIONS.ANDROID.CAMERA).then(result => {});
                break;
              case RESULTS.DENIED:
                request(PERMISSIONS.ANDROID.CAMERA)
                  .then(result => {})
                  .catch(err => {
                    console.log(err);
                  });
                break;
              case RESULTS.LIMITED:
                request(PERMISSIONS.ANDROID.CAMERA).then(result => {
                  console.log(result);
                });
                break;
              case RESULTS.GRANTED:
                break;
              case RESULTS.BLOCKED:
                break;
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    };
    
    useEffect(() => {
      askPermission();
    }, []);
    
    const camera = useRef();
    let pic = "";
    
    // const storeData = async images => {
    //   try {
    //     await AsyncStorage.setItem(
    //       'images',
    //       JSON.stringify({images: images}),
    //     );
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };

    takePicture = async () => {
        const options = { quality: 0.5, base64: true };
        let data = await camera.current.takePictureAsync(options);
        console.log(data.uri);

        Realm.open(databaseOptions).then(realm => {
          realm.write(() => {
            realm.create(IMAGE_SCHEMA, {
              imgID: new Date().getTime(),
              lat: props.route.params.coords.latitude,
              lng: props.route.params.coords.longitude,
              date: Date(),
              uri: data.uri
            });

            console.log("in realm");
          });

          realm.objects
        });

        navigation.goBack();
      }  

    return (
      <View style={styles.container}>
        <RNCamera
          ref={camera}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={styles.overlay}>
          <TouchableOpacity onPress={() => takePicture()} style={styles.button}>
            <Icon name="camera" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
    
};

export default CameraScreen;