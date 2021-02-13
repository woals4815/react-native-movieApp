import axios from "axios";

const API_KEY = "ecb19d59a9c6a8b420582da6e3e9d124";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: API_KEY,
    },
  });

export const movieApi = {
  nowPlaying: () => makeRequest("/movie/now_playing"),
  popular: () => makeRequest("/movie/popular"),
  upcoming: () => makeRequest("/movie/upcoming"),
  search: (query) => makeRequest(`/search/movie`, { query }),
  movie: (id) => makeRequest(`/movie/${id}`),
  discover: () => makeRequest("/discover/movie"),
};

export const tvApi = {
  today: () => makeRequest("/tv/airing_today"),
  thisWeek: () => makeRequest("/tv/on_the_air"),
  topRated: () => makeRequest("/tv/top_rated"),
  popular: () => makeRequest("/tv/popular"),
  search: (query) => makeRequest("/search/tv", { query }),
  show: (id) => makeRequest(`/tv/${id}`),
};
