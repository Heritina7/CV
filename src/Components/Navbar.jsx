import { useEffect, useState } from 'react';
import { 
  FaBars, FaGraduationCap, FaHome, FaProjectDiagram, FaInfoCircle, FaEnvelope,
  FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp 
} from "react-icons/fa";
import { MdCall } from "react-icons/md";

// ✅ Définition des liens de navigation
const NavLinks = [
  { nom: 'ACCUEIL', icon: <FaHome />, lien: '#accueil' },
  { nom: 'SERVICE', icon: <FaGraduationCap />, lien: '#services' },
  { nom: 'PORTFOLIO', icon: <FaProjectDiagram />, lien: '#portfolio' },
  { nom: 'PROJET', icon: <FaProjectDiagram />, lien: '#projet' },
  { nom: 'PROPOS', icon: <FaInfoCircle />, lien: '#propos' },
  { 
    nom: 'CV', 
    icon: <FaInfoCircle />, 
    lien: 'https://heritina.netlify.app', 
    externe: true 
  },
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
            const id = entry.target.id.toUpperCase();
            if (!NavLinks.some(link => link.lien === `#${id.toLowerCase()}` && !link.externe)) return;
            setActive(id);
          }
        });
      },
      { threshold: 0.6 }
    );

    NavLinks.forEach(({ lien }) => {
      if (!lien.startsWith('#')) return; // On observe que les ancres internes
      const section = document.querySelector(lien);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // ✅ Gérer l’ouverture du menu mobile sur resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false); // Forcer le menu desktop
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div className="z-50 fixed top-5 left-1/2 transform -translate-x-1/2 flex flex-col w-full items-center">
        <div className="bg-white shadow-lg border rounded-xl border-white w-[80%] flex flex-col lg:flex-row justify-around items-center">
          {/* Logo et burger */}
          <div className="p-4 h-16 flex items-center justify-between w-full lg:w-auto">
            <h1 className="text-4xl font-bold">RTH</h1>
            <FaBars 
              className="lg:hidden text-3xl cursor-pointer hover:text-gray-500" 
              onClick={() => setOpen(!open)} 
            />
          </div>

          {/* Liens */}
          <div className={`flex flex-col lg:flex-row lg:p-2 transition-all duration-300 ${open ? 'block' : 'hidden lg:flex'}`}>
            {NavLinks.map(({ nom, lien, externe }) => (
              <a
                key={nom}
                href={lien}
                target={externe ? "_blank" : "_self"}
                rel={externe ? "noopener noreferrer" : undefined}
                onClick={() => {
                  if (!externe) setActive(nom);
                  if (window.innerWidth < 1024) setOpen(false);
                }}
                className={`flex items-center justify-center p-2 ml-2 text-center duration-200 hover:text-white hover:bg-green-500 hover:rounded-lg ${
                  active === nom ? 'bg-green-600 text-white rounded-lg' : 'text-black'
                }`}
              >
               <span className="ml-1 text-lg">{nom}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Icônes flottantes */}
      <div className="fixed bottom-5 right-5 bg-gray-200 p-2 rounded-full flex flex-col gap-2 shadow-lg z-50">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-blue-900/50 rounded-full p-2 text-white hover:bg-blue-500 hover:scale-110 transition-transform duration-200">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-pink-500/50 rounded-full p-2 text-white hover:bg-pink-500 hover:scale-110 transition-transform duration-200">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-blue-500/50 rounded-full p-2 text-white hover:bg-blue-400 hover:scale-110 transition-transform duration-200">
          <FaLinkedinIn />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="bg-black/50 rounded-full p-2 text-white hover:bg-black hover:scale-110 transition-transform duration-200">
          <FaTiktok />
        </a>
        <a href="https://wa.me/0347791758" target="_blank" rel="noreferrer" className="bg-green-500/50 rounded-full p-2 text-white hover:bg-green-400 hover:scale-110 transition-transform duration-200">
          <FaWhatsapp />
        </a>
        <a href="tel:+261347791758" className="bg-yellow-500/50 rounded-full p-2 text-white hover:bg-yellow-400 hover:scale-110 transition-transform duration-200">
          <MdCall />
        </a>
      </div>
    </div>
  );
}
