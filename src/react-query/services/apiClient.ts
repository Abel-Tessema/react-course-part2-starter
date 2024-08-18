import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

class ApiClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = () =>
    axiosInstance
      .get<T[]>(this.endPoint)
      .then(response => response.data);

  post = (data: T) =>
    axiosInstance
      .post<T>(this.endPoint, data)
      .then(response => response.data);
}

export default ApiClient;