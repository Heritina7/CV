// src/components/Services.js
import { useState } from "react";
import portfolio from "../Assets/icone/portfolio.png";
import vitrineImage from "../Assets/bg.png";
import hover from "../Assets/bghover.png";

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("TOUT");

  // ✅ Liens de navigation
  const NavLinks = [
    { nom: "TOUT" },
    { nom: "VITRINE" },
    { nom: "CATALOGUE" },
    { nom: "APPLICATION" },
    { nom: "APP MOBILE" },
    { nom: "GALERIE" },
  ];

  // ✅ Données des services
  const services = [
    {
      title: "Site Vitrine",
      description: "Un site vitrine moderne et responsive pour présenter vos services.",
      features: ["Design moderne", "Responsive (PC, mobile, tablette)", "Pages : Accueil, Services, Contact"],
      image: vitrineImage,
      imagehover: hover,
      categorie: "VITRINE",
    },
    {
      title: "Site Catalogue",
      description: "Un catalogue en ligne avec gestion des produits.",
      features: ["Ajout / modification de produits", "Recherche & filtres", "Interface admin simple"],
      image: vitrineImage,
      imagehover: hover,
      categorie: "CATALOGUE",
    },
    {
      title: "Application Web",
      description: "Applications web sur mesure pour vos besoins métiers.",
      features: ["Full Stack", "API sécurisée", "Fonctionnalités personnalisées"],
      image: vitrineImage,
      imagehover: hover,
      categorie: "APPLICATION",
    },
    {
      title: "Application Mobile",
      description: "Apps mobiles Android & iOS avec React Native.",
      features: ["Multiplateforme", "Performante", "Design moderne"],
      image: vitrineImage,
      imagehover: hover,
      categorie: "APP MOBILE",
    },
    {
      title: "Galerie Photo",
      description: "Une galerie photo interactive et élégante.",
      features: ["Album dynamique", "Zoom & Lightbox", "Navigation fluide"],
      image: vitrineImage,
      imagehover: hover,
      categorie: "GALERIE",
    },
  ];

  // ✅ Filtrage selon la catégorie active
  const filteredServices =
    active === "TOUT"
      ? services
      : services.filter((service) => service.categorie === active);

  return (
    <div className="w-full py-5">

      {/* HEADER */}
      <div className="text-center lg:w-[50%] w-[85%] bg-[#2DD298] lg:ml-32 ml-8 mb-5 rounded-r-full flex-row flex justify-center items-center">
        <img
          src={portfolio}
          alt="icone portfolio"
          className="rounded-xl w-10 h-10 object-cover"
        />
        <h2 className="text-3xl md:text-4xl p-2 font-bold text-gray-800">
          Mes <span className="text-white">PORTFOLIO</span>
        </h2>
      </div>

      {/* Mobile menu button */}
<div className="lg:hidden flex items-center mb-5 justify-center">
  <button
    onClick={() => setOpen(!open)}
    className="p-2 rounded-full bg-white border border-[#2DD298] animate-pulseShadow"
  >
    <img
      src={portfolio}
      alt="Icône portfolio"
      className="w-8 h-8 object-cover"
    />
  </button>
</div>


{/* Mobile dropdown */}
{open && (
  <div className="lg:hidden flex flex-col gap-2 bg-[#6F54D4] text-white p-4 rounded-xl mx-8 mb-5">
    {NavLinks.map(({ nom }) => (
      <button
        key={nom}
        onClick={() => {
          setActive(nom);
          setOpen(false); // ✅ fermer après clic
        }}
        className={`px-4 py-2 rounded-md text-left ${
          active === nom
            ? "bg-[#2DD298] text-white"
            : "hover:bg-[#2DD298] hover:text-white"
        }`}
      >
        {nom}
      </button>
    ))}
  </div>
)}

      {/* CARTES */}
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
  {filteredServices.map((service, index) => (
    <div
      key={index}
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden group h-64 flex items-center justify-center"
    >
      {/* Image par défaut */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition duration-500 group-hover:opacity-0"
      />

      {/* Image hover qui prend tout */}
      <img
        src={service.imagehover}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
      />

      {/* Texte overlay au-dessus de l'image hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500">
        <h3 className="text-white text-xl font-bold text-center px-2">
          {service.title}
        </h3>
        <p className="text-white text-sm mt-2 text-center px-3">
          {service.description}
        </p>
      </div>
    </div>
  ))} 
</div>

      </div>
  );
}

