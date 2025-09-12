import { useEffect, useState } from 'react';
import { FaBars, FaGraduationCap, FaHome, FaProjectDiagram, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";

// ✅ Définition des liens de navigation en dehors du composant
const NavLinks = [
  { nom: 'ACCUEIL', icon: <FaHome />, lien: '#accueil' },
  { nom: 'SERVICE', icon: <FaGraduationCap />, lien: '#services' },
  { nom: 'PORTFOLIO', icon: <FaProjectDiagram />, lien: '#portfolio' },
  { nom: 'PROJET', icon: <FaProjectDiagram />, lien: '#projet' },
  { nom: 'PROPOS', icon: <FaInfoCircle />, lien: '#propos' },
  { nom: 'CV', icon: <FaInfoCircle />, lien: '#propos' },
  { nom: 'CONTACT', icon: <FaEnvelope />, lien: '#contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('ACCUEIL');

  // ✅ Observer pour détecter la section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id.toUpperCase()); // Met à jour l'onglet actif
          }
        });
      },
      { threshold: 0.6 } // 60% de la section doit être visible
    );

    NavLinks.forEach(({ lien }) => {
      const section = document.querySelector(lien);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []); // ✅ Plus besoin de NavLinks en dépendance

  // ✅ Gère l'ouverture/fermeture sur resize
  useEffect(() => {
    const isMobile = () => {
      if (window.innerWidth < 768) setOpen(true);
      else setOpen(false);
    };
    isMobile();
    window.addEventListener('resize', isMobile);
    return () => window.removeEventListener('resize', isMobile);
  }, []);

  return (
    <div>
      {/* Navbar en haut */}
      <div className="z-50 fixed top-5 left-1/2 transform -translate-x-1/2 flex flex-col w-full items-center">
        <div className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.4)] border rounded-xl border-white w-[80%] h-15 flex flex-col lg:flex-row justify-around items-center">
          <div className="p-4 h-16 flex items-center justify-between w-full lg:w-auto">
            <h1 className='text-4xl'>RTH</h1>
            <FaBars 
              className="lg:hidden text-3xl cursor-pointer hover:text-gray-300" 
              onClick={() => setOpen(!open)} 
            />
          </div>

          {!open && (
            <div className="flex flex-col lg:flex-row lg:p-2">
              {NavLinks.map(({ icon, nom, lien }) => (
                <a
                  key={nom}
                  href={lien}
                  onClick={() => {
                    setActive(nom);
                    if (window.innerWidth < 768) setOpen(true);
                  }}
                  className={`flex items-center justify-center p-2 ml-2 text-center duration-200 hover:text-white hover:bg-green-500 hover:rounded-lg ${
                    active === nom ? 'bg-green-600 text-white rounded-lg' : 'text-black'
                  }`}
                >
                  <span className="ml-1 text-lg">{nom}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Icônes flottantes fixes en bas à droite */}
      <div className="fixed bottom-5 right-5 bg-gray-200 m-2 p-2 shadow-[0_4px_15px_rgba(0,0,0,0.4)] rounded-full flex flex-col gap-2 z-50">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"
          className="bg-blue-900/50 rounded-full p-2 shadow-lg text-white text-lg hover:bg-blue-500 hover:scale-110 transition-transform duration-200">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"
          className="bg-pink-500/50 rounded-full p-2 shadow-lg text-white text-lg hover:bg-pink-500 hover:scale-110 transition-transform duration-200">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"
          className="bg-blue-500/50 rounded-full p-2 shadow-lg text-white text-lg hover:bg-blue-400 hover:scale-110 transition-transform duration-200">
          <FaLinkedinIn />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer"
          className="bg-black/50 rounded-full p-2 shadow-lg text-white text-lg hover:bg-black hover:scale-110 transition-transform duration-200">
          <FaTiktok />
        </a>
        <a href="https://wa.me/0347791758" target="_blank" rel="noreferrer"
          className="bg-green-500/50 rounded-full p-2 shadow-lg text-white text-lg hover:bg-green-400 hover:scale-110 transition-transform duration-200">
          <FaWhatsapp />
        </a>
        <a href="tel:+123456789"
          className="bg-yellow-500/50 rounded-full p-2 shadow-lg text-white text-lg hover:bg-yellow-400 hover:scale-110 transition-transform duration-200">
          <MdCall />
        </a>
      </div>
    </div>
  );
}

