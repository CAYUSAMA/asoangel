import React from "react";
import {Button, Text, Stack, Box} from "@chakra-ui/react";

import Section from "../../../components/section/Sectionimp";

interface Props {}

const Heroimp: React.FC<Props> = () => {
  return (
    <Section backgroundIsImage backgroundColor="white" dividerColor="white">
      <Stack align={"flex-start"} marginLeft={[10, 20, 30]} maxWidth={489} py={100} spacing={2}>
       
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
            fontSize={{base: "6xl", md: "7xl"}}
            fontWeight={900}
            lineHeight={1.1}
            textShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}
          >
            NUESTRO IMPACTO
          </Text>
        </Stack>
        <Text
          color={"white"}
          fontSize={{base: "lg", md: "xl"}}
          fontWeight={600}
          lineHeight={1.5}
          textShadow={"0px 0px 5px rgba(0, 0, 0, 0.5)"}
        >
          Transformamos desafíos en posibilidades: juntos, un futuro inclusivo y brillante.
        </Text>
      </Stack>

      <Stack direction={"row"} marginLeft={[10, 20, 30]} paddingTop={20}>
        <Button paddingX={12} size="lg">
          Apadrina una Sonrisa
        </Button>
      </Stack>
    </Section>
  );
};

export default Heroimp;
