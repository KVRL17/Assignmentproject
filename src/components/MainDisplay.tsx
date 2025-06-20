import React from 'react';

interface MainDisplayProps {
  sidebarOpen: boolean;
}

const MainDisplay: React.FC<MainDisplayProps> = ({ sidebarOpen }) => {
  return (
    <div className={`fixed inset-0 transition-all duration-300 ${
      sidebarOpen ? 'lg:left-96' : 'left-0'
    }`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/GreyImage.jpg)',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-gray-700/20 to-gray-900/40" />
      </div>

      {/* Statue Image Container */}
      <div className="relative h-full flex items-center justify-center p-8">
        <div className="relative max-w-2xl max-h-full">
          {/* Statue Image */}
          <img
            src="/StatueImage.png"
            alt="Maitreya Buddha Statue"
            className="w-full h-auto max-h-[100vh] object-contain drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))',
            }}
          />
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-radial from-amber-200/10 via-transparent to-transparent rounded-full blur-3xl" />
        </div>
      </div>

      {/* Collapse indicator for mobile */}
      <div className="absolute top-4 left-4 lg:hidden">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
          <div className="w-6 h-1 bg-gray-400 rounded-full mb-1" />
          <div className="w-4 h-1 bg-gray-400 rounded-full mb-1" />
          <div className="w-5 h-1 bg-gray-400 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default MainDisplay;