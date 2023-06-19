import axios from "./customizeAxios";

export const fetchAllUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};
