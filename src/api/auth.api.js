import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Attach access token
api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle expired access token
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        const res = await api.get("/auth/user");
        sessionStorage.setItem("accessToken", res.data.accessToken);

        error.config.headers.Authorization = `Bearer ${res.data.accessToken}`;

        return api(error.config);
      } catch {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export const registerAPI = (data) => {
  return api.post(`/api/auth/register`, data);
};

export const loginAPI = (data) => {
  return api.post(`/api/auth/login`, data);
};

export const logoutAPI = () => {
  return api.post(`/api/auth/logout`, {});
};

export const verifyUserAPI = () => {
  return api.get(`/api/auth/user`);
};
