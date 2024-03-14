import { useContext } from 'react';
import './App.css'
import { ThemeContext } from './ThemeContext';
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const { theme } = useContext(ThemeContext); // No type casting needed

  return (
      <div className="app" style={{
        background: theme === 'dark' ? "black" : "",
        color: theme === 'dark' ? "white" : "",
      }}>
      <Navbar/>
      <Intro />
      <Services />
      <Experience />
      <Works />
      {/* <Portfolio /> */}
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
      </div>
  )
}

export default App
