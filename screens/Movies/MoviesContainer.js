import React, { useEffect, useState } from "react";
import { movieApi } from "../../api";
import MoviesPresenter from "./MoviesPresenter";

export default () => {
  const [refresh, setRefresh] = useState(false);
  const [movies, setMovies] = useState({
    loading: true,
    nowPlaying: [],
    popular: [],
    upcoming: [],
    newPlayingError: null,
    popError: null,
    upcomingError: null,
  });
  const getData = async () => {
    const [nowPlaying, newPlayingError] = await movieApi.nowPlaying();
    const [popular, popError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovies({
      loading: false,
      nowPlaying,
      popular,
      upcoming,
      newPlayingError,
      popError,
      upcomingError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <MoviesPresenter refreshFn={getData} {...movies} />;
};
