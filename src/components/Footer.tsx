import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold">Rico Buzy_TD</h3>
          <p className="text-sm mt-2">
            Votre Agency des ordinateurs<br/> des téléphones, TV++<br/>de vêtements tendance à petits prix. Livraison rapide, qualité assurée.
          </p>
          <div className="flex space-x-4 mt-4">
            <Facebook className="w-5 h-5 hover:text-pink-400 transition" />
            <Instagram className="w-5 h-5 hover:text-pink-400 transition" />
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Liens rapides</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Nouveautés</a></li>
            <li><a href="#">Collection</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="text-sm space-y-1">
            <li>Livraison offerte</li>
            <li>Retours 30 jours</li>
            <li>Support 24/7</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="text-sm space-y-1">
            <li className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" /> N'Djamena, Moundou, Doba, Tchad
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2" /> +235 62 85 93 29
            </li>
            <li className="flex items-center">
              <Mail className="w-4 h-4 mr-2" /> contact@RicoBuzy_TD.com
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center text-xs mt-8 text-gray-400">
        © {new Date().getFullYear()} Rico Buzy_TD. Tous droits réservés. | <a href="#" className="underline">Mentions légales</a>
      </p>
    </footer>
  );
};

export default Footer;
