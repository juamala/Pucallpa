import React from 'react';
import restaurantes from '../mock/restaurantes';
import RestauranteCard from './RestauranteCard';

const RestaurantesList = () => {
  return (
    <div className="px-4 py-6 mt-24 mb-20">
      <h2 className="text-2xl font-bold mb-4">Restaurantes Cerca</h2>
      {restaurantes.map(restaurante => (
        <RestauranteCard 
          key={restaurante.id} 
          restaurante={restaurante} 
        />
      ))}
    </div>
  );
};

export default RestaurantesList;