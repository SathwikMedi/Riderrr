import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native';
import Loading from './Loading';
import AppNavigation from './AppNavigation';
import Register from './Register';

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <RootStack.Navigator
      initialRouteName={'Loading'}
      screenOptions={{
        animationEnabled: true,
        header: false,
      }}>
      <RootStack.Screen
        name={'Loading'}
        component={Loading}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name={'Signup'}
        component={Register}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name={'App'}
        component={AppNavigation}
        options={{headerShown: false}}
      />
     
    </RootStack.Navigator>
  </NavigationContainer>
  );
}


