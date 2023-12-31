import {Link, Stack, Text} from "@chakra-ui/react";
import {FiFacebook, FiInstagram} from "react-icons/fi";
import React from "react";

import FooterLink from "./FooterLink";
import FooterDivider from "./FooterDivider";

const Footer: React.FC = () => {
  return (
    <Stack spacing={0}>
      <FooterDivider />
      <Stack
        alignItems="end"
        backgroundColor="primary.400"
        direction="row"
        height="350px"
        justifyContent="space-between"
        mt={10}
        padding="20px 50px"
        paddingX={12}
      >
        <Text fontSize="lg" fontWeight={700} width="200px">
          ASOANGEL
        </Text>
        <Stack
          alignSelf="start"
          direction="column"
          fontSize="lg"
          fontWeight={700}
          spacing={7}
          textAlign="center"
        >
          <FooterLink href="/">Sobre Asoangel</FooterLink>
          <FooterLink href="/">Trabajo Trabajo</FooterLink>
          <FooterLink href="/">Nuestro Impacto</FooterLink>
          <FooterLink href="/">Apadrina una Sonrisa</FooterLink>
        </Stack>
        <Stack direction="row" gap="10px" justifyContent="end" width="200px">
          <Link isExternal href="https://www.facebook.com/Adopcanem">
            <FiFacebook size={24} />
          </Link>
          <Link isExternal href="https://www.instagram.com/adopcanem/?hl=es-la">
            <FiInstagram size={24} />
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
