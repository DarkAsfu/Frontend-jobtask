import Banner from "../Components/Banner";
import Company from "../Components/Company";
import Cta from "../Components/Cta";
import Finance from "../Components/Finance";
import OurPhilosophy from "../Components/OurPhilosophy";
import TechnologyBuildForYou from "../Components/TechnologyBuildForYou";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Finance />
      <OurPhilosophy />
      <TechnologyBuildForYou />
      <Company />
        <Cta />
    </div>
  );
};

export default Home;
