// src/components/Services.js
import portfolio from "../Assets/icone/portfolio.png";
import vitrineImage from '../Assets/bg.png'; 
export default function Portfolio() {
  const services = [
    {
      title: "Site Vitrine",
      description: "site vitrine pour stand'art",
      features: ["Design moderne", "Responsive (PC, mobile, tablette)", "Pages présentation (Accueil, Contact)"],
      image: vitrineImage,
    },
    {
      title: "Site Catalogue",
      description: "",
      features: ["Gestion des produits", "Recherche & filtres", "Interface admin simple"],
      image: vitrineImage,
    },
    {
      title: "Application Web",
      description: "",
      features: ["Développement Full Stack", "API sécurisée", "Fonctionnalités personnalisées"],
      image: vitrineImage,
    },
    {
      title: "Application Web",
      description: "",
      features: ["Développement Full Stack", "API sécurisée", "Fonctionnalités personnalisées"],
      image: vitrineImage,
    },
  ];

  return (
    <div className="w-full py-5 bg-gray-100">
      <div className="text-center lg:w-[60%] w-[85%] bg-green-500 lg:ml-32 ml-8 mb-5 rounded-r-full flex-row flex justify-center items-center">
          <img
              src={portfolio}
              alt="icone prtfolio"
              className="rounded-xl w-10 h-10 object-cover"
            />
        <h2 className="text-3xl md:text-4xl p-2 font-bold text-gray-800">
          Mes <span className="text-white">PORTFOLIO</span>
        </h2>
      </div>

    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
  {services.map((service, index) => (
    <div
      key={index}
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden group h-64 flex items-center justify-center"
    >
      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
      />

      {/* Texte sur hover */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500">
        <h3 className="text-white text-xl font-bold text-center px-2">{service.description}</h3>
      </div>
    </div>
  ))}
</div>


    </div>
  );
}
