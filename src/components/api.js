import axios from "axios";

const api = axios.create({
 baseURL: "http://localhost:9000",
});

api.interceptors.request.use(
    (config) => {

   const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJULkkuIEdlc3RvciIsInN1YiI6IjhiOGM0NzNjZTA2YjA1Yzc1Y2UyMWUwY2RiNDJkOTQyZjFkNGE1NDkiLCJleHAiOjE2ODI3NzM1ODN9.ZoTxlxnC5gc24OSw7QppwNWCNx4kLAUdiC-pfPCWQ7U";

    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },

)

export default api;

