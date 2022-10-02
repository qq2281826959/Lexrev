import axios from "axios";
const http = axios.create({
  baseURL: '',
  timeout: 1000
})

// 请求拦截器
http.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
http.interceptors.response.use((results) => {
  return results;
}, (error) => {
  return Promise.reject(error);
})

export default http;