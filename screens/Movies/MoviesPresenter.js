import React from "react";
import styled from "styled-components";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, Text } from "react-native";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;

const Header = styled.View`
  width: 100%;
  height: ${height / 3}px;
`;
const Section = styled.View`
  background-color: red;
  height: 100%;
`;

export default ({ loading, nowPlaying }) => (
  <Container>
    {loading ? (
      <ActivityIndicator color="white" size="small" />
    ) : (
      <Header>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {nowPlaying.map((movie) => (
            <Section key={movie.id}>
              <Text>{movie.original_title}</Text>
            </Section>
          ))}
        </Swiper>
      </Header>
    )}
  </Container>
);
