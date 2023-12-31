import {Badge, Button, Stack, Text, Link} from "@chakra-ui/react";

import Section from "../../../components/section/Section";

const Transit: React.FC = () => {
  return (
    <Section
      backgroundIsImage
      backgroundColor="gray.200"
      backgroundImage="https://scontent.fgua2-2.fna.fbcdn.net/v/t1.6435-9/72045860_678127392691587_5259987859762315264_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=4dc865&_nc_ohc=HbwXWrvS7gYAX_XtPz3&_nc_ht=scontent.fgua2-2.fna&oh=00_AfBl8iOCTRaosLGm90mT4gzVhqzRCzWXYmxykyiiPFVKjA&oe=65512A89"
      dividerColor="white"
    >
      <Stack
        alignItems="center"
        backgroundColor="white"
        borderRadius="xl"
        marginLeft="auto"
        maxWidth={640}
        padding={12}
        spacing={6}
        textAlign="center"
      >
       
        <Text fontSize="6xl" fontWeight={800}>
          NUESTRA VISIÓN
        </Text>
        <Text fontSize="2xl">
        Somos una asociación comprometida con el desarrollo integral y la rehabilitación de personas con discapacidad. Promovemos la inclusión y la calidad de vida, guiados por valores como el amor, el servicio, la empatía, el respeto y la igualdad.
        </Text>
        <Link
          isExternal
          _hover={{textDecoration: "none"}}
          href="https://docs.google.com/forms/d/e/1FAIpQLSf197Ctn6rxvqPUrFH1gqfsMf5JfotGbHnENR2IRbTqNI7-rA/viewform"
          rel="noreferrer"
        >
          
        </Link>
      </Stack>
    </Section>
  );
};

export default Transit;
