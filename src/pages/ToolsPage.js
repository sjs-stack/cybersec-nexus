import React from 'react';
import { Link } from 'react-router-dom';

// Helper component for a single tool
const ToolCard = ({ name, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors">
    <h3 className="text-xl font-bold text-white">{name}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
  </div>
);

// Helper component for a category of tools
const ToolCategory = ({ title, tools }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold text-white border-b-2 border-red-500 pb-2 mb-8">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {tools.map(tool => <ToolCard key={tool.name} {...tool} />)}
    </div>
  </div>
);

export default function ToolsPage() {
  const wirelessTools = [
    { name: 'Aircrack-ng', description: 'A complete suite of tools to assess Wi-Fi network security.' },
    { name: 'Wireshark', description: 'A powerful network protocol analyzer.' },
    { name: 'Kismet', description: 'A wireless network detector, sniffer, and intrusion detection system.' },
    { name: 'Reaver', description: 'Brute force attacks against Wi-Fi Protected Setup (WPS).' },
  ];

  const webAppTools = [
    { name: 'Burp Suite', description: 'The premier tool for web application security testing.' },
    { name: 'OWASP ZAP', description: 'An open-source web application security scanner.' },
    { name: 'Nikto', description: 'A web server scanner which performs comprehensive tests.' },
    { name: 'SQLMap', description: 'An open-source penetration testing tool that automates SQL injection.' },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="bg-gray-800 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Cybersecurity Toolkit 🧰</h1>
          <Link to="/" className="text-gray-400 hover:text-red-400">&larr; Back to Home</Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <ToolCategory title="Wireless Hacking Tools" tools={wirelessTools} />
        <ToolCategory title="Web Application Tools" tools={webAppTools} />
        {/* You can add more categories here */}
      </main>
    </div>
  );
}
