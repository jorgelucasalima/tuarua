import axios from "axios";

//api do via cep

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/"
});

export default api;