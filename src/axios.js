import axios from "axios";

const instance = axios.create({
  baseURL: "/api/v1", // routed through Vite proxy
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    console.log("[AXIOS] Attaching token:", token);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
