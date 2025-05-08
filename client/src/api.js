import axios from 'axios';
const backendUrl = 'http://localhost:4000';


const api = axios.create({
  baseURL: backendUrl,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
