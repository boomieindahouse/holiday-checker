import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
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
      <View style={styles.header}>
        <Text style={styles.headerText}>🌟 Holiday Checker 🌟</Text>
      </View>

      {/* ใช้ SearchBar Component */}
      <SearchBar query={query} onSearch={handleSearch} />

      {query ? (
        <FlatList
          data={filteredCountries}
          keyExtractor={(item) => item.code}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => {
                setQuery(item.name);
                searchHolidays(item.code);
              }}
            >
              <Text style={styles.listText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : null}
    </View>
  );
}
