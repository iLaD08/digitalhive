import { useMediaQuery } from "@chakra-ui/react";
import Layout from "./components/layout/layout";
import LayoutMobile from "./components/layout/layout-mobile";
import Hero from "./components/hero";
import Features from "./components/features";
import Testimony from "./components/testimony";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "animate.css/animate.min.css";

export default function App() {
  const [isMobile] = useMediaQuery("(max-width: 480px)");

  return (
    <div className="App">
      {
        isMobile ? <LayoutMobile /> :  <Layout />
      }
      <Hero />
      <Features />
      <Testimony />
      <Contact />
      <Footer />
    </div>
  );
}
