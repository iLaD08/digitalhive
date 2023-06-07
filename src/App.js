import Layout from "./components/layout";
import Hero from "./components/hero";
import Features from "./components/features";
import Testimony from "./components/testimony";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "animate.css/animate.min.css";

export default function App() {
  return (
    <div className="App">
      <Layout />
      <Hero />
      <Features />
      <Testimony />
      <Contact />
      <Footer />
    </div>
  );
}
