import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ContactScreen from './src/screens/ContactScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log('Hey Welcome');
  return (
    <NavigationContainer>

    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />

    </Stack.Navigator>

    </NavigationContainer>
  );
}