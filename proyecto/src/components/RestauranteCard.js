import React from 'react';

const RestauranteCard = ({ restaurante }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4 transform transition hover:scale-105 hover:shadow-xl">
      <img 
        src={restaurante.imagen} 
        alt={restaurante.nombre} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{restaurante.nombre}</h3>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
            {restaurante.rating}
          </span>
        </div>
        <div className="flex justify-between items-center text-gray-600">
          <p>{restaurante.categoria}</p>
          <p>{restaurante.tiempoEntrega}</p>
        </div>
      </div>
    </div>
  );
};

export default RestauranteCard;