// components/About.tsx
import React from "react";

export default function About() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white py-23 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
          About HackHub
        </h2>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          HackHub is a platform for tech enthusiasts to host and join quizzes, coding contests, and hackathons. 
          We aim to help you learn, compete, and grow within a thriving community of developers and innovators.
        </p>

        {/* Founder Section */}
        <div className="flex flex-col items-center mb-16">
          <img
            src="img.jpg"
            alt="Founder Sandeep"
            className="w-32 h-32 rounded-full mb-4 border-4 border-white shadow-lg"
          />
          <h3 className="text-2xl font-semibold">Sandeep Kumar</h3>
          <p className="text-indigo-100 mt-1 text-sm">Founder & CEO</p>
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transform transition duration-300">
            <div className="text-5xl mb-4">📝</div>
            <h4 className="text-xl font-semibold mb-2">Quizzes</h4>
            <p className="text-indigo-100">
              Test your knowledge with timed quizzes on multiple topics.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transform transition duration-300">
            <div className="text-5xl mb-4">💻</div>
            <h4 className="text-xl font-semibold mb-2">Coding Contests</h4>
            <p className="text-indigo-100">
              Solve real-world coding problems and climb the leaderboard.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transform transition duration-300">
            <div className="text-5xl mb-4">🏆</div>
            <h4 className="text-xl font-semibold mb-2">Hackathons</h4>
            <p className="text-indigo-100">
              Build projects, showcase your skills, and win exciting prizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
