import React from 'react';

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-500"></div>
    </div>
  );
}
