import React from "react";
import {Button, Text, Stack, Box} from "@chakra-ui/react";

import Section from "../../../components/section/Section";

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <Section backgroundIsImage backgroundColor="white" dividerColor="white">
      <Stack align={"flex-start"} marginLeft={[10, 20, 30]} maxWidth={489} py={100} spacing={2}>
        <Text
          color={"white"}
          fontSize={{base: "xl", md: "lg"}}
          fontWeight={700}
          lineHeight={1}
          textShadow={"0px 0px 5px rgba(0, 0, 0, 0.5)"}
        >
          Con esperanza todo es posible
        </Text>
        <Stack direction={"row"} left="-20px" position="relative" spacing={2}>
          <Box
            _before={{
              content: "''",
              display: "block",
              width: "10px",
              height: "full",
              background: "primary.500",
            }}
          />
          <Text
            color={"white"}
            fontSize={{base: "5xl", md: "6xl"}}
            fontWeight={900}
            lineHeight={1.1}
            textShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}
          >
            Juntos, construyendo sonrisas
          </Text>
        </Stack>
        <Text
          color={"white"}
          fontSize={{base: "lg", md: "xl"}}
          fontWeight={600}
          lineHeight={1.5}
          textShadow={"0px 0px 5px rgba(0, 0, 0, 0.5)"}
        >
          Nuestro compromiso: un mundo más inclusivo para personas con discapacidades.
        </Text>
      </Stack>

      <Stack direction={"row"} marginLeft={[10, 20, 30]} paddingTop={20}>
        <Button paddingX={12} size="lg">
          Realiza tu Donacion
        </Button>
      </Stack>
    </Section>
  );
};

export default Hero;
