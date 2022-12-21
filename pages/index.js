import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import SeoHead from "../components/SeoHead";

function Home() {
  return (
    <>  
      <SeoHead title='Aqabka ict' />
      <Hero />
      <Feature />
      <Pricing />
 
      
    </>
  );
}

export default Home