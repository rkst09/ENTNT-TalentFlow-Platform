import React, { useState } from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { NAV_LINKS } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* HR Login Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="md"
              onClick={() => navigate("/dashboard")}
            >
              HR Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-2 pt-2">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    navigate("/dashboard");
                    setIsMenuOpen(false);
                  }}
                >
                  HR Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;