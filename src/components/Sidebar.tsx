import { useState } from "react";
import {
  Home,
  Box,
  Settings,
  Users,
  DollarSign,
  Info,
} from "lucide-react";

const menuItems = [
  { icon: <Home />, label: "Tableau de bord" },
  { icon: <Box />, label: "Produits" },
  { icon: <Users />, label: "Clients" },
  { icon: <DollarSign />, label: "Ventes" },
  { icon: <Settings />, label: "Paramètres" },
  { icon: <Info />, label: "À propos" },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="flex flex-col bg-white h-full shadow-md p-4 w-64">
      {/* Widget utilisateur */}
      <div className="mb-6 p-4 bg-cyan-700 text-white rounded-lg">
        <p className="font-semibold text-lg">Bienvenue, Rico</p>
        <p className="text-sm mt-1">Admin</p>
      </div>

      {/* Menu */}
      <ul className="flex flex-col space-y-4">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className={`flex items-center space-x-3 cursor-pointer px-3 py-2 rounded-md ${
              activeIndex === idx ? "bg-cyan-700 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveIndex(idx)}
          >
            <div className="w-5 h-5">{item.icon}</div>
            <span className="font-medium">{item.label}</span>
          </li>
        ))}
      </ul>

      {/* Widget info */}
      <div className="mt-auto p-4 bg-cyan-100 rounded-md">
        <p className="text-sm font-semibold">Besoin d'aide ?</p>
        <button className="mt-2 w-full bg-cyan-700 text-white py-2 rounded-md hover:bg-cyan-800 transition">
          Contactez-nous
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;



