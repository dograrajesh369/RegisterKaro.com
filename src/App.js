// App.js
import React from "react";
import "./App.css"; // Specific to App
import Navigation from "./components/Navbar";
import Home from "./components/SubComponent/Home";
import Services from "./components/SubComponent/Services";
import Portfolio from "./components/SubComponent/Portfolio";
import Features from "./components/SubComponent/Features";
import Team from "./components/SubComponent/Team";
import Testimonials from "./components/SubComponent/Testimonials";
import Contact from "./components/SubComponent/Contact"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <section id="home" className="section">
        <Home />
      </section>
      <section id="services" className="section">
        <Services />
      </section>
      <section id="portfolio" className="section">
        <Portfolio />
      </section>
      <section id="features" className="section">
        <Features/>
      </section>
      <section id="team" className="section">
        <Team/>
      </section>
      <section id="testimonials" className="section">
        <Testimonials/>
        </section>
        <section id="contactUs" className="section">
          <Contact/>
        </section>
        <section id="footer" className="section">
          <Footer/>
        </section>
    </div>
  );
}

export default App;
