import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image, Platform, Text} from 'react-native';
import Home from './Home';
import Like from './Like';
import Map from './Map';
import User from './User';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        animationEnabled: true,
        headerStyle: {
          backgroundColor: '#fff',
          paddingHorizontal: 10,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#000000',
          height: Platform.OS === 'ios' ? '9%' : '8%',
          borderRadius:40,
          width:'95%',
          alignSelf:'center',
          justifyContent:'center',alignItems:'center'
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return <Image source={require('./assets/home.png')}/>;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
         name={'Map'}
         component={Map}
        options={{
          tabBarIcon: ({focused}) => {
            return  <Image source={require('./assets/map1.png')}/>;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
      name={'User'}
      component={User}
        options={{
          tabBarIcon: ({focused}) => {
            return  <Image source={require('./assets/user.png')}/>;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
          name={'Like'}
          component={Like}
        options={{
          tabBarIcon: ({focused}) => {
            return  <Image source={require('./assets/like.png')}/>;
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
