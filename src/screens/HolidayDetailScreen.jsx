import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/HolidayDetailScreenStyles';

export default function HolidayDetailScreen({ route }) {
  const { holiday } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{holiday.name}</Text>
      <Text style={styles.date}>Date: {holiday.date.iso}</Text>
      <Text style={styles.description}>
        Description: {holiday.description || 'No description available'}
      </Text>
    </View>
  );
}
