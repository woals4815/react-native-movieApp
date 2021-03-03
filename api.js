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
  movie: (id) => getData(`/movie/${id}`, { append_to_response: "videos" }),
  discover: () => getData("/discover/movie"),
};

export const tvApi = {
  today: () => getData("/tv/airing_today"),
  thisWeek: () => getData("/tv/on_the_air"),
  topRated: () => getData("/tv/top_rated"),
  popular: () => getData("/tv/popular"),
  search: (query) => getData("/search/tv", { query }),
  show: (id) => getData(`/tv/${id}`, { append_to_response: "videos" }),
};

export const apiImage = (
  path,
  defaultPoster = "https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=582&q=80"
) => (path ? `https://image.tmdb.org/t/p/w500${path}` : defaultPoster);
