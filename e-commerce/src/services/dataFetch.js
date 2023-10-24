import axios from "axios";

const apiUrl = "https://fakestoreapi.com";

const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const dataFetch = async (endpoint, method = "GET", data = null) => {
  try {
    if (method === "GET") {
      const response = await axiosInstance.get(endpoint);

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Request failed with status: " + response.status);
      }
    } else if (method === "POST") {
      const response = await axiosInstance.post(endpoint, data);

      if (response.status === 201) {
        // Assuming a successful POST request returns a 201 status code
        return response.data;
      } else {
        throw new Error("Request failed with status: " + response.status);
      }
    } else {
      throw new Error("Unsupported HTTP method: " + method);
    }
  } catch (error) {
    throw new Error(error.response.data);
  }
};
