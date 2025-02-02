import Banner from "../Components/Banner";
import Company from "../Components/Company";
import Cta from "../Components/CTA";
import Finance from "../Components/Finance";
import OurPhilosophy from "../Components/OurPhilosophy";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Finance/>
            <OurPhilosophy/>
            <Company/>
            <Cta/>
        </div>
    );
};

export default Home;