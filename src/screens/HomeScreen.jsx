import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles/HomeScreenStyles';
import countries from '../constants/countries';

export default function HomeScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const searchHolidays = (countryCode) => {
    navigation.navigate('HolidayList', { country: countryCode, year: '2024' });
  };

  const handleSearch = (text) => {
    setQuery(text);
    if (text) {
      setFilteredCountries(
        countries.filter((item) =>
          item.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setFilteredCountries(countries);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a country"
        value={query}
        onChangeText={handleSearch}
      />
      {query ? (
        <FlatList
          data={filteredCountries}
          keyExtractor={(item) => item.code}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setQuery(item.name);
                searchHolidays(item.code);
              }}
            >
              <Text style={styles.listItem}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : null}
    </View>
  );
}
