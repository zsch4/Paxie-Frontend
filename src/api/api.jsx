import axios from "axios";

// backend url: http://localhost:5255

const BASE_URL = import.meta.env.VITE_API_URL;

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
  login: (credentials) => Api.post("/Auth/Login", credentials),
  addDocument: (document) => Api.post("/Documents/GetDocumentPlaceholder", document),
//   register: (newAdmin) => Api.post("/Auth/CreateAdmin", newAdmin),

};


