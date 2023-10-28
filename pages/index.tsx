import type {NextPage} from "next";

import FamilySection from "screens/Home/sections/Family";
import LifeStories from "screens/Home/sections/LifeStories";

import Hero from "../screens/Home/sections/Hero";
import MeetYourBuddy from "../screens/Home/sections/MeetYourBuddy";
import Process from "../screens/Home/sections/Process";
import Transit from "../screens/Home/sections/Transit";
import History from "../screens/Home/sections/History";
import Mision from "../screens/Home/sections/mision";
import vision from "../screens/Home/sections/vision";
import Layout from "../components/layout/Layout";
import Aliados from "screens/Home/sections/Aliados";
import Team from "screens/Home/sections/Team";

const Home: NextPage = () => {
  return (
    <Layout
      headProps={{
        title: "Home | ASOANGEL",
        description:
          "ASOANGEL es una institucion sin fines de lucro  que te permite aportar a la ayuda de personas con discapacidad.",
        url: "https://",
      }}
    >
      <Hero /> 
      <History />
      <Mision />
      <Transit />
      <Team />
      <MeetYourBuddy />
      
      
     
    </Layout>
  );
};

export default Home;
