import React from "react";
import styled from "styled-components";
import Swiper from "react-native-web-swiper";
import { Dimensions, Text } from "react-native";

const { width, height } = Dimensions.get("screen");

const Header = styled.View`
  width: 100%;
  height: ${height / 3}px;
`;
const Section = styled.View`
  background-color: red;
  height: 100%;
`;

export default () => (
  <Header>
    <Swiper>
      <Section>
        <Text>Hello</Text>
      </Section>
      <Section>
        <Text>Hello</Text>
      </Section>
      <Section>
        <Text>Hello</Text>
      </Section>
    </Swiper>
  </Header>
);
