import axios from 'axios';

const instanceAios = axios.create({
  baseURL: 'https://swapi.dev/api',
});

export const swapiAPI = {
  getDataSwapi(category, id) {
    return instanceAios.get(`/${category}/${id}`);
  },
};
