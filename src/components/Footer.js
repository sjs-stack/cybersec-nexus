import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-800">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">&copy; 2025 CyberSec Nexus. All Rights Reserved.</p>
                    <div className="flex mt-4 md:mt-0 space-x-6">
                        <a href="https://x.com/irfan_sec" className="text-gray-400 hover:text-white">Twitter</a>
                        <a href="https://www.linkedin.com/in/irfan-security" className="text-gray-400 hover:text-white">LinkedIn</a>
                        <a href="https://github.com/irfan-sec" className="text-gray-400 hover:text-white">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
