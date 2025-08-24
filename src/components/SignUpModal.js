// FILE: src/components/SignUpModal.js

import React from 'react';

export default function SignUpModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Create Your Account</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>
        
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>

          {/* This is the changed section */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-300 text-sm font-bold mb-2">Username</label>
            <input type="text" id="username" name="username" className="w-full bg-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email Address</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
          <button type="submit" className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
