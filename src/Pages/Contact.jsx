import { Helmet } from "react-helmet-async";
import { BsTelephone, BsEnvelope, BsPerson, BsGeoAlt } from "react-icons/bs";

export default function Contact() {
  const services = [
    {
      title: "Formation",
      features: ["FREELANCE.", "ENTREPRENEURIAT", "GESTION DE PROJET", "ANGLAIS"],
    },
    {
      title: "Cursus",
      features: ["Licence en Science de l’Informatique", "Baccalauréat"],
    },
    {
      title: "Service",
      features: [
        "CV ou portfolio en ligne.",
        "Presentation d'une business ou votre activité.",
        "Catalogue de produit.",
        "Gestion Stock, personnel.",
        "Retouche et création photo.",
        "Maintenance Informatique.",
        "Formation.",
        "Assistance.",
        "Dépannage logiciel et système d'exploitation.",
      ],
    },
    {
      title: "Contact",
      features: [
        { text: "+261 34 77 917 58", icon: BsTelephone },
        { text: "randrianjafyheritina7@gmail.com", icon: BsEnvelope },
        { text: "Randrianjafy Heritina", icon: BsPerson },
        { text: "TANA103 Ikianja Ambohimanagakely", icon: BsGeoAlt },
      ],
    },
  ];

  return (
    <div className="w-full py-10 bg-gray-100">
      <Helmet>
        <title>Contact | RANDRIANJAFY Heritina</title>
        <meta
          name="description"
          content="Contactez RTH pour vos projets web. Développeur full stack spécialisé en React & Django."
        />
        <meta property="og:title" content="Contact - RTH" />
        <meta
          property="og:description"
          content="Envoyez un message ou contactez-moi directement par téléphone ou email."
        />
        <meta property="og:image" content="https://rtheritina.netlify.app/assets/contact.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="w-full max-w-7xl mx-auto border border-green-600 rounded-xl p-8">
        {/* Titre */}
        <div className="text-center w-[80%] md:w-[60%] bg-[#2DD298] mx-auto mb-10 rounded-xl">
          <h2 className="text-3xl md:text-4xl p-3 font-bold text-gray-800">
            Mes <span className="text-white">CONTACTS</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-start overflow-hidden"
            >
              {/* Titre */}
              <div className="h-10 border-b border-green-900 mb-5 w-full flex justify-center">
                <h1 className="text-2xl font-semibold text-center">{service.title}</h1>
              </div>

              {/* Features */}
              <ul className="text-gray-700 text-sm space-y-2 mb-4 w-full break-words">
                {service.features.map((feature, i) => {
                  // Si Contact, feature est un objet avec texte + icône
                  const isContact = service.title === "Contact";
                  const Icon = isContact && feature.icon ? feature.icon : null;
                  const text = isContact && feature.text ? feature.text : feature;

                  return (
                    <li
                      key={i}
                      className="flex items-center space-x-2 overflow-hidden"
                    >
                      {Icon ? (
                        <Icon className="text-green-500 text-lg flex-shrink-0" />
                      ) : (
                        <span className="text-green-500">⚬</span>
                      )}
                      <span className="break-words">{text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

