import axios from "axios";

let service: any = {};

service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API ,
    timeout: 50000,
});

// request interceptor
service.interceptors.request.use(
    (config: any) => {
      // Do something before request is sent
      return config;
    },
    (error: any) => {
      // Do something with request error
      console.log(error); // for debug
      Promise.reject(error);
    },
);

service.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    console.error("error:" + error); // for debug
    return Promise.reject(error);
  },
);

export default service;
