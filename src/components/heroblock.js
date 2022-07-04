import React from "react";
import styled from "styled-components";
import Row from "../components/row";
import TextBlock from "../components/textblock";

const StyledHeroBlock = styled.div`
  margin-top: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-family: "New Rocker";
  font-size: 7.5rem;
  text-align: center;
  margin: 0 0 1.5rem;

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

const Lead = styled.p`
  font-family: "Forum";
  font-size: 1.5rem;
  line-height: 1.2;
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
  margin-bottom: 0.5rem;
  margin-left: 0.125rem;
  margin-right: 0.125rem;
  display: inline-flex;
  align-items: center;
`;

const SecondaryTitle = styled.p`
  font-weight: 800;
  font-family: "Forum";
  font-size: 1.875rem;
  margin: 0 0 1rem 0;
`;

const LinkIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1rem;
`;

const HeroBlock = () => {
  return (
    <StyledHeroBlock>
      <Heading>Explore the Dragonverse</Heading>
      <Lead>
        The Dragonverse is a NFT project on the Solana Blockchain which seeks to
        differentiate itself from other projects through the innovation and
        gamification of traditionally boring and recycled NFT mechanics and
        concepts. With our Genesis Collection (Gen-0) that minted out in early
        May, we introduced several distinct and innovative features including: a
        deflationary token system, tier-based staking, breeding, and
        community-driven story events tied to authentically written original
        lore. Now, with our soon to mint Gen-1 Collection, we are aiming to
        offer a new, fun, and imaginative take on traditional NFT staking, with
        an original stake-to-hatch mechanic, as well as play-to-earn utility in
        our custom cooperative gamified staking platform: The Dragonverse.
      </Lead>
      <Row>
        <Row.Col size={6} sizeMd={12}>
          <TextBlock textAlign="center">
            <TextBlock.Heading>Gen-0</TextBlock.Heading>
            <TextBlock.Text>
              <SecondaryTitle>Find our collection on:</SecondaryTitle>
              <Cta
                href="https://magiceden.io/marketplace/deflationarydragons"
                target="_blank"
                rel="noopener noreferrer"
              >
                MagicEden
                <LinkIcon fill="currentColor" viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  />
                </LinkIcon>
              </Cta>
              <Cta
                href="https://opensea.io/collection/deflationary-dragons"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenSea
                <LinkIcon fill="currentColor" viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  />
                </LinkIcon>
              </Cta>
            </TextBlock.Text>
          </TextBlock>
        </Row.Col>
        <Row.Col size={6} sizeMd={12} dividedLg dividedXl divided>
          <TextBlock textAlign="center">
            <TextBlock.Heading>Gen-1</TextBlock.Heading>
            <TextBlock.Text>
              <SecondaryTitle>Get on the whitelist:</SecondaryTitle>
              <Cta
                href="https://discord.com/invite/5Dk6huKj9K"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
                <LinkIcon fill="currentColor" viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  />
                </LinkIcon>
              </Cta>
            </TextBlock.Text>
          </TextBlock>
        </Row.Col>
      </Row>
    </StyledHeroBlock>
  );
};

export default HeroBlock;
