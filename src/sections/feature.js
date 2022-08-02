/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Marketplace from "assets/feature/marketplace.svg";
import Gift from "assets/feature/gift.svg";
import Award from "assets/feature/award.svg";

const data = [
  {
    id: 1,
    imgSrc: Marketplace,
    altText: "Marketplace",
    title: "Digital Stores",
    text: "We help you to make your buisness online with all digital tools required for your buisness.",
  },
  {
    id: 2,
    imgSrc: Gift,
    altText: "Gift",
    title: "Ultimate Develelopments",
    text: "We also maintains servers and other technical things for you, so you can grow your buisness with peace of mind.",
  },
  {
    id: 3,
    imgSrc: Award,
    altText: "Awards",
    title: "Building future with Web3.",
    text: "We also provide services for Web3 buisnesses, to help you to change the world.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }} id="feature">
      <Container>
        <SectionHeader title="Go Beyond unlimited features" description="" />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
    gridGap: [
      "40px",
      "45px",
      "45px 30px",
      null,
      "60px 30px",
      "50px 40px",
      null,
      "75px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
