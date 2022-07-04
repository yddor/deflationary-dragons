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
import stake_to_hatch from "../images/stake_to_hatch.svg";
import Cta from "../components/cta";
import whitepaper from "../pdf/Whitepaper_3.0.pdf";
import dragonverse from "../images/dragonverse.svg";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Deflationary Dragons</title>
        <link rel="canonical" href="https://www.deflationarydragons.com/" />
      </Helmet>
      <Section
        padding="5rem 0"
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
                <TextBlock.Heading>Dragon Factions</TextBlock.Heading>
                <TextBlock.Text>
                  The Dragonverse NFT collections are composed of 8 Dragon
                  Factions with each faction consisting of 111 Gen-0 Dragons and
                  1111 Gen-1 Dragons, hence totaling an overall supply of 888
                  Gen-0 Dragons and 8888 Gen-1 Dragons. The 8 Dragon Factions
                  are: Fire, Water, Earth, Air, Dark, Celestial, Lightning, and
                  Cyborg. Factions serve to grow and expand community
                  involvement and engagement by playing a key role within the
                  community. Factions will compete amongst each other to conquer
                  territory and earn rewards in the Dragonverse. Learn more on
                  our project Whitepaper.
                </TextBlock.Text>
              </TextBlock>
            </Row.Col>
            <Row.Col size={6} sizeMd={12} dividedLg dividedXl divided>
              <TextBlock>
                <TextBlock.Heading>Dragon Ranks</TextBlock.Heading>
                <TextBlock.Text>
                  Within each Dragon Faction, there are Dragons with different
                  ranks. Dragon ranks affect rarity, act as different roles
                  within the community, and will have real implications in the
                  Dragonverse. Within the 111 Gen-0 Dragons in each faction,
                  there are: 1 Elder Dragon, 10 King Dragons, and 100 Warrior
                  Dragons. In Gen-1, there will be 4 new ranks with each faction
                  having: 1 Elder Child Dragon, 10 Princess Dragons, 100 Prince
                  Dragons, and 1000 Knight Dragons.
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
                <TextBlock.Heading>Gen-1: Stake-To-Hatch</TextBlock.Heading>
                <TextBlock.Text>
                  The Dragonverse Gen-1 Collection will be an initial NFT
                  collection of 8888 eggs which will then hatch/reveal into
                  uniquely designed second generation Dragons. Once minted, a
                  Gen-1 Egg must be staked for 8 days in order to “hatch” or
                  reveal into its true form of a Dragonverse Gen-1 Dragon.
                  Therefore, the collection as a whole will not reveal all at
                  once. Instead, eggs will reveal on an individual basis once
                  they have met the staking requirement. Eggs must hatch into a
                  Gen-1 Dragon in order to participate in the Dragonverse.
                </TextBlock.Text>
              </TextBlock>
              <img src={stake_to_hatch} style={{ width: "100%" }} />
            </Row.Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Section.Heading>The Dragonverse</Section.Heading>
          <TextBlock>
            <TextBlock.Heading>
              An all-in-one cooperative P2E gamified staking platform
            </TextBlock.Heading>
            <TextBlock.Text>
              The Dragonverse is an all-in-one cooperative play-to-earn gamified
              staking platform which incorporates everything we’ve built with
              our project up until this point. Players will need to hold and own
              either Gen-0 or Gen-1 NFTs in order to play and earn rewards in
              the game.
            </TextBlock.Text>
          </TextBlock>
          <TextBlock>
            <TextBlock.Heading>Game Overview</TextBlock.Heading>
            <TextBlock.Text>
              The Dragonverse functions as a map-based territory conquest
              cooperative strategy game, in which factions will compete to take
              control of the most territories on the Dragonverse Map by being
              the faction with the most Dragons staked in such territories. Each
              Dragon can be chosen to be staked in a specific territory by its
              owner, and factions will have to cooperate amongst themselves and
              strategically decide where and how they should allocate their
              distribution of staked Dragons on the map in order to control the
              best territories. Each individual territory will have distinct
              rewards for the faction that controls it which could come in the
              form of SOL, NFTs, whitelist spots, alpha, private group/discord
              invites, and other tools (depending on partnerships and sponsors).
            </TextBlock.Text>
          </TextBlock>
          <img src={dragonverse} />
        </Container>
      </Section>
      {/*<Section>
        <Container>
          <StakingTiers />
        </Container>
      </Section>
      <Section>
        <Container>
          <Section.Heading margin="0 0 6rem">Staking Options</Section.Heading>
          <Row>
            <Row.Col size={6} sizeMd={12}>
              <TextBlock
                textAlign="center"
                style={{ paddingTop: 0, paddingBottom: 0 }}
              >
                <TextBlock.Heading>Liquid Staking</TextBlock.Heading>
                <TextBlock.Text>
                  Holders can actively stake and un-stake at any time. No
                  penalty for unstaking. Tier will be determined by overall time
                  staked. However time staked will reset to 0 and the NFT will
                  revert to Tier 5 if listed on a secondary market or the NFT is
                  sent to a different holder wallet.
                  <br />
                  <br />
                  For example: Holder stakes for 7 days, unstakes for 2 days,
                  resumes staking for 7 days. Total time staked will be 7 + 7 =
                  14 days. On the 14th day of staking, the Dragon staked will
                  reach tier 4 and begin earning tier 4 rewards.
                </TextBlock.Text>
              </TextBlock>
            </Row.Col>
            <Row.Col size={6} sizeMd={12} dividedLg dividedXl divided>
              <TextBlock
                textAlign="center"
                style={{ paddingTop: 0, paddingBottom: 0 }}
              >
                <TextBlock.Heading>Traditional Staking</TextBlock.Heading>
                <TextBlock.Text>
                  Holders will choose to stake and lock up their NFT for 88 days
                  following the mint date. This action cannot be undone. Once
                  locked, the NFT will be held in our stake escrow wallet and
                  will be released and sent back to the original holder's wallet
                  88 days from mint on August 1st. While staked under this
                  method, the holder will still be able to access their NFT from
                  our staking platform and receive rewards earned by their
                  staked NFT. Once the NFT is sent back, the NFT will hold Tier
                  1 status forever, UNLESS it is listed on a secondary market or
                  changes wallets, in which it will revert back to Tier 5.
                  <br />
                  <br />
                  Traditional Stakers will immediately unlock tier access at the
                  time of staking. Note 1: The only way to access Tier 1 is to
                  traditional stake within 8 days of mint. Note 2: Past 8 days
                  of mint, a holder can still elect to opt-in to traditional
                  staking, which will result in immediate access to the highest
                  qualified tier, based on the time difference between August
                  1st (traditional stake end time) and time traditional stake
                  was elected.
                  <br />
                  <br />
                  For example: Holder chooses to lock up Dragon through
                  traditional staking within 8 days of mint. Dragon staked will
                  immediately reach tier 1 and begin earning tier 1 rewards.
                  <br />
                  <br />
                  Example 2: Holder chooses to lock up Dragon through
                  traditional staking on June 1st. This is 61 days from August
                  1st, which qualifies for the 60 day requirement for Tier 2.
                  Dragon staked will immediately reach tier 2 and begin earning
                  tier 2 rewards.
                </TextBlock.Text>
              </TextBlock>
            </Row.Col>
          </Row>
        </Container>
      </Section>*/}

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
                <TextBlock.Heading>
                  Everything you need to know
                </TextBlock.Heading>
                <TextBlock.Text>
                  <Cta title="Whitepaper" link={whitepaper}></Cta>
                </TextBlock.Text>
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
