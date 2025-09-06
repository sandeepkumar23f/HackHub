// components/EventsPage.tsx
import React from "react";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  type: "Quiz" | "Coding" | "Hackathon";
}

const EventCard = ({ title, date, description, type }: EventCardProps) => {
  const typeColors = {
    Quiz: "bg-blue-500 text-white",
    Coding: "bg-green-500 text-white",
    Hackathon: "bg-purple-500 text-white",
  };

  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="px-6 py-8">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${typeColors[type]}`}>
          {type}
        </span>
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{description}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{date}</p>
      </div>
      {/* Optional gradient overlay for visual effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent pointer-events-none" />
    </div>
  );
};

export default function EventsPage() {
  const events = [
    {
      title: "JavaScript Quiz Challenge",
      date: "Sep 12, 2025",
      description: "Test your JS knowledge with timed quizzes.",
      type: "Quiz",
    },
    {
      title: "HackHub Coding Contest #5",
      date: "Sep 20, 2025",
      description: "Solve real-world coding problems and win prizes.",
      type: "Coding",
    },
    {
      title: "AI Hackathon 2025",
      date: "Oct 5-7, 2025",
      description: "Build innovative AI projects and showcase your skills.",
      type: "Hackathon",
    },
    {
      title: "ReactJS Quiz Marathon",
      date: "Sep 25, 2025",
      description: "Challenge your React knowledge with timed quizzes.",
      type: "Quiz",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
          Upcoming Events
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore the latest quizzes, coding contests, and hackathons curated for the tech community.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            description={event.description}
            type={event.type as "Quiz" | "Coding" | "Hackathon"}
          />
        ))}
      </div>
    </section>
  );
}
