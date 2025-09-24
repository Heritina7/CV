import { BsCart4 } from "react-icons/bs";
import { useState, useEffect } from "react";
import serviceIcon from "../Assets/icone/service.png";

export default function Services() {
  const services = [
    {
      title: "Site Web",
      price: "500.000Ar",
      features: [
        "Site vitrine et site catalogue",
        "CV ou portfolio en ligne.",
        "Présentation d'une business ou votre activité.",
        "Catalogue de produit.",
        "Catalogue avec panier virtuel",
        "Espace administrateur",
        "Mail personnalisé",
      ],
      image: "https://source.unsplash.com/400x300/?website,business",
    },
    {
      title: "App Web",
      price: "800.000Ar",
      features: [
        "Gestion Stock ou personnel",
        "Espace admin et dashboard.",
        "Espace administrateur",
        "Mail personnalisé",
      ],
      image: "https://source.unsplash.com/400x300/?ecommerce,shop",
    },
    {
      title: "E-commerce",
      price: "1M Ar",
      features: [
        "Site catalogue",
        "Commande en ligne.",
        "Paiement en ligne.",
        "Espace client.",
        "Catalogue avec panier virtuel",
        "Espace administrateur",
        "Mail personnalisé",
      ],
      image: "https://source.unsplash.com/400x300/?coding,software",
    },
    {
      title: "Autre",
      price: "Sur devis",
      features: [
        "Retouche et création photo",
        "Maintenance Informatique",
        "Formation",
        "Assistance",
        "Dépannage logiciel et système d'exploitation",
        "Solution personnalisée",
        "Technos modernes",
        "Support dédié",
      ],
      image: "https://source.unsplash.com/400x300/?technology,custom",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  const getVisibleSlides = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4; // Desktop = 4 slides visibles
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

  useEffect(() => {
    const handleResize = () => setVisibleSlides(getVisibleSlides());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + services.length) % services.length
    );
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const displayedSlides = [];
  for (let i = 0; i < visibleSlides; i++) {
    displayedSlides.push(services[(currentIndex + i) % services.length]);
  }

  return (
    <div className="w-full py-5">
      {/* Header */}
      <div className="text-center lg:w-[40%] w-[85%] bg-[#2DD298] lg:ml-32 ml-8 mb-5 rounded-r-full flex-row flex justify-center items-center">
        <img
          src={serviceIcon}
          alt="icone portfolio"
          className="rounded-xl w-10 h-10 object-cover"
        />
        <h2 className="text-3xl md:text-4xl p-2 font-bold text-gray-800">
          Mes <span className="text-white">SERVICES</span>
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        {/* Flèche gauche */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-200"
        >
          &#10094;
        </button>

        <div className="flex gap-4 overflow-hidden w-full justify-center">
          {displayedSlides.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between items-center
                         w-full sm:w-[70%] md:w-[45%] lg:w-[23%] h-[500px] flex-shrink-0 transition-transform duration-500"
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg w-full h-48 object-cover mb-3"
              />
              <h3 className="text-lg font-semibold mb-1 text-center px-2 break-words">
                {service.title}
              </h3>
              <ul className="text-gray-700 text-xs sm:text-sm space-y-1 mb-3 px-2 sm:px-4 overflow-hidden break-words text-justify">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✔</span>
                    <span className="break-words">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-row justify-center items-center mt-auto w-full gap-2">
                <a
                  href="https://wa.me/261000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-3 py-1 rounded-l-xl shadow h-10 w-10 flex justify-center items-center hover:bg-green-600 transition"
                >
                  <BsCart4 className="text-sm sm:text-base" />
                </a>
                <p className="text-red-500 bg-black font-bold text-xl sm:text-xl p-1 h-10 w-full items-center justify-center flex relative right-2 rounded-r-xl">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Flèche droite */}
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-200"
        >
          &#10095;
        </button>
      </div>

      {/* Bannière */}
      <div
        className="w-full h-40 bg-cover bg-center mt-10"
        style={{ backgroundImage: "url('/src/Assets/ta_banniere.jpg')" }}
      ></div>
    </div>
  );
}

