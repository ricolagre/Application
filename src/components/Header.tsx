import logo from "../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-9 lg:px-12">
        <div className="flex justify-between items-center py-6">

          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Logo"
                className="w-24 h-24 object-contain rounded-lg"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-9">
            <a
              href="#"
              className="text-gray-600 hover:text-cyan-700 px-3 py-3 text-sm font-medium transition-colors"
            >
              Ordinateurs
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-cyan-700 px-3 py-3 text-sm font-medium transition-colors"
            >
              Vetements
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-cyan-700 px-3 py-3 text-sm font-medium transition-colors"
            >
              Téléphones
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-cyan-700 px-3 py-3 text-sm font-medium transition-colors"
            >
              Accéssories
            </a>
          </nav>

          {/* Desktop Search Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#"
              className="bg-cyan-700 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-cyan-800 transition-colors"
            >
              Rechercher
            </a>
          </div>

          {/* Mobile Right Buttons: Search + Menu */}
          <div className="flex md:hidden items-center space-x-4">
            <a
              href="#"
              className="bg-cyan-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-800 transition-colors"
            >
              Rechercher
            </a>

            <button
              type="button"
              className="text-gray-600 hover:text-cyan-700 p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-6 py-3 space-y-3 bg-white">
            <a
              href="#"
              className="block text-gray-600 hover:text-cyan-700 px-3 py-3 text-base font-medium"
            >
              Ordinateurs
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-cyan-700 px-3 py-3 text-base font-medium"
            >
              Vetements
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-cyan-700 px-3 py-3 text-base font-medium"
            >
              Téléphones
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-cyan-700 px-3 py-3 text-base font-medium"
            >
              Accéssories
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;