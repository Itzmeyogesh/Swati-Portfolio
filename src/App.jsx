import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience'; // ✅ Import Experience section
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience /> {/* ✅ Render Experience after Skills */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
