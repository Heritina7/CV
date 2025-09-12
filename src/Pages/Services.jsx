import { Helmet } from "react-helmet-async";
import { BsCart4 } from "react-icons/bs"; 
import serviceIcon from "../Assets/icone/service.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Services() {
  const services = [
    {
      title: "Site Web",
      price: "500.000Ar",
      features: ["Site vitrine et site catalogue", "CV ou portfolio en ligne.", "Presentation d'une business ou votre activité.", "Catalogue de produit.", "Catalogue avec panier virtuel", "espace administrateur", "mail personnalisé"],
      image: "https://source.unsplash.com/400x300/?website,business",
    },
    {
      title: "App Web",
      price: "800.000Ar",
      features: ["Gestion Stock ou personnel", "Espace admin et dashboard.", "espace administrateur", "mail personnalisé"],
      image: "https://source.unsplash.com/400x300/?ecommerce,shop",
    },
    {
      title: "E-commerce",
      price: "1M Ar",
      features: ["Site catalogue", "Commande en ligne.", "Payement en ligne.", "Espace client.", "Catalogue avec panier virtuel", "Espace administrateur", "Mail personnalisé"],
      image: "https://source.unsplash.com/400x300/?coding,software",
    },
    {
      title: "Autre",
      price: "Sur devis",
      features: ["Retouche et création photo","Maintenance Informatique.","Formation.","Assistance.","Dépannage logiciel et système d'exploitation","Solution personnalisée", "Technos modernes", "Support dédié"],
      image: "https://source.unsplash.com/400x300/?technology,custom",
    },
  ];

  // ⚡ Paramètres du carrousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full py-5 bg-gray-100">
      {/* Titre */}
      <Helmet>
        <title>Services | Portfolio RANDRIANJAFY Heritina</title>
        <meta
          name="description"
          content="Découvrez les services proposés par RANDRIANJAFY Heritina : développement de sites web, applications web, e-commerce et solutions personnalisées."
        />
        <meta property="og:title" content="Services - RTH" />
        <meta
          property="og:description"
          content="Services de développement web full stack avec React & Django pour vos projets modernes."
        />
        <meta property="og:image" content="https://rtheritina.netlify.app/assets/service.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="text-center lg:w-[40%] w-[70%] bg-green-500 ml-10 md:ml-32 mb-5 flex flex-row justify-center items-center rounded-r-full">
        <img
          src={serviceIcon}
          alt="services"
          className="rounded-xl w-8 h-8 object-cover"
        />
        <h2 className="text-xl md:text-3xl p-2 font-bold text-gray-800">
          Mes <span className="text-white">SERVICES</span>
        </h2>
      </div>

      {/* 🎠 Carrousel */}
      <div className="max-w-6xl mx-auto px-6">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition 
                              p-4 flex flex-col justify-between items-center 
                              h-[380px]">
                
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg w-full h-32 object-cover mb-3"
                />

                {/* Contenu texte */}
                <div className="flex-1 flex flex-col justify-start w-full">
                  <h3 className="text-lg font-semibold mb-1 text-center">{service.title}</h3>
                  <ul className="text-gray-700 text-xs space-y-1 mb-3 text-left overflow-hidden">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-green-500 ml-5 mr-2">✔</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bouton en bas */}
                <div className="flex flex-row justify-center items-center mt-auto">
                  <p className="text-red-500 bg-black font-bold text-xs p-1 pl-6 pr-2 rounded-r rounded-full">
                    {service.price}
                  </p>
                  <a
                    href="https://wa.me/261000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-3 py-1 rounded-l rounded-full shadow justify-center items-center flex hover:bg-green-600 transition"
                  >
                    <BsCart4 />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Section supplémentaire */}
      <div
  className="w-full h-40 bg-cover bg-center mt-10"
  style={{ backgroundImage: "url('/src/Assets/ta_banniere.jpg')" }}
>
</div>

    </div>
  );
}
