export default function Hero() {
  return (
    <section className="text-center py-80 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-700 to-purple-700">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
        Host & Join Quizzes, Coding Contests & Hackathons 🚀
      </h1>
      <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
        A platform to learn, compete, and grow with the tech community.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="/events"
          className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Explore Events
        </a>
        <a
          href="/create-event"
          className="px-6 py-3 bg-indigo-900 border border-white rounded-lg font-semibold hover:bg-indigo-800 transition"
        >
          Create Event
        </a>
      </div>
    </section>
  );
}
