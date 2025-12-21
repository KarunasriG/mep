import { registerAPI, loginAPI } from "../api/auth.api";

export async function registerUser(data) {
  try {
    const response = await registerAPI(data);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || "Registration failed";

    throw new Error(message);
  }
}

export async function loginUser(data) {
  try {
    const response = await loginAPI(data);
    console.log(response);
    const { access_token, user } = response.data;

    if (access_token) {
      localStorage.setItem("access_token", access_token);
    }
    return user;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Invalid mobile number or password";

    throw new Error(message);
  }
}
