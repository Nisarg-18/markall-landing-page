import Automation from "./components/Automation";
import ContactForm from "./components/ContactForm";
import Customers from "./components/Customers";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Automation />
      <Customers />
      <ContactForm />
    </div>
  );
}

export default App;
