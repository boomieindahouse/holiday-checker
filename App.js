import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import HolidayListScreen from './src/screens/HolidayListScreen';
import HolidayDetailScreen from './src/screens/HolidayDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HolidayList" component={HolidayListScreen} />
        <Stack.Screen name="HolidayDetail" component={HolidayDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
