import axios from "axios";

// REACT_APP_BASEURL =
const BaseURL = "http://localhost:8080/api/v1";

const API = axios.create({ baseURL: BaseURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;
