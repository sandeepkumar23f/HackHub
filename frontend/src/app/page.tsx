"use client";

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
import { useState } from "react";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
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
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navLinks} />
          <NavbarButton href="/create-event">Create Event 🚀</NavbarButton>
        </NavBody>

        <MobileNav visible>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {navLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="block w-full py-2 text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <NavbarButton href="/create-event" className="mt-4 w-full">
              Create Event 🚀
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

    <br /><br /><br />
      <Hero />
      <Highlights />
      <Footer />
    </>
  );
}
