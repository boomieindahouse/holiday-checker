import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/HolidayListStyles';
import { holidayTranslations, descriptionTranslations } from '../constants/translations';

export default function HolidayListScreen({ route }) {
  const { holidays } = route.params;

  // ฟังก์ชันสำหรับแปลชื่อวันหยุด
  const translateHoliday = (holidayName) => holidayTranslations[holidayName] || holidayName;

  // ฟังก์ชันสำหรับแปลคำอธิบาย
  const translateDescription = (description) => descriptionTranslations[description] || description;

  return (
    <View style={styles.container}>
      <FlatList
        data={holidays}
        keyExtractor={(item) => item.date.iso}
        renderItem={({ item }) => (
          <View style={styles.holidayItem}>
            <Text style={styles.holidayName}>{translateHoliday(item.name)}</Text>
            <Text style={styles.holidayDescription}>
              {translateDescription(item.description)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
