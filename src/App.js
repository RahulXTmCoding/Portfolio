import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "animate.css";
import "antd/dist/antd.css";
import "./App.css";
import WhatIDO from "./Components/WhatIDo";
import SKills from "./Components/Skills";
import Resume from "./Components/Resume";
import { ArrowPagebreak } from "./Components/Svgs";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset > (window.screen.width < 768 ? 50 : 100)) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <Header scrolled={scrolled} />
      <Home />
      <WhatIDO />
      <About />
      <SKills />
      <Resume />
      <ArrowPagebreak />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
