// src/components/Features.tsx
import {
  Laptop,
  Shirt,
  Smartphone,
  Headphones,
  Tv,
  Flame,
} from 'lucide-react';

const features = [
  {
    icon: <Laptop className="w-6 h-6 text-blue-600" />,
    title: 'Classe Ordinateurs',
    desc: 'Des machines puissantes pour une productivité sans limite.',
  },
  {
    icon: <Shirt className="w-6 h-6 text-blue-600" />,
    title: 'Classe Vêtements',
    desc: 'Découvrez des styles modernes et confortables.',
  },
  {
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    title: 'Classe Téléphones',
    desc: 'Technologie de pointe pour rester connecté.',
  },
  {
    icon: <Headphones className="w-6 h-6 text-blue-600" />,
    title: 'Classe Accessoires',
    desc: 'Optimisez votre quotidien avec des accessoires malins.',
  },
  {
    icon: <Tv className="w-6 h-6 text-blue-600" />,
    title: 'Classe TV++',
    desc: 'Divertissement de haute qualité chez vous.',
  },
  {
    icon: <Flame className="w-6 h-6 text-blue-600" />,
    title: 'Produits tendances',
    desc: 'Les incontournables du moment à ne pas rater.',
  },
];

const Features = () => {
  return (
    <section className="p-8 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Nos fonctionnalités</h2>
        <p className="text-blue-600 mt-2">
          Une suite complète pour vos besoins professionnels
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-blue-700">
              {feature.title}
            </h3>
            <p className="text-blue-600">{feature.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 md:mt-24 bg-white rounded-xl shadow-lg hover:shadow-2xl py-8 md:py-10 px-6 md:px-10">
        <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <li className="text-center">
            <h3 className="text-[#2563eb] text-4xl md:text-5xl font-bold">200k+</h3>
            <p className="text-gray-600 text-sm md:text-base mt-2 font-bold">Utilisateurs</p>
          </li>
          <li className="text-center">
            <h3 className="text-[#2563eb] text-4xl md:text-5xl font-bold">90.9%</h3>
            <p className="text-gray-600 text-sm md:text-base mt-2 font-bold">Uptime</p>
          </li>
          <li className="text-center">
            <h3 className="text-[#2563eb] text-4xl md:text-5xl font-bold">50+</h3>
            <p className="text-gray-600 text-sm md:text-base mt-2 font-bold">Pays</p>
          </li>
          <li className="text-center">
            <h3 className="text-[#2563eb] text-4xl md:text-5xl font-bold">24/7</h3>
            <p className="text-gray-600 text-sm md:text-base mt-2 font-bold">Support</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;



