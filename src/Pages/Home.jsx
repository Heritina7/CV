import { Helmet } from "react-helmet-async";
import { FaHtml5, FaReact } from "react-icons/fa";
import { 
  SiDjango, 
  SiTailwindcss, 
  SiFiverr, 
  SiFreelancer, 
  SiCodeforces, 
  SiMalt 
} from "react-icons/si"; 
import pdp from '../Assets/pdp.jpg';

export default function Home() {
  return (
    <div className="w-full h-full">
     <Helmet>
        <title>Accueil | Portfolio RANDRIANJAFY Heritina</title>
        <meta
          name="description"
          content="Développeur Web Full Stack freelance spécialisé en React et Django. Découvrez mon portfolio et mes projets."
        />
        <meta property="og:title" content="Portfolio RANDRIANJAFY Heritina" />
        <meta
          property="og:description"
          content="Je développe des sites modernes et performants avec React & Django."
        />
        <meta property="og:image" content="https://rtheritina.netlify.app/assets/pdp.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="flex flex-col md:flex-row max-h-screen">
        {/* Partie gauche */}
        <div className="w-full md:w-1/2 h-auto md:h-screen text-lg font-semibold justify-center pt-28 space-y-6 md:space-y-7 items-center flex flex-col p-6">

          <div className="p-4 md:p-5 shadow-[0_4px_15px_rgba(0,0,0,0.4)] rounded-full text-center">
            <h1>Bonjour et Bienvenue</h1>
          </div>

          <div className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.4)] p-4 md:p-5 rounded-full text-black text-center">
            <h1>
              <span>Je suis disponible pour un travail en freelance</span><br /> 
              <span className="text-green-400">Développeur Web Full Stack React | Django</span>
            </h1>
          </div>
          <div className="p-4 md:p-5 shadow-[0_4px_15px_rgba(0,0,0,0.4)] rounded-full text-center">
            <h1>Bonjour et Bienvenue</h1>
          </div>

          <div className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.4)] md:p-5 rounded-full overflow-hidden w-56 top-60 p-5 lg:w-full relative lg:top-32 flex justify-center items-center">
            <div className="flex space-x-10 text-3xl md:text-4xl animate-slide">
              <FaHtml5 className="text-orange-500" />
              <FaReact className="text-blue-400" />
              <SiDjango className="text-green-700" />
              <SiTailwindcss className="text-cyan-500" />
              <SiMalt className="text-red-600" />
              <SiFiverr className="text-green-500" />
              <SiFreelancer className="text-blue-500" />
              <SiCodeforces className="text-yellow-600" />
            </div>
          </div>

        </div>

        {/* Partie droite */}
        <div className="flex flex-col py-32 space-y-10 ">
        <div className="flex items-center justify-center">
            <img
              src={pdp}
              alt="RANDRIANJAFY Heritina, développeur web full stack"
              className="h-48 w-48 lg:bottom-0 relative bottom-48 lg:w-[550px] lg:h-[550px] rounded-full"
            />
            </div>
          <div className="text-2xl md:text-4xl text-center">
            <h1>RANDRIANJAFY Heritina</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
