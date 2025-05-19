import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { getWeatherByCity } from '../../services/weatherServises';
import { WeatherData } from '../../types/Weather';
import { WeatherCard } from '../../components/WeatherCard';

const HomeScreen = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const handleSearch = async () => {
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (error) {
      Alert.alert('Error', 'City not found or network error');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Masukkan Nama Kota yang ingin di pilih</Text>
      <TextInput
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <Button title="Search Weather" onPress={handleSearch} />
      {weather && <WeatherCard data={weather} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default HomeScreen;
