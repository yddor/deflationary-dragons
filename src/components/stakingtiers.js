import React from "react";
import styled from "styled-components";
import Row from "../components/row";

const Item = styled.div`
  font-family: "Forum";
  font-size: 1.5rem;
  line-height: 1.5;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

const ItemHeading = styled.h6`
  margin: 0;
  font-weight: 400;
  font-family: "New Rocker";
  font-size: 2.5rem;
`;

const Heading = styled.h5`
  font-family: "New Rocker";
  font-size: 3rem;
  text-align: center;
  margin: 0 0 2rem;
`;

const Disclaimer = styled.p`
  margin: 2rem 0 0;
  text-align: center;
  font-family: "Forum";
  font-size: 1.25rem;
  line-height: 1.5;
`;

const StakingTiers = () => {
  return (
    <div>
      <Heading>Staking Tiers</Heading>
      <Item>
        <Row>
          <Row.Col size={2} sizeXs={12}>
            <ItemHeading>Tier 5</ItemHeading>
          </Row.Col>
          <Row.Col size={10} sizeXs={12}>
            Requirements: No Requirements. All Deflationary Dragon NFTs will
            automatically be in Tier 5
            <br />
            Rewards: 3x Gen-1 WL Tokens + Base Gen-0/Gen-1 revenue share in SOL
          </Row.Col>
        </Row>
      </Item>
      <Item>
        <Row>
          <Row.Col size={2} sizeXs={12}>
            <ItemHeading>Tier 4</ItemHeading>
          </Row.Col>
          <Row.Col size={10} sizeXs={12}>
            Requirements: Total of 14 days of liquid or traditional staking
            <br />
            Rewards: 3x Gen-1 WL Tokens, 1x Gen-1 Free Mint + 1.2x Base
            Gen-0/Gen-1 revenue share in SOL
          </Row.Col>
        </Row>
      </Item>
      <Item>
        <Row>
          <Row.Col size={2} sizeXs={12}>
            <ItemHeading>Tier 3</ItemHeading>
          </Row.Col>
          <Row.Col size={10} sizeXs={12}>
            Requirements: Total of 30 days of liquid or traditional staking
            <br />
            Rewards: 5x Gen-1 WL Tokens, 2x Gen-1 Free Mint + 1.5x Base
            Gen-0/Gen-1 revenue share in SOL
          </Row.Col>
        </Row>
      </Item>
      <Item>
        <Row>
          <Row.Col size={2} sizeXs={12}>
            <ItemHeading>Tier 2</ItemHeading>
          </Row.Col>
          <Row.Col size={10} sizeXs={12}>
            Requirements: Total of 60 days of liquid or traditional staking
            <br />
            Rewards: 8x Gen-1 WL Tokens, 3x Gen-1 Free Mint + 2x Base
            Gen-0/Gen-1 revenue share in SOL
          </Row.Col>
        </Row>
      </Item>
      <Item>
        <Row>
          <Row.Col size={2} sizeXs={12}>
            <ItemHeading>Tier 1</ItemHeading>
          </Row.Col>
          <Row.Col size={10} sizeXs={12}>
            Requirements: Traditional Staking Only. Must have been staked within
            8 days of mint
            <br />
            Rewards: 10x Gen-1 WL Tokens, 5x Gen-1 Free Mint + 3x Base
            Gen-0/Gen-1 revenue share in SOL
          </Row.Col>
        </Row>
      </Item>
      <Disclaimer>
        *Note: Elder and King Dragons staked will have an even further boost on
        top of tier rewards.
        <br />
        <br />
        There will be two staking options for Deflationary Dragon NFT holders:
        liquid staking and traditional staking.
      </Disclaimer>
    </div>
  );
};

export default StakingTiers;
