import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

export default function LiveClassCard({ course }) {
    const levelColor = { 
        'Beginner': 'bg-green-500', 
        'Intermediate': 'bg-blue-500', 
        'Advanced': 'bg-purple-500' 
    };

    return (
        // The entire card is now a link to the registration page
        <Link to={course.link} className="block group">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col group-hover:shadow-red-500/50 transition-shadow duration-300">
                {/* Image replaces the "Live Session" text */}
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                
                <div className="p-6 flex flex-col flex-grow">
                    <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white ${levelColor[course.level]} self-start`}>
                        {course.level}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-4 mb-2">{course.title}</h3>
                    <p className="text-gray-400 text-base flex-grow">{course.description}</p>
                    <div className="mt-6 text-center border-2 border-red-600 text-red-500 font-bold py-2 px-4 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-colors">
                        Register Now
                    </div>
                </div>
            </div>
        </Link>
    );
};
