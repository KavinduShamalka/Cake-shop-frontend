import Cake from "./components/Cakes";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Cake />
      <About />
      <Footer />
    </div>
  );
};

export default App;
