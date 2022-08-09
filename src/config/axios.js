import axios from "axios";

const instance = axios.create({
  baseURL: "https://s3.amazonaws.com/open-to-cors/assignment.json",
});

export default instance;
