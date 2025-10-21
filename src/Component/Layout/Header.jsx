import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // bg-blue-800: fond bleu foncé | text-white: texte blanc | p-4: padding | shadow-lg: ombre
    <header className="bg-blue-800 text-white p-4 shadow-lg">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* Logo/Nom de l'Association */}
        <Link to="/" className="text-2xl font-bold hover:text-yellow-300 transition duration-300">
          Association Culturelle
        </Link>
        
        {/* Liens de Navigation */}
        <div className="space-x-4">
          <Link to="/ateliers" className="hover:text-yellow-300">Ateliers</Link>
          <Link to="/evenements" className="hover:text-yellow-300">Événements</Link>
          <Link to="/soutenir" className="hover:text-yellow-300 font-semibold bg-yellow-600 px-3 py-1 rounded">Soutenir</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;