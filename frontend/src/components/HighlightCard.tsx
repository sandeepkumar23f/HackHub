interface HighlightProps {
  title: string;
  desc: string;
  icon: string;
}

export default function HighlightCard({ title, desc, icon }: HighlightProps) {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-md hover:scale-105 transition">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}
