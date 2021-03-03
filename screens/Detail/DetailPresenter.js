import React from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import Poster from "../../components/Poster";
import ScrollContainer from "../../components/ScrollContainer";
import styled from "styled-components/native";
import Votes from "../../components/Votes";
import { apiImage } from "../../api";

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

export default ({ result, loading }) => (
  <ScrollContainer loading={false}>
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
        {result.overview && (
          <>
            <DataName>OverView</DataName>
            <DataValue>{result.overview}</DataValue>
          </>
        )}
        {loading && (
          <ActivityIndicator style={{ marginTop: 30 }} color={"white"} />
        )}
        {result.spoken_languages && (
          <>
            <DataName>Language</DataName>
            <DataValue>
              {result.spoken_languages.map((lan) => `${lan.name}  `)}
            </DataValue>
          </>
        )}
      </Data>
    </>
  </ScrollContainer>
);
