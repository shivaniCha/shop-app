import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "content-type": "application/json",
  },
});

export default (() => {
  const post = (data, url) => {
    return instance({
      method: "POST",
      url: url,
      data: data,
    });
  };
  const get = async (url) => {
    return instance({
      method: "GET",
      url: url,
    });
  };
  return {
    post,
    get,
  };
})();
