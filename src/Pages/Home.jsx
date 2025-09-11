import { FaHtml5, FaReact } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiFiverr, SiFreelancer, SiCodeforces, SiMalt } from "react-icons/si"; 
import pdp from '../Assets/pdp.jpg';

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col md:flex-row max-h-screen">

        {/* Partie gauche */}
        <div className="w-full md:w-1/2 h-auto md:h-screen text-lg font-semibold justify-center md:justify-end space-y-6 md:space-y-7 items-center flex flex-col p-6">

          <div className="p-4 md:p-5 shadow-[0_4px_15px_rgba(0,0,0,0.4)] rounded-full text-center">
            <h1>Bonjour et Bienvenue</h1>
          </div>

          <div className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.4)] p-4 md:p-5 rounded-full text-black text-center">
            <h1>
              <span>Je suis disponible pour un travail en freelance</span><br /> 
              <span className="text-green-400">Développeur Web Full Stack React | Django</span>
            </h1>
          </div>

         <div className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.4)] md:p-5 rounded-full overflow-hidden w-full flex justify-center items-center">
  <div className="flex space-x-10 text-6xl md:text-4xl animate-slide">
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
        <div className="w-full md:w-1/2 pt-10 md:pt-28 flex flex-col space-y-6 md:space-y-10 items-center h-auto md:h-full">

          <div>
            <img 
              src={pdp} 
              alt="Heritina" 
              className="h-48 w-48 md:h-96 md:w-96 rounded-full object-cover" 
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

