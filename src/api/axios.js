import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key:"b602830e706904e93b4f197b72771083",
    language: "ko-KR"
  },
});

export default instance;