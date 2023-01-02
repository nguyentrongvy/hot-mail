import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3001/",
});

export const get = async (path: any, options = {}) => {
  const response = await request.get(path, options);

  return response.data;
};

export const post = async (path: any, data: any) => {
    const response = await request.post(path, data);

    return response.data;
}

export default request;