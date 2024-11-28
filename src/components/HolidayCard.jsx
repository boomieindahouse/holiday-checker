import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import '../../src/styles/HolidayCard.css';

export default function HolidayCard({ holiday, onPress }) {
  return (
    <TouchableOpacity className="holiday-card" onPress={onPress}>
      <Text className="holiday-name">{holiday.name}</Text>
      <Text className="holiday-date">{holiday.date.iso}</Text>
    </TouchableOpacity>
  );
}
