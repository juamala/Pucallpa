import React from 'react';
import tiendas from '../mock/tiendas';
import TiendaCard from './TiendaCard';

const TiendasList = () => {
  return (
    <div className="px-4 py-6 mt-24 mb-20">
      <h2 className="text-2xl font-bold mb-4">Tiendas Disponibles</h2>
      {tiendas.map(tienda => (
        <TiendaCard 
          key={tienda.id} 
          tienda={tienda} 
        />
      ))}
    </div>
  );
};

export default TiendasList;