import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: ${(props) => (props.padding ? props.padding : "3rem 0")};
  background-color: #371d23;

  ${(props) => props.minHeight && `min-height: ${props.minHeight};`}
  ${(props) =>
    props.backgroundImage && `background-image: ${props.backgroundImage};`}
  ${(props) =>
    props.backgroundSize && `background-size: ${props.backgroundSize};`}
  ${(props) =>
    props.backgroundPosition &&
    `background-position: ${props.backgroundPosition};`}
  ${(props) =>
    props.backgroundRepeat && `background-repeat: ${props.backgroundRepeat};`}

  ${(props) => props.flex && "display: flex;"}

  ${(props) => props.column && "flex-direction: column;"}
    
  ${(props) => props.alignContentBottom && "justify-content: end;"}

  ${(props) =>
    props.roadmap &&
    "@media (max-width: 992px) { min-height: calc(160vw / (1578 / 2130))};"}
`;

const Heading = styled.h2`
  font-family: "New Rocker";
  font-size: 4.75rem;
  margin: ${(props) => (props.margin ? props.margin : "0 0 2rem")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
`;

const Subheading = styled.h2`
  font-family: "New Rocker";
  font-size: 3rem;
  margin: ${(props) => (props.margin ? props.margin : "0 0 2rem")};
  text-align: center;
  font-weight: 400;
`;

Section.Heading = Heading;
Section.Subheading = Subheading;

export default Section;
