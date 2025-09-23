// src/components/Services.js
import { Helmet } from "react-helmet-async";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import freelancer from '../Assets/icone/freelancer.png';
import github from '../Assets/icone/github.png';
import linkedin from '../Assets/icone/linkedin.png';
import malt from '../Assets/icone/malt.png';
import payoneer from '../Assets/icone/payoneer.png';
import paypal from '../Assets/icone/paypal.png';

export default function Propos() {
  const services = [
    {
      title: "Site Vitrine",
      price: "À partir de 200€",
      features: ["Design moderne", "Responsive (PC, mobile, tablette)", "Pages présentation (Accueil, Contact)"],
      image: freelancer,
    },
    {
      title: "Site Catalogue",
      price: "À partir de 400€",
      features: ["Gestion des produits", "Recherche & filtres", "Interface admin simple"],
      image: github,
    },
    {
      title: "Application Web",
      price: "À partir de 800€",
      features: ["Développement Full Stack", "API sécurisée", "Fonctionnalités personnalisées"],
      image: linkedin,
    },
    {
      title: "Portfolio Perso",
      price: "À partir de 150€",
      features: ["Site personnel", "Présentation projets", "Optimisé SEO"],
      image: malt,
    },
    {
      title: "Portfolio Perso",
      price: "À partir de 150€",
      features: ["Site personnel", "Présentation projets", "Optimisé SEO"],
      image: payoneer,
    },
    {
      title: "Portfolio Perso",
      price: "À partir de 150€",
      features: ["Site personnel", "Présentation projets", "Optimisé SEO"],
      image: paypal,
    },
  ];

  // ⚡ Réglages du carrousel
  const settings = {
    dots: true,            // petits points de navigation
    infinite: true,        // boucle infinie
    speed: 500,            // vitesse transition
    slidesToShow: 3,       // combien d’images visibles
    slidesToScroll: 1,     // combien défilent par clic
    autoplay: true,        // défile automatiquement
    autoplaySpeed: 3000,   // 3 secondes
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-5">
      <Helmet>
        <title>À propos | RANDRIANJAFY Heritina</title>
        <meta
          name="description"
          content="En savoir plus sur RTH, développeur web full stack freelance, ses compétences, sa motivation et ses réalisations."
        />
        <meta property="og:title" content="À propos - RTH" />
        <meta
          property="og:description"
          content="Découvrez mon parcours, mes compétences et ma motivation pour vos projets web."
        />
        <meta property="og:image" content="https://rtheritina.netlify.app/assets/propos.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="text-center w-[80%] bg-[#2DD298] lg:ml-32 ml-8 mb-5 rounded-r-full">
        <h2 className="text-3xl md:text-4xl p-2 font-bold text-gray-800">
          Mes <span className="text-white">PROPOS</span>
        </h2>
      </div>

      {/* 🎠 Carrousel */}
      <div className="max-w-6xl mx-auto h-[50%] px-6">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-3 p-10">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition pl-6 pr-6 pt-6 pb-2  flex flex-col items-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-xl w-20 hover:scale-150 duration-1000 transition-all h-20 object-cover mb-4"
                />
        
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Section Réalisation */}
      <div className="bg-black flex flex-col h-96 mt-12">
        <div className="flex justify-center">
          <h1 className="text-white border-b border-white text-3xl p-5">REALISATION</h1>
        </div>
        <div className="bg-black flex h-40 text-white justify-around items-center p-5 flex-col">
        
          <div className="bg-black flex w-full h-40 text-white justify-around items-center p-5 flex-row">
          <div className="flex flex-col justify-center">
            <h1 className="text-center mb-2">Clients</h1>
            <div className="w-20 h-20 relative flex justify-center animate-pulse items-center rounded-full shadow-[0_4px_15px_green] border border-green-400">
              <h1 className="absolute text-3xl font-semibold">1</h1>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-center mb-2">MOTIVATION</h1>
            <div className="w-20 h-20 relative flex justify-center items-center rounded-full animate-pulse shadow-[0_4px_15px_violet] border border-green-400">
              <h1 className="absolute text-2xl font-semibold">100%</h1>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-center mb-2">perso</h1>
            <div className="w-20 h-20 relative flex justify-center items-center rounded-full shadow-[0_4px_15px_green] border border-green-400">
              <h1 className="absolute text-2xl font-semibold">5</h1>
            </div>
          </div>
          </div>
          
          
          <div className="bg-black flex w-full text-white justify-around items-center flex-row"> 
          <div className="flex flex-col justify-center">
            <h1 className="text-center mb-2">.</h1>
            <div className="w-20 h-20 relative flex justify-center items-center rounded-full shadow-[0_4px_15px_green] border border-green-400">
              <h1 className="absolute text-2xl font-semibold">.</h1>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-center mb-2">.</h1>
            <div className="w-20 h-20 relative flex justify-center items-center rounded-full shadow-[0_4px_15px_green] border border-green-400">
              <h1 className="absolute text-2xl font-semibold">.</h1>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
