import axios from "axios";

const API_KEY = "ecb19d59a9c6a8b420582da6e3e9d124";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: API_KEY,
    },
  });

const getData = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getData("/movie/now_playing"),
  popular: () => getData("/movie/popular"),
  upcoming: () => getData("/movie/upcoming", { region: "kr" }),
  search: (query) => getData(`/search/movie`, { query }),
  movie: (id) => getData(`/movie/${id}`),
  discover: () => getData("/discover/movie"),
};

export const tvApi = {
  today: () => getData("/tv/airing_today"),
  thisWeek: () => getData("/tv/on_the_air"),
  topRated: () => getData("/tv/top_rated"),
  popular: () => getData("/tv/popular"),
  search: (query) => getData("/search/tv", { query }),
  show: (id) => getData(`/tv/${id}`),
};
