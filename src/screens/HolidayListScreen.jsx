import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import HolidayCard from '../components/HolidayCard';
import styles from '../styles/HolidayListScreenStyles';
import { getHolidays } from '../utils/api';

export default function HolidayListScreen({ route, navigation }) {
  const { country, year } = route.params;
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const fetchHolidays = async () => {
      const data = await getHolidays(country, year);
      setHolidays(data);
    };
    fetchHolidays();
  }, [country, year]);

  return (
    <View style={styles.container}>
      <FlatList
        data={holidays}
        keyExtractor={(item) => item.date.iso}
        renderItem={({ item }) => (
          <HolidayCard
            holiday={item}
            onPress={() => navigation.navigate('HolidayDetail', { holiday: item })}
          />
        )}
      />
    </View>
  );
}
