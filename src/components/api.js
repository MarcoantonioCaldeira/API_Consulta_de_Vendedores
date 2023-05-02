import axios from "axios";

const api = axios.create({
 baseURL: "http://localhost:9000",
 headers: {"Access-Control-Allow-Origin": "*"}
});

api.interceptors.request.use(
    (config) => {

   const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJULkkuIEdlc3RvciIsInN1YiI6IjhiOGM0NzNjZTA2YjA1Yzc1Y2UyMWUwY2RiNDJkOTQyZjFkNGE1NDkiLCJleHAiOjE2ODMwNzQ3ODl9.0IrfxGNC5OHTqBFomxPWwV7dzIf9JxX8ryBEcn5X8h4';

   if(token){
      config.headers['Authorization'] = `Bearer ${token}`;
   }
   
    return config;
  },
  error => {
    return Promise.reject(error);
  }

)

export default api;

