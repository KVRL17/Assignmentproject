import React from 'react';
import { Heart, Share2, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <>
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out z-20 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`} style={{ width: '400px' }}>
        <div className="p-8 h-full overflow-y-auto">
          {/* Back Arrow */}
          <button className="mb-6 p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Title */}
          <h1 className="text-2xl font-light text-gray-900 mb-8 leading-tight tracking-wide">
            MAITREYA BUDDHA<br />
            IN GESTURE OF<br />
            FEARLESSNESS<br />
            <span className="text-lg">(ABHAYA MUDRA)</span>
          </h1>

          {/* Action Icons */}
          <div className="flex items-center gap-8 mb-8">
            <div className="flex flex-col items-center">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className="w-6 h-6 text-gray-600" />
              </button>
              <span className="text-sm text-gray-500 mt-1">0</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Share2 className="w-6 h-6 text-gray-600" />
              </button>
              <span className="text-sm text-gray-500 mt-1">120</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Eye className="w-6 h-6 text-gray-600" />
              </button>
              <span className="text-sm text-gray-500 mt-1">27</span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4 mb-8 text-sm text-gray-700">
            <div>
              <span className="font-medium">Dynasty:</span> Ahichchhatra
            </div>
            <div>
              <span className="font-medium">Period:</span> 200 CE
            </div>
            <div>
              <span className="font-medium">Material:</span> Sandstone
            </div>
            <div>
              <span className="font-medium">Location:</span> National Museum
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="font-medium text-gray-900 mb-4">Description:</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Maitreya, the future Buddha to be, resides in the Tushita heaven as a bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is the eighth Buddha, a successor of the seven historical Buddhas (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya Buddha will be born in Ketumati, in present-day Varanasi, Uttar Pradesh. As a bodhisattva, Maitreya wears a heavily adorned with earrings, wristlets, necklaces, and an amulet. The
            </p>
            <button className="text-orange-600 text-sm font-medium hover:text-orange-700 transition-colors flex items-center">
              → READ MORE
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="bg-orange-600 text-white px-6 py-3 rounded font-medium hover:bg-orange-700 transition-colors">
              ADD TO COLLECTION
            </button>
            <button className="border border-orange-600 text-orange-600 px-6 py-3 rounded font-medium hover:bg-orange-50 transition-colors">
              SOUVENIR
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className={`fixed top-1/2 -translate-y-1/2 z-30 bg-white shadow-lg rounded-r-lg p-3 hover:bg-gray-50 transition-all duration-300 ${
          isOpen ? 'left-96' : 'left-0'
        }`}
      >
        {isOpen ? (
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-600" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default Sidebar;