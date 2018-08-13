import axios from 'axios';

const API_KEY = '3e68285dcbfac1a3645e6c44773a1a11';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},mx`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}