import {Box, Grid, Text, GridItem, useBreakpointValue} from "@chakra-ui/react";
import React from "react";

import Section from "components/section/Section";

const FamilySection: React.FC = () => {
  const display = useBreakpointValue({base: "none", md: "block"});
  const colspan = useBreakpointValue({base: 1, md: 2});

  return (
    <Section backgroundColor="#F8F3E3" dividerColor="#E5E5E5">
      <Grid
        gap={3}
        overflow="hidden"
        position="relative"
        py={[5, 10]}
        templateColumns={{base: "0 repeat(4, 1fr) 0", md: "repeat(6, 1fr)"}}
        templateRows="repeat(3, 1fr)"
      >
        <GridItem
          backgroundImage="url(https://scontent.fgua2-2.fna.fbcdn.net/v/t39.30808-6/320387500_676974047230123_5868974613682344451_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=GT37T48a-9AAX8_URSc&_nc_ht=scontent.fgua2-2.fna&oh=00_AfBo5nelsNhA0R2SjQ_MSUa2-hld7S0N1VcOqn0IvkM1uQ&oe=6527DFF3)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          display={display}
          minHeight={50}
        />
        <GridItem
          backgroundImage="url(https://scontent.fgua2-1.fna.fbcdn.net/v/t39.30808-6/318123799_600859331845267_8344745984352021190_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_ohc=-mYywPfcoOwAX-uI_MV&_nc_ht=scontent.fgua2-1.fna&oh=00_AfBhxXbmoLv8on21tKaRjXlIK1KtuI4_86Mj94yVtjT__A&oe=6526534F)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          colStart={2}
          rowSpan={2}
        />
        <GridItem
          backgroundImage="url(https://scontent.fgua2-2.fna.fbcdn.net/v/t1.6435-9/71743260_678127136024946_2367894970129448960_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=YKAKyaa34UwAX8ywL9G&_nc_ht=scontent.fgua2-2.fna&oh=00_AfBVYiGPtNUcmTrnJR2siiu9ybbdqNgON-exBLiduCt8Bw&oe=654991BE)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          colSpan={2}
          colStart={3}
          rowSpan={3}
        >
          <Box
            alignItems="flex-end"
            bgGradient={"linear-gradient(0deg, gray.900 0%, transparent 30%)"}
            borderRadius="2xl"
            display="flex"
            h="100%"
            justifyContent="center"
            minHeight={80}
            padding={[2, 5, 10]}
          >
            <Text align="center" color="white" fontSize={["2xl", null, "4xl"]} fontWeight={700}>
              NUESTRO EQUIPO
            </Text>
          </Box>
        </GridItem>
        <GridItem
          backgroundImage="url(https://scontent.fgua2-2.fna.fbcdn.net/v/t39.30808-6/355696075_726091325988733_5906001009985317520_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_ohc=Dv2jAeYu-00AX9F4E1W&_nc_ht=scontent.fgua2-2.fna&oh=00_AfBQrs5rpPS_y7DIId9AnoRa3Dr1xNra_exoTpb0E07iIA&oe=65262BD6)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          colStart={5}
          rowSpan={2}
        />
        <GridItem
          backgroundImage="url(https://scontent.fgua2-2.fna.fbcdn.net/v/t39.30808-6/358102599_742978304300035_2627241381775647694_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=zsHBJPMCdGcAX9YbjyV&_nc_ht=scontent.fgua2-2.fna&oh=00_AfAzBjbEUlR-5D2XSca_KcA_HOr1AoM-iDRacxX8nH_Pkg&oe=6527B073)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          display={display}
        />
        <GridItem
          backgroundImage="url(https://scontent.fgua2-2.fna.fbcdn.net/v/t39.30808-6/363384673_740983424499523_4527153507222188924_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=ilyoIIO9FY8AX_iQenB&_nc_ht=scontent.fgua2-2.fna&oh=00_AfC2ya2CJOsuy5oD1-X7h_5g0yYCu82hhsPRnw7rIC3AaQ&oe=6527C8D2)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          colEnd={3}
          colSpan={colspan}
          // display={ display }
        />
        <GridItem
          backgroundImage="url(https://scontent.fgua2-2.fna.fbcdn.net/v/t1.6435-9/129027379_1000429523794704_3359215074540763457_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jpzPObiG8WQAX9Kfy3m&_nc_ht=scontent.fgua2-2.fna&oh=00_AfC6CTYi2pVDhD8lfPY3oxnm5qsuI33N7RPxw74yxAF7Sw&oe=65497EF6)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          display={display}
        />
        <GridItem
          backgroundImage="url(https://scontent.fgua2-2.fna.fbcdn.net/v/t39.30808-6/320387500_676974047230123_5868974613682344451_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=GT37T48a-9AAX8_URSc&_nc_ht=scontent.fgua2-2.fna&oh=00_AfBo5nelsNhA0R2SjQ_MSUa2-hld7S0N1VcOqn0IvkM1uQ&oe=6527DFF3)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          display={display}
        />
        <GridItem
          backgroundImage="url(https://scontent.fgua2-1.fna.fbcdn.net/v/t39.30808-6/358672687_732294778701721_5183384479213350749_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_ohc=H-93xn0RP-IAX8Dx01n&_nc_ht=scontent.fgua2-1.fna&oh=00_AfBEsh5xI-ecC2yw1He4obz_glVWVOkaf93PbNbksrN66w&oe=6525FD83)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          colStart={2}
        />
        <GridItem
          backgroundImage="url(https://scontent.fgua2-2.fna.fbcdn.net/v/t1.6435-9/117697177_912017422635915_7030256704045879578_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=t45GP2-l8yYAX_cfDq7&_nc_ht=scontent.fgua2-2.fna&oh=00_AfDCewA4fOpAkSzeq3J6qqnj83nv7uqzHyvam8SZ5c1Cig&oe=65497C2C)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          colSpan={colspan}
          colStart={5}
        />
      </Grid>
    </Section>


  );
};

export default FamilySection;
