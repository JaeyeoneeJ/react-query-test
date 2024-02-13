import axios from "axios";

const apiKey = process.env.REACT_APP_OPEN_API_KEY;

// Axios 인스턴스 생성
export const weatherInstance = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API_URL,
  params: {
    serviceKey: apiKey,
  },
});
