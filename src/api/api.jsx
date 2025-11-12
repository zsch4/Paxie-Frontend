import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

// Create an Axios instance
const Api = axios.create({baseURL: `${BASE_URL}/api`});

Api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default Api;


export const api = {
  //AUTH API
//   login: (credentials) => Api.post("/Auth/login", credentials),
//   register: (newUser) => Api.post("/Auth/register", newUser),

};


