
import React from 'react';
import { Link } from 'react-router-dom';

// Helper component for individual videos
const VideoCard = ({ videoId, title, description }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  </div>
);

export default function TutorialsPage() {
  const [search, setSearch] = React.useState("");
  const tutorials = [
    {
  videoId: "v7BNtpw53AA",
      title: "Cyber Security Roadmap 2024",
      description: "A complete guide for anyone looking to start their career in cybersecurity.",
    },
    {
      videoId: "3Kq1MIfTz5o",
      title: "Learn Ethical Hacking",
      description: "A full beginner-level course on ethical hacking and penetration testing.",
    },
    {
      videoId: "z5nc9MDbvkw",
      title: "Networking for Ethical Hackers",
      description: "Understand the fundamental networking concepts required for cybersecurity.",
    },
    {
      videoId: "YgUk9BBaBho",
      title: "Roadmap for Ethical Hacker (YouTube)",
      description: "A detailed roadmap video for aspiring ethical hackers. (Added by user)",
    },
  ];

  const filtered = tutorials.filter(tut =>
    tut.title.toLowerCase().includes(search.toLowerCase()) ||
    tut.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="bg-gray-800 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Cybersecurity Tutorials </h1>
          <Link to="/" className="text-gray-400 hover:text-red-400">&larr; Back to Home</Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search tutorials..."
            className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length > 0 ? (
            filtered.map(tut => (
              <VideoCard
                key={tut.videoId}
                videoId={tut.videoId}
                title={tut.title}
                description={tut.description}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400">No tutorials found.</div>
          )}
        </div>
      </main>
    </div>
  );
}
