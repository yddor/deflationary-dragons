import React from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import Section from "../components/section";
import Container from "../components/container";
import Nav from "../components/nav";
import mist from "../images/mist.svg";
import hero from "../images/hero.svg";
import TextBlock from "../components/textblock";
import StakingTiers from "../components/stakingtiers";
import Row from "../components/row";
import vegetation from "../images/vegetation.svg";
import hills from "../images/hills.svg";
import roadmap from "../images/roadmap.svg";

import fire_faction from "../images/fire_faction.png";
import water_faction from "../images/water_faction.png";
import earth_faction from "../images/earth_faction.png";
import air_faction from "../images/air_faction.png";
import celestial_faction from "../images/celestial_faction.png";
import dark_faction from "../images/dark_faction.png";
import lightning_faction from "../images/lightning_faction.png";
import cyborg_faction from "../images/cyborg_faction.png";

import water_dragon from "../images/water_dragon.png";

const WhitepaperPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Deflationary Dragons | Whitepaper</title>
        <link rel="canonical" href="https://www.deflationarydragons.com/lore" />
      </Helmet>
      <Section
        padding="5rem 0 0"
        minHeight="45.75rem"
        backgroundImage={`url(${mist}), url(${hero})`}
        backgroundSize="auto, auto 100%"
        backgroundPosition="center -2rem, center"
        backgroundRepeat="no-repeat, repeat"
      >
        <Container>
          <Nav />
          <Section.Heading margin="8rem 0 0">
            Deflationary Dragons
          </Section.Heading>
          <Section.Subheading margin="0">White paper v1.0</Section.Subheading>
        </Container>
      </Section>
      <Section>
        <Container>
          <TextBlock textAlign="center">
            <TextBlock.Heading>Introduction</TextBlock.Heading>
            <TextBlock.Text textAlign="justify">
              Deflationary Dragons is a NFT collection of 888 uniquely designed
              dragons that will be minted on the Solana Blockchain. Deflationary
              Dragons NFT seeks to differentiate itself from other projects by
              providing holders with several distinct and innovative features
              including: a deflationary token system, tier-based staking,
              collaborative breeding, and participation in concurrent story
              events tied to authentically written original lore.
            </TextBlock.Text>
          </TextBlock>
        </Container>
      </Section>
      <Section>
        <Container>
          <Section.Heading textAlign="left">Specifications</Section.Heading>
          <Row>
            <Row.Col size={9}>
              <TextBlock>
                <TextBlock.Heading>Deflationary Token System</TextBlock.Heading>
                <TextBlock.Text>
                  The Deflationary Dragons NFT collection will implement a
                  "Guaranteed Floor Price" (GFP) for each NFT in the collection
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
            <Row.Col size={3}>
              <img src={water_dragon} />
            </Row.Col>
          </Row>
          <Row>
            <Row.Col size={3}>
              <img
                src={fire_faction}
                style={{ width: "100%", imageRendering: "pixelated" }}
              />
            </Row.Col>
            <Row.Col size={9}>
              <TextBlock textAlign="right">
                <TextBlock.Heading>Guaranteed Floor Price</TextBlock.Heading>
                <TextBlock.Text>
                  If and when a Deflationary Dragon is listed on a secondary
                  market below that Dragon's Guaranteed Floor Price (specified
                  under Dragon Ranks), it will automatically be bought back.
                  This GFP system aims to serve 3 main functions: 1. A
                  protective safety net to holders, guaranteeing that the
                  project can never go to 0 2. A method of immediate liquidity
                  should a holder ever need to instantly sell 3. A means to
                  create a deflationary token system given the consequences of a
                  subsequent failed auction. Beginning at the time a
                  Deflationary Dragon is repurchased, there will be a 24 hour
                  auction period open only to holders of Dragons in the Dragon
                  at auction's Faction. This will be referred to as the "last
                  chance auction" and will have a starting bid at the Dragon's
                  GFP. If no bids are received by the time the auction expires,
                  there will be an additional 24 hour "final chance auction"
                  open to holders of all Deflationary Dragon Factions with the
                  same starting bid. If no bids are received by the time the
                  auction expires, the Deflationary Dragon NFT will be burned
                  permanently from the collection, and thus the overall supply
                  of Deflationary Dragons will be decreased.
                </TextBlock.Text>
              </TextBlock>
            </Row.Col>
          </Row>
          <Row>
            <Row.Col size={7} sizeLg={8} sizeMd={12}>
              <TextBlock>
                <TextBlock.Heading>Dragon Factions</TextBlock.Heading>
                <TextBlock.Text>
                  The Deflationary Dragons NFT collection will be composed of 8
                  Dragon Factions with each faction consisting of 111 Dragons,
                  hence totaling an overall supply of 888 Dragons. The 8 Dragon
                  Factions are: Fire, Water, Earth, Air, Dark, Celestial,
                  Lightning, and Cyborg. Factions will serve to grow and expand
                  community involvement and engagement by playing a key role
                  within the community. There will be private faction discord
                  channels for members of each faction. There will also be
                  strong incentives for faction members to collaborate with one
                  another as there will be heavy competition between factions.
                  The strength or power of a faction will be determined by the
                  total number of Dragons actively being staked (see Tier-based
                  Staking) within a faction. Aside from a continuous power
                  ranking list that will reward the top ranking factions, power
                  will also be used to determine the outcomes of wars between
                  factions (see Story Events / Original Lore). Faction members
                  will also be able to participate in voting for faction
                  decisions on story events (see Story Events / Original Lore).
                </TextBlock.Text>
              </TextBlock>
            </Row.Col>
            <Row.Col
              size={5}
              sizeLg={4}
              sizeMd={12}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Row style={{ margin: "0 -1rem" }}>
                <Row.Col
                  size={3}
                  sizeXl={4}
                  sizeLg={6}
                  sizeMd={3}
                  sizeXs={6}
                  style={{ padding: "0 1rem", marginTop: "1rem" }}
                >
                  <img
                    src={fire_faction}
                    style={{
                      display: "block",
                      width: "100%",
                      imageRendering: "pixelated",
                    }}
                  />
                </Row.Col>
                <Row.Col
                  size={3}
                  sizeXl={4}
                  sizeLg={6}
                  sizeMd={3}
                  sizeXs={6}
                  style={{ padding: "0 1rem", marginTop: "1rem" }}
                >
                  <img
                    src={water_faction}
                    style={{
                      display: "block",
                      width: "100%",
                      imageRendering: "pixelated",
                    }}
                  />
                </Row.Col>
                <Row.Col
                  size={3}
                  sizeXl={4}
                  sizeLg={6}
                  sizeMd={3}
                  sizeXs={6}
                  style={{ padding: "0 1rem", marginTop: "1rem" }}
                >
                  <img
                    src={earth_faction}
                    style={{
                      display: "block",
                      width: "100%",
                      imageRendering: "pixelated",
                    }}
                  />
                </Row.Col>
                <Row.Col
                  size={3}
                  sizeXl={4}
                  sizeLg={6}
                  sizeMd={3}
                  sizeXs={6}
                  style={{ padding: "0 1rem", marginTop: "1rem" }}
                >
                  <img
                    src={air_faction}
                    style={{
                      display: "block",
                      width: "100%",
                      imageRendering: "pixelated",
                    }}
                  />
                </Row.Col>
                <Row.Col
                  size={3}
                  sizeXl={4}
                  sizeLg={6}
                  sizeMd={3}
                  sizeXs={6}
                  style={{ padding: "0 1rem", marginTop: "1rem" }}
                >
                  <img
                    src={celestial_faction}
                    style={{
                      display: "block",
                      width: "100%",
                      imageRendering: "pixelated",
                    }}
                  />
                </Row.Col>
                <Row.Col
                  size={3}
                  sizeXl={4}
                  sizeLg={6}
                  sizeMd={3}
                  sizeXs={6}
                  style={{ padding: "0 1rem", marginTop: "1rem" }}
                >
                  <img
                    src={dark_faction}
                    style={{
                      display: "block",
                      width: "100%",
                      imageRendering: "pixelated",
                    }}
                  />
                </Row.Col>
                <Row.Col
                  size={3}
                  sizeXl={4}
                  sizeLg={6}
                  sizeMd={3}
                  sizeXs={6}
                  style={{ padding: "0 1rem", marginTop: "1rem" }}
                >
                  <img
                    src={lightning_faction}
                    style={{
                      display: "block",
                      width: "100%",
                      imageRendering: "pixelated",
                    }}
                  />
                </Row.Col>
                <Row.Col
                  size={3}
                  sizeXl={4}
                  sizeLg={6}
                  sizeMd={3}
                  sizeXs={6}
                  style={{ padding: "0 1rem", marginTop: "1rem" }}
                >
                  <img
                    src={cyborg_faction}
                    style={{
                      display: "block",
                      width: "100%",
                      imageRendering: "pixelated",
                    }}
                  />
                </Row.Col>
              </Row>
            </Row.Col>
          </Row>
          <Row>
            <Row.Col
              size={3}
              sizeMd={4}
              sizeXs={4}
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src={air_faction}
                style={{ width: "100%", imageRendering: "pixelated" }}
              />
            </Row.Col>
            <Row.Col size={9} sizeMd={8} sizeXs={12}>
              <TextBlock textAlign="right">
                <TextBlock.Heading>Dragon Ranks</TextBlock.Heading>
                <TextBlock.Text>
                  Within each Dragon Faction, there will be Dragons with
                  different ranks. The guaranteed floor price of a Dragon will
                  be directly based on rank. Within the 111 Dragons in each
                  faction there will be:
                  <br />
                  1 Elder Dragon with a 8 SOL guaranteed floor price
                  <br />
                  10 King Dragons with a 1.8 SOL guaranteed floor price
                  <br />
                  100 Warrior Dragons with a 0.8 SOL guaranteed floor price
                  <br />
                  In total this will make 888 Dragons with the following rank
                  distribution:
                  <br />8 x Elder Dragons (1 per faction)
                  <br />
                  80 x King Dragons (10 per faction)
                  <br />
                  800 x Warrior Dragons (100 per faction)
                  <br />
                  Aside from having a higher GFP, Elder Dragons and King Dragons
                  will also have boosted staking rewards, better breeding
                  results (see Breeding), a more significant role in story
                  events, and they will act as leaders within their factions.
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
            <Row.Col size={6} sizeMd={12}>
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
          <Row>
            <Row.Col size={9} sizeMd={10} sizeXs={11}>
              <TextBlock>
                <TextBlock.Heading>Breeding</TextBlock.Heading>
                <TextBlock.Text>
                  Deflationary Dragon will have a male/female trait. Holders of
                  both a male and female Dragon will be able to breed them and
                  earn a dragon egg, which effectively acts as a free pre-mint
                  of the Gen-1 NFT Collection (see Gen-1 NFT Collection).
                  Holders of only one Dragon will be able to participate in
                  collaborative breeding by partnering with the holder of a
                  Dragon with the opposite sex. A collaborative breeding
                  matchmaking system will be provided. Deflationary Dragons in
                  higher tiers earned from staking that are used for breeding
                  will result in eggs with a higher chance of hatching rarer
                  baby dragons. There will be surprises for eggs that are
                  produced by breeding elder and king dragons. Yet to be
                  announced.
                  <br />
                  More details on breeding will come later.
                </TextBlock.Text>
              </TextBlock>
            </Row.Col>
          </Row>
          <Row>
            <Row.Col size={3} sizeMd={2} sizeXs={1}></Row.Col>
            <Row.Col size={9} sizeMd={10} sizeXs={11}>
              <TextBlock textAlign="right">
                <TextBlock.Heading>Gen-1 NFT Collection</TextBlock.Heading>
                <TextBlock.Text>
                  The Gen-1 NFT Collection will serve as the next generation
                  collection following the original Gen-0 NFT Deflationary
                  Dragons Collection. The Gen-1 NFT Collection will consist of
                  an initial 8888 total supply of Dragon Eggs. This collection
                  will implement a similar GFP system as the Gen-0 Collection.
                  Eggs can be incubated (staked) in order to hatch into the true
                  Gen-1 NFT Collection of Baby Dragons. Neglected Eggs will be
                  permanently burned. There will be early access to the Gen-1
                  NFT Collection via free pre-minting of eggs obtained by
                  breeding Gen-0 Dragon NFTs. The rest of the 8888 that are not
                  pre-minted through breeding will be sold via a whitelist
                  first, then public mint at a price of .8 SOL. Whitelists and
                  free mints to the Gen-1 NFT Collection can be obtained through
                  holding and staking Gen-0 Dragons NFTs, as well as through
                  future giveaways and promotional events. Holders and Stakers
                  of the Gen-0 NFT Collection will be rewarded with a share of
                  revenue from the Gen-1 NFT Collection mint and secondary sale
                  royalties. Dragon Eggs Minted → Incubation/Staking Period →
                  Hatching/Burning Event → Gen-1 NFT Baby Dragon Collection
                </TextBlock.Text>
              </TextBlock>
            </Row.Col>
          </Row>
          <TextBlock>
            <TextBlock.Heading>Story Events / Original Lore</TextBlock.Heading>
            <TextBlock.Text>
              The Deflationary Dragon NFT Collection comes with authentic lore
              and concurrent stories written by The Founding Dragon. As time
              passes, new “chapters” of stories about the universe and Dragons
              will be released. These story events will involve participation
              from holders such as through voting on faction decisions that will
              affect the storyline. Integration of events in stories may have
              significant impacts on the collection itself.
              <br />
              <br />
              Story Event Example Scenario: “The Dark Dragon Faction is seeking
              to wage war on the Celestial Dragon Faction and plunder their
              resources.” Dark Dragon Faction Holders will be able to vote yes
              or no to war. All other Dragon Faction Holders will be able to
              vote to support/form an alliance with Dark Faction OR Celestial
              Faction / OR stay neutral.
              <br />
              Results of vote: Dark Faction votes in favor of war. Fire and
              Cyborg Factions vote to ally with Dark Faction. Air and Lightning
              Factions vote to ally with Celestial Faction. Earth and Water
              Factions vote to remain neutral.
              <br />
              Outcome of war will be decided by the “power” of the factions
              involved. Power is determined by the amount of dragons each
              faction has staked. Dark, Fire, and Cyborg Factions at time of war
              have a combined total of 250 staked dragons. Air, Lightning, and
              Celestial Factions at the time of war have a combined total of 210
              staked dragons. Dark, Fire, and Cyborg Factions win the war. For
              the next week, staked Dark, Fire, and Cyborg Dragons will receive
              boosted staking rewards while staked Air, Lightning, and Celestial
              Dragons will receive proportionally reduced staking rewards. An
              Elder Dragon vote will have the weight of 10 votes, a King Dragon
              vote will have the weight of 5 votes, and a Warrior Dragon will
              have a singular vote to give. Elder Dragons will also be able to
              suggest and initiate these types of story events. An Elder Dragon
              initiated event can be vetoed by a majority vote of the Elder
              faction's King Dragons.
            </TextBlock.Text>
          </TextBlock>
          <Row alignCenter>
            <Row.Col size={8} sizeMd={12}>
              <TextBlock>
                <TextBlock.Heading>Recap of Utility</TextBlock.Heading>
                <TextBlock.Text>
                  The following is a full list of utilities which will be
                  captured by future holders of Deflationary Dragon NFTs beyond
                  just the ownership of the art and NFT itself:
                  <br />
                  — Access to private holder-only and faction-only discord
                  channels in server
                  <br />
                  — Access to immediate liquidity at GFP if one is desperate to
                  sell
                  <br />
                  — Revenue share of royalties from sales in secondary market
                  <br />
                  — Revenue share of mint and royalties from future Gen-1
                  Collection and any other future collections
                  <br />
                  — Ability to stake the Dragon NFT for an increased share of
                  the above revenue streams proportional to how long one is
                  staking for. Longer stake = larger percentage share of
                  revenues
                  <br />
                  — Those who stake their Dragon NFT will also earn rewards in
                  the form of WL tokens and FREE mints for the future Gen-1
                  Collection. Quantity will be determined by how long one has
                  been staking for
                  <br />
                  — Ability to breed their Dragon NFT which will result in a
                  free mint of the Gen-1 Collection
                  <br />— Lore Participation. Ability to participate in story
                  events, vote on faction decisions, etc. (More detail on this
                  to come)
                </TextBlock.Text>
              </TextBlock>
            </Row.Col>
            <Row.Col size={4} sizeMd={6} sizeXs={8}>
              <img
                src={lightning_faction}
                style={{ width: "100%", imageRendering: "pixelated" }}
              />
            </Row.Col>
          </Row>
          <TextBlock textAlign="center">
            <TextBlock.Heading>Royalties</TextBlock.Heading>
            <TextBlock.Text textAlign="justify">
              Both the Gen-0 and Gen-1 NFT Collections will have an 8% royalty
              on secondary sales. This relatively high royalty fee is intended
              to discourage flippers and further incentivize holding. This rate
              will also reward and be beneficial to holders and stakers who will
              be earning a large share of all royalties
            </TextBlock.Text>
          </TextBlock>
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
    </>
  );
};

export default WhitepaperPage;
