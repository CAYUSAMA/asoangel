import type {NextPage} from "next";

import FamilySection from "screens/Home/sections/Family";
import LifeStories from "screens/Home/sections/LifeStories";

import Hero from "../screens/Home/sections/Herocopy";
import MeetYourBuddy from "../screens/Home/sections/MeetYourBuddy";
import Process from "../screens/Home/sections/Process";
import Transit from "../screens/Home/sections/Transit";
import History from "../screens/Home/sections/Historycopy";
import Mision from "../screens/Home/sections/mision";
import vision from "../screens/Home/sections/vision";

import {Heading, ListItem, Text, UnorderedList, VStack} from "@chakra-ui/react";

import Layout from "../components/layout/Layout";
import Herocopy from "screens/Home/sections/Herocopy";
import Historycopy from "../screens/Home/sections/Historycopy";
import Aliados from "screens/Home/sections/Aliados";
import Heroimp from "screens/Home/sections/Heroimp";
import Impdatos from "screens/Home/sections/Impdatos";


const impacto: NextPage = () => {
  return (
    <Layout
      headProps={{
        title: "Home | Adopcanem",
        description:
          "Adopcanem es una plataforma de adopción que te permite encontrar a tu nuevo compañero de vida.",
        url: "https://adopcanem.com",
      }}
    >
      

      <Heroimp /> 
      <Impdatos />
      
      <Aliados />
      
      



    </Layout>
  );
};

export default impacto;
