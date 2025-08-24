

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BeginnerRegistration() {
  const [email, setEmail] = useState('');
  const [showOtpPopup, setShowOtpPopup] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Sending OTP to:", email);
    setShowOtpPopup(true);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col">
      
      {/*Header at the top */}
      <header className="py-4 px-8">
        <h2 className="text-xl font-bold">Beginners Registration Panel 🛡️</h2>
      </header>

      {/* main content to center it */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg text-center">
          <h1 className="text-4xl font-bold mb-2">Beginners Registration For Free Course</h1>
          <p className="text-lg text-gray-400 mb-8">
            Welcome to the field of Cyber Security where you can challenge the world using your skills.
          </p>

          {!showOtpPopup ? (
            // Registration Form
            <form onSubmit={handleEmailSubmit} className="bg-gray-800 p-8 rounded-lg shadow-xl">
              <div className="mb-4 text-left">
                <label htmlFor="username" className="block text-gray-300 text-sm font-bold mb-2">Username</label>
                <input type="text" id="username" name="username" required className="w-full bg-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div className="mb-6 text-left">
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email Address</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <button type="submit" className="w-full bg-red-600 font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors">
                Send OTP
              </button>
            </form>
          ) : (
            // OTP Popup Form
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-4">Please enter the OTP we sent to your email.</h3>
              <form>
                 <div className="mb-6 text-left">
                  <label htmlFor="otp" className="block text-gray-300 text-sm font-bold mb-2">OTP Code</label>
                  <input type="text" id="otp" name="otp" maxLength="6" className="w-full text-center tracking-[1em] bg-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                <button type="submit" className="w-full bg-green-600 font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Verify & Register
                </button>
              </form>
            </div>
          )}
          
          <Link to="/" className="text-gray-500 hover:text-red-400 mt-8 inline-block">&larr; Back to Home</Link>
        </div>
      </main>
    </div>
  );
}
