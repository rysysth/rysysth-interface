/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import Image from "components/image";

import SupportTeam from "assets/images/support-thumb.png";

export default function Support() {
  return (
    <section sx={{ variant: "section.support" }} id="support">
      <Container>
        <SectionHeader
          title="Meet our  team who always work hardly behind the scenes"
          description="A team of talented developers and designers helping you to create your ideas into reality."
        />

        <Box sx={styles.thumbWrapper}>
          <Image
            src={SupportTeam}
            alt="Support Team"
            width="992"
            height="531"
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  thumbWrapper: {
    display: "flex",
    justifyContent: "center",
    img: {
      height: [180, "auto"],
    },
  },
};
