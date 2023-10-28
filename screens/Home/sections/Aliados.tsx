import React from "react";
import {Stack, Badge, Text, Image, Flex, VStack, Button, Link} from "@chakra-ui/react";
// @ts-ignore
import Carousel from "react-grid-carousel";
import {FaInstagram} from "react-icons/fa";

import Section from "components/section/Section";

export const Aliados: React.FC = () => {
  //replace with real images and text
  const sliderImages = [
    {
      image: "https://i.pinimg.com/736x/08/cd/e5/08cde5bbeea2bebeb3bfddea2bb40ced.jpg",
    },
    
    {
      image: "https://i.pinimg.com/originals/32/26/80/32268037db0c403160becf4bfc38cfd7.png",
    },
  
    {
      image: "https://i.pinimg.com/originals/49/72/5e/49725eb4e2dc00d743f8d9404c09bf40.png",
    },
    
    
    {
      image: "https://i.pinimg.com/originals/c6/31/a5/c631a5b93fb2c1f13b14cbde38d99d0b.png",
    },
    {
      image: "https://i.pinimg.com/originals/e9/01/14/e901141f1077937535d0fda5a471e83f.png",
    },
    
    
    {
      image: "https://i.pinimg.com/originals/e5/5b/7c/e55b7c661493054a00f2ac9b37799815.png",
    },
    {
      image: "https://i.pinimg.com/originals/d2/b9/c0/d2b9c0df035a158272e159a8c18f21ee.png",
    },
    {
      image: "https://i.pinimg.com/originals/5a/db/53/5adb531cd5e4d73f0a123a4272f6bbe2.png",
    },
  ];

  return (
    <Section backgroundColor="#E5E5E5" hasDivider={false}>
      {/* Main stack */}
      <VStack py={4} spacing={4} width="full">
        
        <Text fontSize="5xl" fontWeight={800} textAlign="center" textColor="black">
          Apoyanos en Nuestras Causas.
        </Text>
        

        <Stack
          paddingTop={{base: 10, md: 50}}
          width={{
            base: "full",
            md: "container.md",
            lg: "container.lg",
            xl: "container.xl",
          }}
        >
          <Carousel loop={true} cols={2} gap={50} rows={2}>
            {sliderImages.map((slide, idx) => {
              return (
                <Carousel.Item key={idx} width={90}>
                  {slide.image ? (
                    <Image
                      alt="Slide Photo"
                      borderRadius={25}
                      height="auto"
                      src={slide.image}
                      width="full"
                    />
                  ) : (
                    <Flex alignItems="center" height="200%">
                     
                    </Flex>
                  )}
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Stack>

        <Stack direction="row" paddingTop={{base: 10, md: 50}}>
          <Link
            isExternal
            _hover={{textDecoration: "none"}}
            href="https://www.instagram.com/adopcanem/"
            rel="noreferrer"
          >
            <Button gap={900} size="lg">
              
              APADRINA UNA SONRISA
            </Button>
          </Link>
        </Stack>
      </VStack>
    </Section>
  );
};

export default Aliados;
