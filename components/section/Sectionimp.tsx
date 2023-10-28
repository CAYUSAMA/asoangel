import React from "react";
import {Box, Container, VStack} from "@chakra-ui/react";

import SectionDivider from "./SectionDivider";

interface SectionProps {
  children: React.ReactNode;
  /** Wether the background is an image or not. */
  backgroundIsImage?: boolean;
  /** Background image url. */
  backgroundImage?: string;
  /** Background color. */
  backgroundColor?: string;
  /** Wether section has a bottom divider or not. */
  hasDivider?: boolean;
  /** Background divider color */
  dividerColor?: string;
  /** Wether to add or not a suttle background gradient effect. */
  hasGradientEffect?: boolean;
}

const Sectionimp: React.FC<SectionProps> = (props) => {
  const {
    backgroundColor = "white",
    dividerColor = "black",
    hasDivider = true,
    backgroundIsImage = false,
    backgroundImage = "https://img.freepik.com/foto-gratis/rueda-movil-mano-primer-plano_23-2148778997.jpg?w=1380&t=st=1698343949~exp=1698344549~hmac=92498e83ebdd7fc34d857c52120746643c55b8514681051aa46ca7d2db434cdf",
    hasGradientEffect = false,
    children,
  } = props;

  return (
    <VStack height="auto" overflow="hidden" position="relative">
      <Box
        backgroundColor={backgroundColor}
        backgroundImage={backgroundIsImage ? `url(${backgroundImage})` : "none"}
        backgroundPosition={"center center"}
        backgroundSize={"cover"}
        height="100%"
        width="100%"
      >
        <Box
          bgGradient={hasGradientEffect ? "linear(to-r, blackAlpha.600, transparent)" : "none"}
          paddingX={{base: 4, md: 8}}
          paddingY={[20, 30, 40, 60, 150]}
        >
          <Container maxWidth="container.xl">
            {children}
            {hasDivider && <SectionDivider backgroundColor={dividerColor} />}
          </Container>
        </Box>
      </Box>
    </VStack>
  );
};

export default Sectionimp;
