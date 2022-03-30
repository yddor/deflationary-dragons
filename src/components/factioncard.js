import React from "react";
import styled from "styled-components";

const FactionCard = styled.div``;

const Image = styled.img`
  display: block;
  width: 100%;
  ${(props) => !props.renderNormal && "image-rendering: pixelated"};
`;

const Name = styled.h4`
  font-family: "New Rocker";
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0 0;
`;

FactionCard.Image = Image;
FactionCard.Name = Name;

export default FactionCard;
