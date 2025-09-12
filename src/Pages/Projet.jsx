import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Projets | RANDRIANJAFY Heritina</title>
        <meta
          name="description"
          content="Présentation des projets en cours et terminés de RTH, développeur web full stack freelance."
        />
        <meta property="og:title" content="Projets - RTH" />
        <meta
          property="og:description"
          content="Découvrez les projets web et applications développés par RTH."
        />
        <meta property="og:image" content="https://rtheritina.netlify.app/assets/projets.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="text-center lg:w-[65%] w-[85%] bg-green-500 lg:ml-32 ml-8 mb-5 rounded-r-full flex-row flex justify-center items-center">
        <img
              src={projet}
              alt="icone prtfolio"
              className="rounded-xl w-10 h-10 object-cover"
            />
        <h2 className="text-3xl md:text-4xl p-2 font-bold text-gray-800">
          Mes <span className="text-white">PROJET</span>
        </h2>
      </div>

<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <img
              src={service.image}
              alt={service.title}
              className="rounded-xl w-full h-40 object-cover mb-4"
            />
            <ul className="text-gray-700 text-sm space-y-2 mb-4 text-left">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center">
  <p className="text-justify">{feature}</p>
</li>

              ))}
            </ul>
            <div className="flex flex-row justify-center items-center">
            
            <a
              href="https://wa.me/261000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded- rounded-full shadow justify-center items-center flex hover:bg-green-600 transition"
            >
            <p className="text-white font-bold p-1 rounded-r rounded-full">plus de détails</p>
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
