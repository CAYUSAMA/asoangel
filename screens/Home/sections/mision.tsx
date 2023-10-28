import {Badge, Button, Stack, Text, Link} from "@chakra-ui/react";

import Section from "../../../components/section/Section";

const Mision: React.FC = () => {
  return (
    <Section
      backgroundIsImage
      backgroundColor="gray.200"
      backgroundImage="https://scontent.fgua2-2.fna.fbcdn.net/v/t39.30808-6/256250221_341393924458477_3315538120872533608_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GSA5Jzj9lTYAX9QYvZk&_nc_ht=scontent.fgua2-2.fna&oh=00_AfDt-nuIOc4xwY0ark3TGdh_UwM7gjz2jn29vVCX1QEHAA&oe=65408635"
      dividerColor="transparent"
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
          NUESTRA MISIÓN
        </Text>
        <Text fontSize="2xl">
        Promover el bienestar integral de personas con discapacidad, enfocada en igualdad de oportunidades y desarrollo
        
          
        </Text>
        <Link
          isExternal
          _hover={{textDecoration: "none"}}
          href="https://docs.google.com/forms/d/e/1FAIpQLSf197Ctn6rxvqPUrFH1gqfsMf5JfotGbHnENR2IRbTqNI7-rA/viewform"
          rel="noreferrer"
        >
          <Button colorScheme="primary" size="lg">
            ¿COMO LO HACEMOS?
          </Button>
        </Link>
      </Stack>
    </Section>
  );
};

export default Mision;
