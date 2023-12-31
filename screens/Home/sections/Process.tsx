import React from "react";
import {Text, GridItem, Stack, Box, SimpleGrid} from "@chakra-ui/react";

import Section from "components/section/Section";

import ProcessSectionCard from "../../../components/cards/ProcessSectionCard";
import {ProcessCardType} from "../../../types/adopcanem.types";

const CARDS: ProcessCardType[] = [
  {
    title: 1,
    description: "Evaluacion de Necesidades",
    thumbnail:
      "https://images.ctfassets.net/p0qf7j048i0q/D7EABCA75EE2445FABB0B5462715917D/be0d499674d53f118580f7800657cbbb/G1008271082.jpg",
  },
  {
    title: 2,
    description: "Acceso a Servicios",
    thumbnail:
      "https://static-cse.canva.com/blob/599298/AulaInclusiva.jpg",
  },
  {
    title: 3,
    description: "Apoyo Continuo",
    thumbnail:
      "https://www.aulamejor.com/wp-content/uploads/2022/11/Educacion-Especial.png",
  },
  {
    title: 4,
    description: "Impacto Duradero",
    thumbnail:
      "https://peritojudicial.com/content/images/2021/02/Educacion-Especial.jpg",
  },
];

const Process: React.FC = () => {
  const generateTopOffset = (index: number): string => {
    let offset = "0px";

    if (index % 2 === 0) {
      offset = "-30px";
    } else {
      offset = "30px";
    }

    return offset;
  };

  return (
    <Section backgroundColor="#F8F3E3" hasDivider={false}>
      <Stack direction="column" spacing={10}>
        {/* Cabecera del bloque */}
        <Stack
          alignContent={["center", null, null, "space-between"]}
          direction={["column", null, null, "row"]}
          display="flex"
          justifyContent={["center", null, null, "space-between"]}
          px={[2, 4, 4, 4, 10]}
          spacing={10}
        >
          <Stack>
            <Box
              bg="#E5E0D2"
              borderRadius="30px"
              fontSize={20}
              fontWeight="bold"
              p={2}
              textAlign="center"
              w="200px"
            >
              Brindamos
            </Box>
            <Text
              fontSize={["48px", null, null, "54px"]}
              fontWeight={900}
              lineHeight={1.125}
              pt={6}
            >
              Con Empatia y <p></p>
              Corazon comprometido.
            </Text>
          </Stack>
          <Stack alignItems="center" justifyContent="center">
            <Text fontSize="20px" fontWeight="semibold" maxWidth="700px">
             Asumimos un acto de empatía y un compromiso personal. Es importante estar dispuesto y capacitado para hacerlo, ya que cada apoyo que brindamos marca la diferencia en sus vidas..
            </Text>
          </Stack>
        </Stack>
        {/* Imagenes */}
        <SimpleGrid
          columns={[1, 1, 2, 2, 4]}
          gap={[4, null, 4]}
          justifyItems="center"
          py={10}
          templateRows="auto"
        >
          {CARDS.map((card, index) => (
            <GridItem key={index}>
              <ProcessSectionCard
                description={card.description}
                thumbnail={card.thumbnail}
                title={card.title}
                topOffset={generateTopOffset(index)}
              />
            </GridItem>
          ))}
        </SimpleGrid>
      </Stack>
    </Section>
  );
};

export default Process;
