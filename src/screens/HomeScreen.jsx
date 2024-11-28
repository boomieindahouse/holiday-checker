import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import '../../src/styles/HomeScreen.css';

export default function HomeScreen({ navigation }) {
  const [country, setCountry] = useState('us');
  const [year, setYear] = useState('2024');

  const searchHolidays = () => {
    navigation.navigate('HolidayList', { country, year });
  };

  return (
    <View style={{ flex: 1 }} className="home-container">
      <Text className="home-title">Check Holidays</Text>
      <TextInput
        className="home-input"
        placeholder="Enter country code (e.g., us)"
        value={country}
        onChangeText={setCountry}
      />
      <TextInput
        className="home-input"
        placeholder="Enter year"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
      />
      <Button title="Search Holidays" onPress={searchHolidays} />
    </View>
  );
}
