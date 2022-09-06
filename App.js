import React from 'react';
import Home from './Screens/Home';
import History from './Screens/History';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

