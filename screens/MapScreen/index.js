import React, {useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {setCoordinates, addLocation} from '../../actions';
import {
    View,
  } from 'react-native';

const MapScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();


  const [userCoords, setUserCoords] = useState({
    lat: 88.8888888888,
    lng: 22.2222222222,
  });

  const getCoordinates = () => {
    Geolocation.getCurrentPosition(
      position => {
        dispatch(setCoordinates(position));
        setUserCoords({
          lat: parseFloat(position.coords.latitude),
          lng: parseFloat(position.coords.longitude),
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const askPermission = () => {
    if (Platform.OS == 'ios') {
      check(PERMISSIONS.IOS.LOCATION_ALWAYS)
        .then(result => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(result => {
                getCoordinates();
              });
              break;
            case RESULTS.DENIED:
              request(PERMISSIONS.IOS.LOCATION_ALWAYS)
                .then(result => {
                  getCoordinates();
                })
                .catch(err => {
                  console.log(err);
                });
              break;
            case RESULTS.LIMITED:
              request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(result => {
                getCoordinates();
              });
              break;
            case RESULTS.GRANTED:
              getCoordinates();
              break;
            case RESULTS.BLOCKED:
              request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(result => {
                getCoordinates();
              });
              break;
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      check(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION)
        .then(result => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              request(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION).then(
                result => {
                  getCoordinates();
                },
              );
              break;
            case RESULTS.DENIED:
              request(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION)
                .then(result => {
                  getCoordinates();
                })
                .catch(err => {
                  console.log(err);
                });
              break;
            case RESULTS.LIMITED:
              request(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION).then(
                result => {
                  getCoordinates();
                },
              );
              break;
            case RESULTS.GRANTED:
              getCoordinates();
              break;
            case RESULTS.BLOCKED:
              request(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION).then(
                result => {
                  getCoordinates();
                },
              );
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


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <MapView style={{
            width: '100%',
            flex: 1,
        }}
            onPress={e => {
            dispatch(addLocation(e.nativeEvent.coordinate));
            navigation.navigate('CameraScreen', {coords: e.nativeEvent.coordinate});
          }}
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
      </View>
    );
  }
  
export default MapScreen;