import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Confirm from './Confirm';
import Payment from './Payment';
import Routes from './Routes';
import TabNavigation from './TabNavigation';

const DrawerStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

export default function AppNavigation({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName={'Tab'}
      screenOptions={{
        animationEnabled: true,
        headerStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen
        name={'Tab'}
        component={TabNavigation}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={'route'}
        component={Routes}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={'payment'}
        component={Payment}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={'confirm'}
        component={Confirm}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
