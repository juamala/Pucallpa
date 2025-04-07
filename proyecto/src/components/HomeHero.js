import React from 'react';

const HomeHero = () => {
  return (
    <div className="bg-gradient-to-br from-black to-gray-800 text-white py-12 px-4 rounded-b-3xl shadow-2xl">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-4">¿Qué necesitas hoy?</h2>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Busca tiendas, productos..." 
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;