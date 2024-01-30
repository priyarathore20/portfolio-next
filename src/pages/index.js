import Navbar from "../Components/Navbar/Index";
import IntroSection from "../Components/Intro";
import WorkSection from "../Components/Work";
import MyClients from "../Components/Skills";
import ContactSection from "../Components/Contact";
import FooterSection from "../Components/Footer";
import { useState, useEffect } from "react";

export const getStaticProps = async () => {
  return { props: {} }
}

function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <></>;

  return (
    <div className="App">
      <Navbar />
      <IntroSection />
      <MyClients />
      <WorkSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default Home;