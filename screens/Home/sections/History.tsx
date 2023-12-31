import React from "react";
import {Button, Badge, Text, VStack, Box, HStack, Grid, GridItem} from "@chakra-ui/react";
import Link from "next/link";

import {ArrowDownLeft, ArrowDownRight, HumanAndDogPulling, Paws} from "components/icons";

import Section from "../../../components/section/Section";

const History: React.FC = () => {
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
            CON TU AYUDA
          </Badge>
          <Text fontSize="5xl" fontWeight={900} textColor="#363636">
          TRABAJAMOS CON ENTUSIASMO Y ALEGRÍA PARA ASEGURAR QUE TODAS LAS PERSONAS CON DISCAPACIDAD PUEDAN CONSTRUIR UN MEJOR FUTURO.
          </Text>
          <Text maxWidth="4050" fontSize="3xl">
          Somos una asociación comprometida con el desarrollo de Guatemala, mejorando la vida de personas con discapacidad mediante la educación y la inclusión. En nuestro futuro ideal, todos tienen acceso a la educación y oportunidades, impulsados por valores como el respeto y la igualdad. Trabajamos con pasión para liderar el cambio y transformar Guatemala.
          </Text>
        </VStack>
        
        {/* Bottom */}
        <VStack paddingTop={50} spacing={6} width="full">
          <Button paddingX={12} size="lg">
            Ir a mercadopago
          </Button>
          <Link href="/">
            <Text cursor="pointer" fontSize="sm" fontWeight={800} textColor="primary.500">
              Prefiero hacer una transferencia
            </Text>
          </Link>
        </VStack>
      </VStack>
    </Section>
  );
};

export default History;
