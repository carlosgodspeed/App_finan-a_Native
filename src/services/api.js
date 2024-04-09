import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.6:3333'
})
// quando der erro de conexão com api verificar se o endereço de ip esta certo 
export default api;
