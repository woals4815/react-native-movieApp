import React from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import Poster from "../../components/Poster";
import ScrollContainer from "../../components/ScrollContainer";
import styled from "styled-components/native";
import Votes from "../../components/Votes";
import { apiImage } from "../../api";
import { formatDate } from "../../utils";
import Link from "./Link";

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;
const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;
const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-top: 10px;
`;
const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;
const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;
const Data = styled.View`
  margin-top: 30px;
  padding: 0px 30px;
`;
const DataName = styled.Text`
  margin-top: 30px;
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 15px;
`;
const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

export default ({ result, loading, openBrowser }) => (
  <ScrollContainer
    loading={false}
    contentContainerStyle={{ paddingBottom: 80 }}
  >
    <>
      <Header>
        <BG source={{ uri: apiImage(result.backgroundImage, "a") }} />
        <Container>
          <Poster url={result.poster} />
          <Info>
            <Title>{result.title}</Title>
            <Votes votes={result.votes} />
          </Info>
        </Container>
      </Header>
      <Data>
        {result.overview ? (
          <>
            <DataName>✍️ OverView</DataName>
            <DataValue>{result.overview}</DataValue>
          </>
        ) : null}
        {loading ? (
          <ActivityIndicator style={{ marginTop: 30 }} color={"white"} />
        ) : null}
        {result.spoken_languages ? (
          <>
            <DataName>👅 Language</DataName>
            <DataValue>
              {result.spoken_languages.map((lan) => `${lan.name}  `)}
            </DataValue>
          </>
        ) : null}
        {result.status ? (
          <>
            <DataName>📺 Status</DataName>
            <DataValue>{result.status}</DataValue>
          </>
        ) : null}
        {result.runtime ? (
          <>
            <DataName>🎞 Runtime</DataName>
            <DataValue>{result.runtime} minutes</DataValue>
          </>
        ) : null}
        {result.first_air_date ? (
          <>
            <DataName>⏱ First Air Date</DataName>
            <DataValue>{formatDate(result.first_air_date)}</DataValue>
          </>
        ) : null}
        {result.genres ? (
          <>
            <DataName>📚 Genres</DataName>
            <DataValue>
              {result.genres.map((genre, index) =>
                index + 1 === result.genres.length
                  ? genre.name
                  : `${genre.name}, `
              )}
            </DataValue>
          </>
        ) : null}
        {result.number_of_episodes ? (
          <>
            <DataName>📒 Seasons / Episodes</DataName>
            <DataValue>
              {result.number_of_seasons} / {result.number_of_episodes}
            </DataValue>
          </>
        ) : null}
        {result.imdb_id ? (
          <>
            <DataName>Links</DataName>
            <Link
              text={"IMDB Page"}
              icon={"imdb"}
              onPress={() =>
                openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)
              }
            />
          </>
        ) : null}
        {result.videos.results?.length > 0 ? (
          <>
            <DataName>Videos</DataName>
            {result.videos.results.map((video) => (
              <Link
                key={video.id}
                text={video.name}
                icon="youtube-play"
                onPress={() =>
                  openBrowser(`https://www.youtube.com/watch?v=${video.key}`)
                }
              />
            ))}
          </>
        ) : null}
      </Data>
    </>
  </ScrollContainer>
);
