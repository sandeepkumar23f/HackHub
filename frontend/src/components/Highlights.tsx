import HighlightCard from "./HighlightCard";

export default function Highlights() {
  return (
    <section className="py-16 px-10 grid md:grid-cols-3 gap-8">
      <HighlightCard
        title="Quizzes"
        desc="Test your knowledge with timed quizzes on various topics."
        icon="📝"
      />
      <HighlightCard
        title="Coding Contests"
        desc="Solve real-world coding problems and climb the leaderboard."
        icon="💻"
      />
      <HighlightCard
        title="Hackathons"
        desc="Build projects, showcase your skills, and win exciting prizes."
        icon="🏆"
      />
    </section>
  );
}
