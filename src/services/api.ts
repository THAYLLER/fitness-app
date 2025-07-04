import axios, { AxiosError, AxiosResponse } from 'axios';

const baseURL = process.env.EXPO_PUBLIC_API_URL ||
  'http://localhost:3333';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const status = error.response?.status;
    const data = error.response?.data as { message?: string } | undefined;
    const message = data?.message || error.message;

    const apiError = { status, data, message };

    console.error('API Error:', apiError);

    return Promise.reject(apiError);
  },
);

export default api; 