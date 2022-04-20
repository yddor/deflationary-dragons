import React from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import Nav from "../components/nav";
import Container from "../components/container";
import Row from "../components/row";
import Section from "../components/section";
import mist from "../images/mist.svg";
import hero from "../images/hero.svg";
import HeroBlock from "../components/heroblock";
import TextBlock from "../components/textblock";
import FactionCard from "../components/factioncard";
import fire_faction from "../images/fire_faction.png";
import water_faction from "../images/water_faction.png";
import earth_faction from "../images/earth_faction.png";
import air_faction from "../images/air_faction.png";
import celestial_faction from "../images/celestial_faction.png";
import dark_faction from "../images/dark_faction.png";
import lightning_faction from "../images/lightning_faction.png";
import cyborg_faction from "../images/cyborg_faction.png";
import forest_hills from "../images/forest_hills.svg";
import StakingTiers from "../components/stakingtiers";
import water_dragon from "../images/water_dragon.png";
import vegetation from "../images/vegetation.svg";
import hills from "../images/hills.svg";
import roadmap from "../images/roadmap.svg";
import cave from "../images/cave.svg";
import TeamMember from "../components/teammember";
import lawliet from "../images/lawliet.png";
import zealot from "../images/zealot.png";
import raphael_hatencia from "../images/raphael_hatencia.png";
import founding_dragon from "../images/founding_dragon.png";
import pitaszenko from "../images/pitaszenko.png";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Deflationary Dragons</title>
        <link rel="canonical" href="https://www.deflationarydragons.com/" />
      </Helmet>
      <Section
        padding="5rem 0 0"
        minHeight="76.25rem"
        backgroundImage={`url(${mist}), url(${hero})`}
        backgroundSize="auto, auto 100%"
        backgroundPosition="center 3rem, center"
        backgroundRepeat="no-repeat, repeat"
      >
        <Container>
          <Nav />
          <HeroBlock />
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Row.Col size={6} sizeMd={12}>
              <TextBlock textAlign={"right"}>
                <TextBlock.Heading>
                  A Deflationary Token System
                </TextBlock.Heading>
                <TextBlock.Text>
                  The Deflationary Dragons NFT collection will implement a
                  “Guaranteed Floor Price” (GFP) for each NFT in the collection
                  by promising to repurchase every NFT which is ever listed
                  below the GFP. NFTs which are repurchased will then be put up
                  to a “last chance auction” with the starting bid at GFP and
                  open to holders only. If the auction ends with zero bids, the
                  NFT will be permanently burned, and thus the overall supply of
                  the collection will decrease, hence creating a deflationary
                  token system.
                </TextBlock.Text>
              </TextBlock>
            </Row.Col>
            <Row.Col size={6} sizeMd={12}>
              <TextBlock>
                <TextBlock.Heading>Dragon Factions</TextBlock.Heading>
                <TextBlock.Text>
                  The Deflationary Dragons NFT collection will be composed of 8
                  Dragon Factions with each faction consisting of 111 Dragons,
                  hence totaling an overall supply of 888 Dragons. The 8 Dragon
                  Factions are: Fire, Water, Earth, Air, Dark, Celestial,
                  Lightning, and Cyborg. Factions will serve to grow and expand
                  community involvement and engagement by playing a key role
                  within the community. Learn more about Factions on our project
                  Whitepaper.
                </TextBlock.Text>
              </TextBlock>
            </Row.Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Row.Col size={3} sizeSm={6} sizeXs={12}>
              <FactionCard>
                <FactionCard.Image src={fire_faction} />
                <FactionCard.Name>Fire</FactionCard.Name>
              </FactionCard>
            </Row.Col>
            <Row.Col size={3} sizeSm={6} sizeXs={12}>
              <FactionCard>
                <FactionCard.Image src={water_faction} />
                <FactionCard.Name>Water</FactionCard.Name>
              </FactionCard>
            </Row.Col>
            <Row.Col size={3} sizeSm={6} sizeXs={12}>
              <FactionCard>
                <FactionCard.Image src={earth_faction} />
                <FactionCard.Name>Earth</FactionCard.Name>
              </FactionCard>
            </Row.Col>
            <Row.Col size={3} sizeSm={6} sizeXs={12}>
              <FactionCard>
                <FactionCard.Image src={air_faction} />
                <FactionCard.Name>Air</FactionCard.Name>
              </FactionCard>
            </Row.Col>
            <Row.Col size={3} sizeSm={6} sizeXs={12}>
              <FactionCard>
                <FactionCard.Image src={celestial_faction} />
                <FactionCard.Name>Celestial</FactionCard.Name>
              </FactionCard>
            </Row.Col>
            <Row.Col size={3} sizeSm={6} sizeXs={12}>
              <FactionCard>
                <FactionCard.Image src={dark_faction} />
                <FactionCard.Name>Dark</FactionCard.Name>
              </FactionCard>
            </Row.Col>
            <Row.Col size={3} sizeSm={6} sizeXs={12}>
              <FactionCard>
                <FactionCard.Image src={lightning_faction} />
                <FactionCard.Name>Lightning</FactionCard.Name>
              </FactionCard>
            </Row.Col>
            <Row.Col size={3} sizeSm={6} sizeXs={12}>
              <FactionCard>
                <FactionCard.Image src={cyborg_faction} />
                <FactionCard.Name>Cyborg</FactionCard.Name>
              </FactionCard>
            </Row.Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row alignCenter>
            <Row.Col size={8} sizeSm={12}>
              <TextBlock textAlign="center">
                <TextBlock.Heading>Dragon Ranks</TextBlock.Heading>
                <TextBlock.Text>
                  Within each Dragon Faction, there will be Dragons with
                  different ranks. The guaranteed floor price of a Dragon will
                  be directly based on rank. Within the 111 Dragons in each
                  faction there will be:
                </TextBlock.Text>
                <TextBlock.Text>
                  1 Elder Dragon with a 8 SOL guaranteed floor price
                  <br />
                  10 King Dragons with a 1.8 SOL guaranteed floor price
                  <br />
                  100 Warrior Dragons with a 0.8 SOL guaranteed floor price
                </TextBlock.Text>
                <TextBlock.Text>
                  Aside from having a higher GFP, Elder Dragons and King Dragons
                  will also have boosted staking rewards, better breeding
                  results, a more significant role in story events, and they
                  will act as leaders within their factions.
                </TextBlock.Text>
              </TextBlock>
            </Row.Col>
          </Row>
        </Container>
      </Section>
      {/* <Section>
        <Container>
          <TextBlock textAlign="center">
            <TextBlock.Heading>Tier-Based Staking</TextBlock.Heading>
            <TextBlock.Text>
              Immediately following the mint, Deflationary Dragon NFT holders
              will have the option to stake their Dragon NFTs in exchange for
              rewards. Unlike other projects which reward staking with a
              separate native project token with little to no utility outside of
              the project, Deflationary Dragon NFT staking will be rewarded
              directly via airdropped SOL as well as with additional rewards in
              the form of whitelist tokens and free mints for the future Gen-1
              project (see Gen-1 NFT Collection). Deflationary Dragon NFT
              Holders will be categorized into 5 Tiers based on staking method
              and time staked. Staking rewards will vary depending on tier, with
              the highest tier earning the most rewards. Deflationary Dragon
              staking rewards include: a percentage revenue share of royalties
              from secondary sales of the Deflationary Dragon Gen-0 NFT
              collection, a percentage revenue share of mint and secondary sale
              royalties from the future Gen-1 NFT Collection (specified under
              Gen-1 NFT Collection), and whitelist tokens/free mints for the
              Gen-1 NFT Collection.
            </TextBlock.Text>
          </TextBlock>
        </Container>
      </Section>
      <Section>
        <Container>
          <StakingTiers />
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Row.Col size={6} sizeMd={12}>
              <TextBlock textAlign="center">
                <TextBlock.Heading>Liquid Staking</TextBlock.Heading>
                <TextBlock.Text>
                  Holders can actively stake and un-stake at any time. No
                  penalty for unstaking. Tier will be determined by overall time
                  staked. However time staked will reset to 0 if sold on a
                  secondary market. For example: Holder stakes for 7 days,
                  unstakes for 2 days, resumes staking for 7 days. Total time
                  staked will be 7 + 7 = 14 days. On the 14th day of staking,
                  the Dragon staked will reach tier 4 and unlock tier 4 rewards.
                </TextBlock.Text>
              </TextBlock>
            </Row.Col>
            <Row.Col size={6} sizeMd={12} divided>
              <TextBlock textAlign="center">
                <TextBlock.Heading>Liquid Staking</TextBlock.Heading>
                <TextBlock.Text>
                  Holders will choose to stake and lock up their NFT until the
                  Gen-1 Collection mint date. This action cannot be undone, once
                  locked, holder will not be able to unstake until the mint of
                  the Gen-1 Collection. Traditional Stakers will immediately
                  unlock tier rewards at the time of staking. Note 1: The only
                  way to access Tier 1 is to do traditional staking within 8
                  days of mint. Note 2: Traditional Staked Deflationary Dragons
                  will still be able to breed (see Breeding) For example: Holder
                  chooses to lock up Dragon through traditional staking within 8
                  days of mint. Dragon staked will immediately reach tier 1 and
                  unlock tier 1 rewards.
                </TextBlock.Text>
              </TextBlock>
            </Row.Col>
          </Row>
        </Container>
      </Section> */}
      <Section
        padding="12rem 0 0"
        minHeight="90rem"
        backgroundImage={`url(${forest_hills})`}
        backgroundSize="auto 100%"
        backgroundPosition="center"
      >
        <Container>
          <Row>
            <Row.Col size={8} sizeSm={12}>
              <TextBlock>
                <TextBlock.Heading>Utility</TextBlock.Heading>
                <TextBlock.List>
                  <TextBlock.List.Item>
                    Access to private holder-only and faction-only discord
                    channels in server
                  </TextBlock.List.Item>
                  <TextBlock.List.Item>
                    Access to immediate liquidity at GFP if one is desperate to
                    sell
                  </TextBlock.List.Item>
                  <TextBlock.List.Item>
                    Revenue share of royalties from sales in secondary market
                  </TextBlock.List.Item>
                  <TextBlock.List.Item>
                    Revenue share of mint and royalties from future Gen-1
                    Collection and any other future collections
                  </TextBlock.List.Item>
                  <TextBlock.List.Item>
                    Ability to stake the Dragon NFT for an increased share of
                    the above revenue streams proportional to how long one is
                    staking for. Longer stake = larger percentage share of
                    revenues
                  </TextBlock.List.Item>
                  <TextBlock.List.Item>
                    Those who stake their Dragon NFT will also earn rewards in
                    the form of WL tokens and FREE mints for the future Gen-1
                    Collection. Quantity will be determined by how long one has
                    been staking for
                  </TextBlock.List.Item>
                  <TextBlock.List.Item>
                    Ability to breed their Dragon NFT which will result in a
                    free mint of the Gen-1 Collection.
                  </TextBlock.List.Item>
                  <TextBlock.List.Item>
                    Lore Participation. Ability to participate in story events,
                    vote on faction decisions, etc.
                  </TextBlock.List.Item>
                </TextBlock.List>
              </TextBlock>
            </Row.Col>
            <Row.Col size={4} sizeSm={12}>
              <img src={water_dragon} />
            </Row.Col>
          </Row>
        </Container>
      </Section>
      <Section
        padding="5rem 0 0"
        minHeight="177.5rem"
        backgroundImage={`url(${vegetation}), url(${hills}), url(${roadmap})`}
        backgroundSize="auto calc(100% * (371 / 2130)), auto calc(100% * (825 / 2130)), auto calc(100% - 28rem)"
        backgroundPosition="bottom, bottom, center"
        backgroundRepeat="repeat-x, no-repeat, no-repeat"
        roadmap
      >
        <Container>
          <Section.Heading>Roadmap</Section.Heading>
        </Container>
      </Section>
      <Section
        padding="8rem 0 0"
        minHeight="92rem"
        backgroundImage={`url(${cave})`}
        backgroundSize="auto calc(100% - 12rem)"
        backgroundPosition="bottom"
        backgroundRepeat="no-repeat"
      >
        <Container>
          <Section.Heading>Our Team</Section.Heading>
          <Row alignCenter>
            <Row.Col size={3} sizeMd={4} sizeSm={6} sizeXs={12}>
              <TeamMember>
                <TeamMember.AvatarContainer>
                  <TeamMember.Avatar src={lawliet}></TeamMember.Avatar>
                </TeamMember.AvatarContainer>
                <TeamMember.Name>Lawliet</TeamMember.Name>
                <TeamMember.Role>Founder / Dev</TeamMember.Role>
              </TeamMember>
            </Row.Col>
            {/* <Row.Col size={3} sizeMd={4} sizeSm={6} sizeXs={12}>
              <TeamMember>
                <TeamMember.AvatarContainer>
                  <TeamMember.Avatar src={zealot}></TeamMember.Avatar>
                </TeamMember.AvatarContainer>
                <TeamMember.Name>Zealot</TeamMember.Name>
                <TeamMember.Role>Dev</TeamMember.Role>
              </TeamMember>
            </Row.Col> */}
          </Row>
          <Row alignCenter>
            <Row.Col size={3} sizeMd={4} sizeSm={6} sizeXs={12}>
              <TeamMember>
                <TeamMember.AvatarContainer>
                  <TeamMember.Avatar src={raphael_hatencia}></TeamMember.Avatar>
                </TeamMember.AvatarContainer>
                <TeamMember.Name>Raphael Hatencia</TeamMember.Name>
                <TeamMember.Role>Artist</TeamMember.Role>
              </TeamMember>
            </Row.Col>
            <Row.Col size={3} sizeMd={4} sizeSm={6} sizeXs={12}>
              <TeamMember>
                <TeamMember.AvatarContainer>
                  <TeamMember.Avatar src={founding_dragon}></TeamMember.Avatar>
                </TeamMember.AvatarContainer>
                <TeamMember.Name>Founding Dragon</TeamMember.Name>
                <TeamMember.Role>Writer</TeamMember.Role>
              </TeamMember>
            </Row.Col>
            <Row.Col size={3} sizeMd={4} sizeSm={6} sizeXs={12}>
              <TeamMember>
                <TeamMember.AvatarContainer>
                  <TeamMember.Avatar src={pitaszenko}></TeamMember.Avatar>
                </TeamMember.AvatarContainer>
                <TeamMember.Name>Pitaszenko</TeamMember.Name>
                <TeamMember.Role>Lead Mod</TeamMember.Role>
              </TeamMember>
            </Row.Col>
          </Row>
          <Footer />
        </Container>
      </Section>
    </>
  );
};

export default IndexPage;
