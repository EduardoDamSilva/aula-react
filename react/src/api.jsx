import axios from "axios";

const api = axios.create({
  baseURL: "https://65120accb8c6ce52b3954589.mockapi.io/musicas"
  });

export default api;