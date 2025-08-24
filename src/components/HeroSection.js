// FILE: src/components/HeroSection.js (Updated)

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

// ... (keep your PrimaryButton and SecondaryButton components here)

export default function HeroSection() {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
                
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    A New Era of{' '}
                    <TypeAnimation
                        sequence={[
                            'Cybersecurity',
                            2000,
                            'Education',
                            2000,
                        ]}
                        wrapper="span"
                        speed={30} // <-- CHANGED: Slower typing speed
                        deletionSpeed={30} // <-- NEW: Slower deletion for a smoother feel
                        className="text-red-500"
                        repeat={Infinity}
                    />
                </h1>

                <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                    Built by experts, for aspiring experts. Access free, high-quality resources to accelerate your journey in cybersecurity.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    {/* ... your buttons ... */}
                </div>
            </div>
        </section>
    );
}
