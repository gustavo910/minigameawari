import axios from "axios";
const api = axios.create({
  baseURL: "https://www.dnd5eapi.co/api/monsters/",
});
export default api;