import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: '#888',
  },
});
