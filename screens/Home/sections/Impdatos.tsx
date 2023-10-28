import React from "react";
import {Button, Badge, Text, VStack, Box, HStack, Grid, GridItem} from "@chakra-ui/react";
import Link from "next/link";

import {ArrowDownLeft, ArrowDownRight, HumanAndDogPulling, Paws} from "components/icons";

import Section from "../../../components/section/Section";

const Impdatos: React.FC = () => {
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
          En ASOANGEL a través de nuestra dedicación apasionada y llena de alegría, hemos logrado: <br />
          </Text><br />
        </VStack>

        <Box position="absolute" right={"-200px"} top={"-400px"}>
  <Paws />
</Box>
{/* Timeline */}
<Grid gap={2} templateColumns={"repeat(3, 1fr)"} width="full">
  <GridItem>
    <VStack h={"full"} justify={"center"} position="relative">
      <Text
        fontSize={{base: "sm", sm: "md"}}
        fontWeight={800}
        textAlign="center"
        textColor="#363636"
        width={"full"}
      >
        Comienza la organización <br />
        2015
      </Text>
      <Box bottom={"-30px"} position="absolute">
        <ArrowDownLeft />
      </Box>
    </VStack>
  </GridItem>
  <GridItem>
    <Text
      fontSize={{base: "xl", sm: "3xl", md: "7xl"}}
      fontWeight={800}
      lineHeight={"normal"}
      position={"relative"}
      textAlign={"center"}
      textColor="#363636"
    >
      +7000
    </Text>
    <Text
      fontSize={{base: "md", sm: "lg", md: "xl"}}
      fontWeight={800}
      textAlign={"center"}
      textColor="#363636"
    >
      Terapias <br />
      realizadas
    </Text>
  </GridItem>
  <GridItem>
    <VStack h={"full"} justify={"center"} position="relative">
      <Text
        fontSize={{base: "sm", sm: "md"}}
        fontWeight={800}
        textAlign="center"
        textColor="#363636"
      >
        Esperamos realizar +10000 terapias
        <br />
        2024
      </Text>
      <Box bottom={"-30px"} position="absolute">
        <ArrowDownRight />
      </Box>
    </VStack>
  </GridItem>
  <GridItem colSpan={3}>
    <VStack>
      <Box
        backgroundColor="rgba(253, 177, 69, 0.4)"
        borderRadius="xl"
        height="88px"
        minWidth={""}
        padding="15px"
        width="80%"
      >
        <HStack alignItems="flex-start" justifyContent="flex-start" spacing={0}>
          <Box backgroundColor="white" borderLeftRadius="xl" height="60px" width="50%" />
          <Box
            _before={{
              content: "''",
              display: "block",
              position: "relative",
              width: "8px",
              left: "-5px",
              height: "60px",
              background: "primary.500",
            }}
          />
        </HStack>
      </Box>
      <Box left={"50%"} position="absolute">
        <HumanAndDogPulling />
      </Box>
    </VStack>
  </GridItem>
  
</Grid>
<Box bottom={"-200px"} left={0} position="absolute">
  <Paws />
</Box>
<br />


<br />
      



        {/* Bottom */}
        <VStack paddingTop={50} spacing={6} width="full" >
          <Button paddingX={12} size="lg">
            Realiza tu Donación
          </Button>
          
        </VStack>
<br /> <br /> <br /> <br /> <br /> br
        <br />
      </VStack>
      <VStack spacing={2} textAlign="center" width="full">
          <Badge
            backgroundColor={"gray.300"}
            colorScheme="gray"
            fontSize="md"
            fontWeight={800}
            textColor="#363636"
          >
            CON ESPERANZA TODO ES POSIBLE
          </Badge>
          <br />
          <Text fontSize="5xl" fontWeight={900} textColor="#363636">
         
          Brindamos programas de salud y rehabilitación del mas alto nivel posible.  <br />
          </Text><br />
        </VStack>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsonrisasangelicales%2Fvideos%2F244487171882722%2F&show_text=false&width=560&t=0"
          width="1280"
          height="720"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>

        
        


    </Section>
    
  );
};



export default Impdatos;
