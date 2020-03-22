import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Settings from './Screens/Settings/Settings';
import Feeds from './Screens/Feeds/Feeds';

import Login from './Screens/Login/Login';
import Signup from './Screens/Signup/Signup';



const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />
      <Tab.Screen name="Feeds" component={Feeds} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CompanyName" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigator

