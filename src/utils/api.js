const API_KEY = '   ';
const BASE_URL = 'https://calendarific.com/api/v2/holidays';

export const getHolidays = async (country, year) => {
  try {
    const response = await fetch(
      `${BASE_URL}?api_key=${API_KEY}&country=${country}&year=${year}`
    );
    const json = await response.json();
    return json.response.holidays;
  } catch (error) {
    console.error('Error fetching holidays:', error);
    return [];
  }
};
