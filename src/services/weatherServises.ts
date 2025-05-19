import axios from 'axios';
import { WeatherData } from '../types/Weather';

const API_KEY = '0161655889e27caab7beb1bd550629f0';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByCity = async (city: string): Promise<WeatherData> => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });

  return response.data;
};
