import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone4.herokuapp.com/",
});

export default instance;
