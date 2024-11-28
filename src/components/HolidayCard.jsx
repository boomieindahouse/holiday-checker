import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/HolidayCardStyles';

export default function HolidayCard({ holiday, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{holiday.name}</Text>
      <Text style={styles.date}>{holiday.date.iso}</Text>
    </TouchableOpacity>
  );
}
