import React from 'react';
import { View, Text } from 'react-native';
import '../../src/styles/HolidayDetailScreen.css';

export default function HolidayDetailScreen({ route }) {
  const { holiday } = route.params;

  return (
    <View style={{ flex: 1 }} className="holiday-detail-container">
      <Text className="holiday-detail-title">{holiday.name}</Text>
      <Text className="holiday-detail-date">Date: {holiday.date.iso}</Text>
      <Text className="holiday-detail-description">
        Description: {holiday.description || 'No description available'}
      </Text>
    </View>
  );
}
