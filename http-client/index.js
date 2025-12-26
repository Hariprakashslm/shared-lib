const axios = require("axios");
const axiosRetry = require("axios-retry").default;

const createHttpClient = ({ baseURL, timeout = 5000, retries = 2 }) => {
  const client = axios.create({
    baseURL,
    timeout,
  });

  axiosRetry(client, {
    retries,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: (error) =>
      error.response?.status >= 500 || error.code === "ECONNABORTED",
  });

  client.interceptors.request.use((config) => {
    if (config.headers["x-correlation-id"]) return config;
    return config;
  });

  return client;
};

module.exports = { createHttpClient };
