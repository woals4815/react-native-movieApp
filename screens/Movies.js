import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { movieApi } from "../api";

export default ({ navigation }) => {
  const [movies, setMovies] = useState({
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
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text style={{ color: "white" }}>{movies.nowPlaying.length}</Text>
      <Button title="Movie" onPress={() => navigation.navigate("Detail")} />
    </View>
  );
};
