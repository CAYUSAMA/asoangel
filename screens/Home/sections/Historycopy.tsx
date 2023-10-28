import React from "react";
import {Button, Badge, Text, VStack, Box, HStack, Grid, GridItem} from "@chakra-ui/react";
import Link from "next/link";

import {ArrowDownLeft, ArrowDownRight, HumanAndDogPulling, Paws} from "components/icons";

import Section from "../../../components/section/Section";

const Historycopy: React.FC = () => {
  return (
    <Section backgroundColor="white" hasDivider={false}>
      {/* Main stack */}
      <VStack py={4} spacing={10} width="full">
        {/* Top */}
        <VStack spacing={2} textAlign="center" width="full">
          <Badge
            backgroundColor={"gray.300"}
            colorScheme="gray"
            fontSize="md"
            fontWeight={800}
            textColor="#363636"
          >
            GRACIAS A TU AYUDA
          </Badge>
          <Text fontSize="5xl" fontWeight={900} textColor="#363636">
          Nos dedicamos con pasión y alegría a forjar un futuro lleno de brillo y oportunidades para las personas con discapacidad. <br />
          </Text><br />
        </VStack>

        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsonrisasangelicales%2Fvideos%2F685918296928455%2F&show_text=false&width=560&t=0"
          width="1280"
          height="720"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        


        {/* Bottom */}
        <VStack paddingTop={50} spacing={6} width="full">
          <Button paddingX={12} size="lg">
            CONOCE NUESTRO IMPACTO
          </Button>
          
        </VStack>
      </VStack>
    </Section>
  );
};

export default Historycopy;
