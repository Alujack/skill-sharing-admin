import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/v1', 
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
//   withCredentials: true, // if your backend uses cookies (e.g. auth)
});

// // Add request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // You can add auth token here if needed
//     const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Add response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Optional: handle 401, 403 errors globally
//     if (error.response?.status === 401) {
//       // Optionally redirect to login or logout user
//       console.warn('Unauthorized, redirecting...');
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
