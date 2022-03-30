import React from "react";
import styled from "styled-components";
import mist from "../images/mist.svg";
import hero from "../images/hero.svg";

const StyledHero = styled.div`
  min-height: 76.25rem;
  background-image: url(${mist}), url(${hero});
  background-size: auto, auto 100%;
  background-repeat: no-repeat, repeat;
  background-position: center 3rem, center;
  padding-top: 5rem;
`;

const Content = styled.div`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-family: "New Rocker";
  font-size: 7.5rem;
  text-align: center;
  margin: 0 0 1.5rem;
`;

const Lead = styled.p`
  font-family: "Forum";
  font-size: 1.5rem;
  text-align: center;
  max-width: 52.5rem;
  margin: 0 0 3rem 0;
`;

const Cta = styled.a`
  text-decoration: none;
  font-family: "New Rocker";
  font-size: 2.25rem;
  color: #fff;
  background-color: #441b07;
  padding: 0.75rem 5rem;
  border-radius: 0.625rem;
  cursor: not-allowed;
`;

const Hero = (props) => {
  return (
    <StyledHero>
      {props.children}
      <Content>
        <Heading>Explore the Dragonverse</Heading>
        <Lead>
          Deflationary Dragons is a NFT collection of 888 uniquely designed
          dragons that will be minted on the Solana Blockchain. Deflationary
          Dragons NFT seeks to differentiate itself from other projects by
          providing holders with several distinct and innovative features
          including: a deflationary token system, tier-based staking,
          collaborative breeding, and participation in concurrent story events
          tied to authentically written original lore.
        </Lead>
        <Cta>Mint TBD</Cta>
      </Content>
    </StyledHero>
  );
};

export default Hero;
