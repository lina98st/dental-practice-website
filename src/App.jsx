import './App.css';
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import OpeningHours from "./components/OpeningHours";
import ContactInfo from "./components/ContactInfo";

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Carousel />
      <Services />
      <OpeningHours />
      <ContactInfo />
    </Layout>
  );
}