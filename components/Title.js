import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-left: 30px;
`;

const Title = ({ title }) =>
  title ? <Text>{title}</Text> : <Text>No Title</Text>;

Title.porpTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
