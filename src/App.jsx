import React from "react";
import { HelmetProvider } from "react-helmet-async"; // ✅ import HelmetProvider
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Projet from './Pages/Projet';
import Propos from './Pages/Propos';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import bgImage from "./Assets/bg.png";

export default function App() {
  return (
    <HelmetProvider>
      <>
        <Navbar />

        <section
          id="accueil"
          className="relative w-full min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/70 via-green-700/40 to-black/70 animate-gradient"></div>

          <div className="relative z-10 text-white">
            <Home />
          </div>
        </section>

        <section id="services" className="py-20 border-t border-gray-300">
          <Services />
        </section>

        <section id="portfolio" className="py-20 border-t border-gray-300">
          <Portfolio />
        </section>

        <section id="projet" className="py-20 border-t border-gray-300">
          <Projet />
        </section>

        <section id="propos" className="py-20 border-t border-gray-300">
          <Propos />
        </section>

        <section id="contact" className="py-20 border-t border-gray-300">
          <Contact />
        </section>

        <footer className="text-center py-8 text-gray-500 text-sm border-t border-gray-300">
          &copy; {new Date().getFullYear()} RANDRIANJAFY Heritina - RTH
        </footer>
      </>
    </HelmetProvider>
  );
}
