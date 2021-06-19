import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {compose, createStore, applyMiddleware} from 'redux';
import userReducer from './redux/reducer';
import React from 'react';
import CameraScreen from './screens/CameraScreen';
import MapScreen from './screens/MapScreen';
import ImagesScreen from './screens/ImagesScreen';
import LoginScreen from './screens/LoginScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function App() {

  const middleware = [thunk];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    userReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  return (    
  <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
      <Stack.Screen name="Tabs" options={{headerShown: false}} component={Tabs} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

function Tabs() {

  return (

    <Tab.Navigator>
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Images" component={ImagesScreen} />
    </Tab.Navigator>
  );
}

export default App;
