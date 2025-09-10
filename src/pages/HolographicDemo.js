import React from 'react';
import { Link } from 'react-router-dom';
import HolographicScene from '../components/HolographicScene';

export default function HolographicDemo() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Navigation overlay */}
      <div className="absolute top-4 left-4 z-10">
        <Link 
          to="/" 
          className="bg-gray-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-gray-800/80 transition-colors border border-gray-700"
        >
          ← Back to Home
        </Link>
      </div>
      
      {/* Info overlay */}
      <div className="absolute bottom-4 right-4 z-10 bg-gray-900/80 backdrop-blur-sm text-white p-4 rounded-lg border border-gray-700 max-w-sm">
        <h3 className="text-lg font-bold mb-2">3D Holographic Interface</h3>
        <p className="text-sm text-gray-300 mb-2">
          Experience the future of cybersecurity visualization with this interactive 3D holographic interface.
        </p>
        <div className="text-xs text-gray-400">
          <p>• Drag to rotate the view</p>
          <p>• Scroll to zoom in/out</p>
          <p>• Watch the navigation panels orbit</p>
        </div>
      </div>
      
      {/* Main 3D scene */}
      <HolographicScene />
    </div>
  );
}