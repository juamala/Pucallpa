import React, { useState } from 'react';
import metodosPago from '../mock/metodoPago';

const MetodoPagoSelector = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <div className="px-4 py-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Método de Pago</h2>
      <div className="grid grid-cols-3 gap-4">
        {metodosPago.map(metodo => (
          <button 
            key={metodo.id}
            onClick={() => setSelectedMethod(metodo.id)}
            className={`py-3 px-2 rounded-xl border-2 transition ${
              selectedMethod === metodo.id 
                ? 'bg-black text-white border-black' 
                : 'bg-white text-gray-700 border-gray-300 hover:border-black'
            }`}
          >
            {metodo.nombre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MetodoPagoSelector;