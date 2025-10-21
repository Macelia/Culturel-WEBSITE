import React from 'react';

const Footer = () => {
  return (
    // bg-gray-900: fond très sombre | mt-auto: assure qu'il reste en bas de l'écran
    <footer className="bg-gray-900 text-white p-6 mt-auto">
      <div className="max-w-6xl mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Association Culturelle. Tous droits réservés.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-blue-400">Mentions Légales</a>
          <a href="#" className="hover:text-blue-400">Politique de Confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;