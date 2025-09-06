"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ---------- Navbar Wrapper ----------
export function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </nav>
  );
}

// ---------- Desktop Navbar ----------
export function NavBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="hidden h-16 items-center justify-between md:flex">
      {children}
    </div>
  );
}

export function NavItems({ items }: { items: { name: string; link: string }[] }) {
  return (
    <div className="flex space-x-6">
      {items.map((item, i) => (
        <Link
          key={i}
          href={item.link}
          className="text-gray-700 transition hover:text-indigo-600 dark:text-gray-200"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

// ---------- Mobile Navbar ----------
export function MobileNav({ children, visible }: { children: React.ReactNode; visible?: boolean }) {
  return <div className={cn("md:hidden", !visible && "hidden")}>{children}</div>;
}

export function MobileNavHeader({ children }: { children: React.ReactNode }) {
  return <div className="flex h-16 items-center justify-between">{children}</div>;
}

export function MobileNavToggle({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="p-2 text-gray-700 transition hover:text-indigo-600 dark:text-gray-200"
    >
      {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
    </button>
  );
}

export function MobileNavMenu({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-16 left-0 w-full bg-white p-4 shadow-md dark:bg-gray-800"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ---------- Brand & Buttons ----------
export function NavbarLogo() {
  return (
    <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
      HackHub
    </Link>
  );
}

export function NavbarButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700",
        className
      )}
    >
      {children}
    </Link>
  );
}
