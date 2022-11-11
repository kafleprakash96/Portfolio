import React from "react";
import Header from "./components/header/Header"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Footer from "./components/footer/Footer"
import Nav from "./components/nav/Nav"
import Portfolio from "./components/portfolio/Portfolio"
import Service from "./components/service/Service"
import Testimonials from "./components/testimonials/Testimonials"



const App = () => {
  return( <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Service />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />

  </>
  )
};

export default App;
