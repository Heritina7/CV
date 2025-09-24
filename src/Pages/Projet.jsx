import projet from "../Assets/icone/projet.png";
import vitrineImage from '../Assets/bg.png'; 

export default function Projet() {
  const services = [
    {
      title: "Site Vitrine",
      features: ["projet en cours"],
      image: vitrineImage,
    },
    {
      title: "Site Catalogue",
      features: ["projet en cours"],
      image: vitrineImage,
    },
    {
      title: "Application Web",
      features: ["projet en cours"],
      image: vitrineImage,
    },
  ];

  return (
    <div className="w-full py-5 bg-gray-100">
      {/* HEADER */}
      <div className="text-center lg:w-[60%] w-[70%] bg-[#2DD298] ml-10 md:ml-32 mb-5 flex flex-row justify-center items-center rounded-r-full">
        <img
          src={projet}
          alt="services"
          className="rounded-xl w-8 h-8 object-cover"
        />
        <h2 className="text-xl md:text-3xl p-2 font-bold text-gray-800">
          Mes <span className="text-white">PROJET</span>
        </h2>
      </div>

      {/* CARTES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg transition-all duration-500 p-4 sm:p-6 flex flex-col items-center hover:border-[#2DD298] hover:border"
          >
            {/* TITRE */}
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center">
              {service.title}
            </h3>

            {/* IMAGE */}
            <img
              src={service.image}
              alt={service.title}
              className="rounded-xl w-full sm:w-64 md:w-72 lg:w-80 h-64 sm:h-64 md:h-72 lg:h-80 object-cover mb-4 transition-transform duration-700 hover:scale-105"
            />

            {/* FEATURES */}
            <ul className="text-gray-700 text-sm space-y-2 mb-4 text-left w-full px-2 sm:px-4">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <p className="text-justify">{feature}</p>
                </li>
              ))}
            </ul>

            {/* BOUTON */}
            <div className="flex justify-center w-full">
              <a
                href="https://wa.me/261000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-full shadow hover:bg-[#B77E15] transition flex justify-center items-center"
              >
                <p className="text-white font-bold">plus de détails</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

