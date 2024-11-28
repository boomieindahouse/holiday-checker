import React from 'react';
import { View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/SearchBarStyles';

export default function SearchBar({ query, onSearch }) {
  return (
    <View style={styles.searchBox}>
      <FontAwesome name="search" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Type a country name"
        value={query}
        onChangeText={onSearch}
      />
    </View>
  );
}
