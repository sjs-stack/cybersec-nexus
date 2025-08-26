// FILE: src/pages/HomePage.js (Updated with local images)

import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LiveClassCard from '../components/LiveClassCard';
import Footer from '../components/Footer';
import SignUpModal from '../components/SignUpModal';

// 1. Import your professional images from the assets folder
import beginnerImg from '../assets/beginner.png';      // Make sure this filename is correct
import intermediateImg from '../assets/intermediate.png';// Make sure this filename is correct
import advancedImg from '../assets/advanced.png';      // Make sure this filename is correct

// 2. Update this array to use the imported image variables
const liveClassesData = [
    { 
        title: 'Intro to Network Pentesting', 
        description: 'A live, interactive session covering the basics of network penetration testing. Perfect for beginners.', 
        level: 'Beginner', 
        image: beginnerImg, 
        link: '/register/beginner' 
    },
    { 
        title: 'Advanced Web App Exploitation', 
        description: 'A deep dive into common web vulnerabilities like SQLi, XSS, and CSRF.', 
        level: 'Intermediate', 
        image: intermediateImg, 
        link: '/register/intermediate' 
    },
    { 
        title: 'Malware Analysis Fundamentals', 
        description: 'Learn how to safely analyze, reverse-engineer, and understand malicious software.', 
        level: 'Advanced', 
        image: advancedImg, 
        link: '/register/advanced' 
    }
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-900 text-gray-200 font-sans">
      <Header onGetStartedClick={openModal} />
      <main>
        <HeroSection />
        <section id="live-classes" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                Choose Your Path
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {liveClassesData.map((course, index) => (
                    <LiveClassCard key={index} course={course} />
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SignUpModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
