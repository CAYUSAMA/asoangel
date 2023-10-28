import React from "react";
import {Stack, Badge, Text, Image, Flex, VStack, Button, Link} from "@chakra-ui/react";
// @ts-ignore
import Carousel from "react-grid-carousel";
import {FaInstagram} from "react-icons/fa";

import Section from "components/section/Section";

export const Team: React.FC = () => {
  //replace with real images and text
  const sliderImages = [
    {
      image: "https://i.pinimg.com/originals/35/f9/4a/35f94a392eddf8abba1fd4dee03cb9b0.png",
    },
    
    {
      image: "https://i.pinimg.com/originals/99/bd/48/99bd48843dae275bc2daf98535982cb7.png",
    },
  
    {
      image: "https://i.pinimg.com/originals/19/64/a3/1964a37ae253972bc7b478159ac5a64e.png",
    },
    
    
    {
      image: "https://i.pinimg.com/originals/d1/f9/ef/d1f9ef4af5232fbaef3a14a68b6b6fbf.png",
    },
    {
      image: "https://i.pinimg.com/originals/e1/e9/62/e1e962b2d636d6bf00ec6c5a3ea981f3.png",
    },
    
    
    {
      image: "https://i.pinimg.com/originals/bb/28/74/bb2874c7848ef377a4b6bcacc9783635.png",
    },
  ];

  return (
    <Section backgroundColor="WHITE" hasDivider={false}>
      {/* Main stack */}
      <VStack py={4} spacing={4} width="full">
        
        <Text fontSize="5xl"  fontWeight={800} textAlign="center" textColor="black">
          CONOCE NUESTRO EQUIPO
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
          <Carousel loop={true} cols={3} gap={50} rows={1}>
            {sliderImages.map((slide, idx) => {
              return (
                <Carousel.Item key={idx} width={40}>
                  {slide.image ? (
                    <Image
                      alt="Slide Photo"
                      borderRadius={25}
                      height="auto"
                      src={slide.image}
                      width="full"
                    />
                  ) : (
                    <Flex alignItems="center" height="100%">
                     
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

export default Team;
