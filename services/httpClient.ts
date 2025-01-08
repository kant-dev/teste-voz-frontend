import axios from "axios";

export const httpClient = axios.create({
  baseURL: "http://192.168.0.101:3001/",
})