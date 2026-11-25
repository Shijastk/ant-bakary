import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Promos from "./components/Promos";
import Bestsellers from "./components/Bestsellers";
import About from "./components/About";
import TrustBar from "./components/TrustBar";
import Crafted from "./components/Crafted";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Promos />
        <Bestsellers />
        <About />
        <TrustBar />
        <Crafted />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
