import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";
import { apiImage } from "../../api";
import Poster from "../Poster";
import { trimText } from "../../utils";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;
const Votes = styled.Text`
  color: rgb(220, 220, 200);
  margin-bottom: 7px;
  font-size: 12px;
  font-weight: 500;
`;

const VotesContainer = styled.View`
  margin-bottom: 7px;
`;

const OverView = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.View`
  margin-top: 10px;
  background-color: #e74c3c;
  padding: 7px 10px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      id,
      title,
      backgroundImage,
      votes,
      overview,
      poster,
    });
  };

  return (
    <Container>
      <BG source={{ uri: apiImage(backgroundImage) }} />
      <Content>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 40)}</Title>
          <VotesContainer>
            <Votes>{votes} / 10</Votes>
          </VotesContainer>
          <OverView>{trimText(overview, 110)}</OverView>
          <TouchableOpacity onPress={goToDetail}>
            <Button>
              <ButtonText>View details</ButtonText>
            </Button>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
};

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Slide;
