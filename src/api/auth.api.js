import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerAPI = (data) => {
  return api.post(`/api/auth/register`, data);
};

export const loginAPI = (data) => {
  return api.post(`/api/auth/login`, data);
};
