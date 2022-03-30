import React from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import Section from "../components/section";
import Container from "../components/container";
import Nav from "../components/nav";
import mist from "../images/mist.svg";
import hero from "../images/hero.svg";
import TextBlock from "../components/textblock";
import Footer from "../components/footer";
import forest_hills from "../images/forest_hills.svg";

const LorePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Deflationary Dragons | Lore</title>
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
          <Section.Heading margin="8rem 0 0">Lore</Section.Heading>
        </Container>
      </Section>
      <Section>
        <Container>
          <TextBlock textAlign="center">
            <TextBlock.Text>
              In the beginning, there was nothing… nothing but the silence of an
              infinite darkness. Abruptly, from the depths of such darkness,
              sparked an energy, an energy so violent and so profound, perhaps
              charged by an innate will to be free; to break apart the bounds of
              such chains which had silenced its voice. An energy fueled by
              vigor and rage. An untamed energy. Once broken of its bounds, this
              energy began to flood what became to be known as the comprehensive
              universe. This energy which comprised the universe, however, was
              still untamed. For untold eons, the universe was constantly at
              odds with itself, existing in constant disarray and conflict,
              filled with unfound vitality and existing without purpose.
              Instinctively, the energy began to become attracted to itself,
              perhaps longing for a sense of belonging in its lonely existence.
              So the universe's energy began to manifest, congregating together
              until it had amassed into a single condensed point. It was at this
              point that the universe's energy began to take shape, molding into
              the first being, the “Founding Dragon”.
            </TextBlock.Text>
            <TextBlock.Text>
              When the Founding Dragon came into existence, it had inherited the
              state of disarray and confusion the energy of the universe had
              before it. But unlike the thoughtless energy before it, the
              Founding Dragon found itself an intention… a purpose. It began
              sorting the energy from which it was created, taming the unruly
              power and organizing it into coherent forms of matter. Through
              this process, the Founding Dragon's figure began to take shape—the
              element of fire forming the first being's stomach, the air
              becoming its wings, water its blood, lightning providing it a
              source of energy, nurturing earth embodying in the formation of
              its feet, precious metals forming into bones, darkness forming its
              eyes, and light creating its heart.
            </TextBlock.Text>
            <TextBlock.Text>
              Taming the last of the energy within itself, the Founding Dragon
              found itself at peace. Its newly formed body, created through the
              process of separating the individual elements of energy apart, was
              finally at peace. Finishing the monumental task, the Founding
              Dragon began to rest.
            </TextBlock.Text>
            <TextBlock.Text>
              But rest peacefully, the Founding Dragon could not. For when it
              realized it had completed its purpose, it could not sleep
              peacefully. The Founding Dragon's restlessness tore itself apart,
              ending its existence. But the Founding Dragon's life work was not
              in vain, for the 8 elements the Founding Dragon tirelessly tamed
              had remained. The body of the Founding Dragon decayed, forming the
              world in which we exist. While the Founding Dragon's bones formed
              the core of the world and its mountains, its stomach slipped
              between the bones as they formed the earth, creating magma and
              fire below our surface. Next, the dragon's feet fell, its soles
              trampling the earth, softening it and giving life to plants. Next,
              the Founding Dragon's blood spilled from its body into every
              crevice and crack, forming oceans, lakes, and rivers. The Founding
              Dragon's last act was wrapping its wings around itself, creating
              the atmosphere, and in its dying breath, created the winds which
              blow and feed life. With the Founding Dragon now passed, the dark
              and light within its eyes and heart dissipated into the sky,
              forming the day and night.
            </TextBlock.Text>
            <TextBlock.Text>
              But not all of the Founding Dragon's energy became the earth. In
              its passing, some of the Founding Dragon's energy slipped out of
              its body, remaining separate by element but pure in form. Like the
              untamed energy of the universe before it, the remaining energy of
              the tamed elements condensed into a new race of 8 beings: the
              Elder Dragons. Like nothing before them, the Elders too felt
              lonely in the lands from which they resided and claimed. Thus,
              they too began to create life from the world, shaping their
              surrounding elements to create beings in their image. The first
              children the Elders created were a race of dragons known as the
              Kings. In the creation of the Kings, the Elders noticed the sizes
              of their domains began to diminish from their birth and creation.
              But worrying their King children would feel lonely themselves, the
              Elders decided to continue creating. They built their Kings a new
              race of Warriors to accompany them, to exist as their companions
              and servants.
            </TextBlock.Text>
            <TextBlock.Text>
              Even as the Elders ran out of primordial elemental material to
              create more dragons, the Elders continued creating, designing new
              life forms out of their elemental substance. It was only until
              these races and dragons came into contact with beings born from
              other elements that they began to conceptualize the faction from
              which they belonged. Thus, this is how our world came to be…
            </TextBlock.Text>
          </TextBlock>
        </Container>
      </Section>
      <Section
        padding="12rem 0 0"
        minHeight="50rem"
        backgroundImage={`url(${forest_hills})`}
        backgroundSize="auto 100%"
        backgroundPosition="center"
        flex
        column
        alignContentBottom
      >
        <Container>
          <Footer />
        </Container>
      </Section>
    </>
  );
};

export default LorePage;
