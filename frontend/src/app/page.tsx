"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/Navbar";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Events", link: "/events" },
    { name: "About", link: "/about" },
    { name: "Login", link: "/login" },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar>
        {/* Desktop Navbar */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navLinks} />
          <NavbarButton href="/create-event">Create Event 🚀</NavbarButton>
        </NavBody>

        {/* Mobile Navbar */}
        <MobileNav visible>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="flex flex-col w-full gap-2">
              {navLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="block w-full py-2 px-4 text-lg font-medium text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <NavbarButton
                href="/create-event"
                className="mt-2 w-full text-center"
              >
                Create Event 🚀
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Spacer to prevent navbar overlap */}
      <div className="h-14 md:h-16" />

      {/* Hero Section */}
      <Hero />

      {/* Footer */}
      <Footer />
    </>
  );
}
