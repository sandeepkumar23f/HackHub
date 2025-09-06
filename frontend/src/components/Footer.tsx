export default function Footer() {
  return (
    <footer className="bg-gray-800 text-center py-6 mt-10">
      <p className="text-gray-400">
        © {new Date().getFullYear()} HackHub. All rights reserved.
      </p>
    </footer>
  );
}
