import CompanyLogo from "./components/CompanyLogo";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Trial from "./components/Trial";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CompanyLogo />
      <Services />
      <Features />
      <Testimonial />
      <Pricing />
      <Faq />
      <Trial />
      <Footer />
    </>
  );
}

export default App;
