import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WeatherData } from '../types/Weather';

type Props = {
  data: WeatherData;
};

export const WeatherCard = ({ data }: Props) => (
  <View style={styles.card}>
    <Text style={styles.city}>{data.name}</Text>
    <Text style={styles.temp}>{data.main.temp}°C</Text>
    <Text>{data.weather[0].description}</Text>
    <Text>Humidity: {data.main.humidity}%</Text>
  </View>
);

const styles = StyleSheet.create({
  card: { padding: 20, backgroundColor: '#e0f7fa', borderRadius: 10, marginTop: 20 },
  city: { fontSize: 24, fontWeight: 'bold' },
  temp: { fontSize: 20 },
});
