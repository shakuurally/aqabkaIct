import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

function Home() {
  return (
    <>
      <SeoHead title='Aqabka ict' />
      <Hero />
      <Feature />
      <Pricing />

      <Layout>
      
      </Layout>
      hi
    </>
  );
}

export default Home