import React from 'react';
import LayoutHeader from './components/LayoutHeader';
import HomeHero from './components/HomeHero';
import TiendasList from './components/TiendasList';
import BottomNavigation from './components/BottomNavigation';
import MetodoPagoSelector from './components/MetodoPagoSelector';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen max-w-md mx-auto relative">
      <LayoutHeader />
      <HomeHero />
      <TiendasList />
      <MetodoPagoSelector />
      <BottomNavigation />
    </div>
  );
};

export default App;

// DONE