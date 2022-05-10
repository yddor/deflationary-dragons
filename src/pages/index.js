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
                  The Deflationary Dragons NFT collection implements a
                  “Guaranteed Floor Price” (GFP) for each NFT in the collection
                  by providing a direct sales channel for holders to sell us
                  their NFT at the GFP (available in our Discord). NFTs which
                  are repurchased will then be put up to a “last chance auction”
                  with the starting bid at GFP and open to holders only. If the
                  auction ends with zero bids, the NFT will be permanently
                  burned, and thus the overall supply of the collection will
                  decrease, hence creating a deflationary token system. token
                  system.
                </TextBlock.Text>
              </TextBlock>
            </Row.Col>
            <Row.Col size={6} sizeMd={12} dividedLg dividedXl divided>
              <TextBlock>
                <TextBlock.Heading>Dragon Factions</TextBlock.Heading>
                <TextBlock.Text>
                  The Deflationary Dragons NFT collection is composed of 8
                  Dragon Factions with each faction consisting of 111 Dragons,
                  hence totaling an overall supply of 888 Dragons. The 8 Dragon
                  Factions are: Fire, Water, Earth, Air, Dark, Celestial,
                  Lightning, and Cyborg. Factions serve to grow and expand
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
                  Within each Dragon Faction, there are Dragons with different
                  ranks. The guaranteed floor price of a Dragon is directly
                  based on rank. Within the 111 Dragons in each faction there
                  are:
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
                  also have boosted staking rewards, better breeding results, a
                  more significant role in story events, and they act as leaders
                  within their factions.
                </TextBlock.Text>
              </TextBlock>
            </Row.Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <TextBlock textAlign="center">
            <TextBlock.Heading>Tier-Based Staking</TextBlock.Heading>
            <TextBlock.Text>
              Deflationary Dragon NFT holders have the option to stake their
              Dragon NFTs in exchange for rewards. Unlike other projects which
              reward staking with a separate native project token with little to
              no utility outside of the project, Deflationary Dragon NFT staking
              is rewarded directly via airdropped SOL as well as with additional
              rewards in the form of whitelist tokens and free mints for the
              future Gen-1 Collection.
              <br />
              <br />
              Deflationary Dragon NFT Holders are categorized into 5 Tiers based
              on staking method and time staked. Staking rewards vary depending
              on tier, with the highest tier earning the most rewards.
              Deflationary Dragon staking rewards include: a percentage share of
              royalties from secondary sales of the Deflationary Dragon Gen-0
              NFT collection, a percentage share of mint and secondary sale
              royalties from the future Gen-1 NFT Collection, and whitelist
              tokens/free mints for the Gen-1 NFT Collection.
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
      </Section>

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
