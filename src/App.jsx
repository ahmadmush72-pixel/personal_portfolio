import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Experience from "./components/Experience";
import Tech_Aresnal from "./components/Tech-aresnal";
import Career_timeline from "./components/Career_timeline";
import Feature_Work from "./components/Feature_Work";
import Education_Certification from "./components/Education_Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Experience />
      <Education_Certification />
      <Tech_Aresnal />
      <Feature_Work />
      <hr />
      <Contact />
      <hr />
      <Footer />
    </main>
  );
}
export default App;
