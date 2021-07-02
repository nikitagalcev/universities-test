import axios from 'axios';

export const getUniversities = (name) => {
  return axios.get(`http://localhost:9000/search?country=${name}`);
};