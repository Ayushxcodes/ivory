"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollToFooter = () => {
    const footer = document.getElementById("contact");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // close mobile menu if open
    }
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* Logo */}
      <Link href="/">
        <h1 className="text-2xl lg:text-3xl font-extrabold text-yellow-50 tracking-tight">
          Ivory Tours & Travels
        </h1>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            {link.href === "#contact" ? (
              <button
                onClick={handleScrollToFooter}
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </button>
            ) : (
              <Link
                href={link.href}
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Contact Us"
          icon="/user.svg"
          variant="btn_dark_yellow"
          onClick={handleScrollToFooter}
        />
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden relative">
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute right-0 top-12 w-48 bg-gray-900 rounded-lg shadow-lg flex flex-col p-4 gap-4">
            {NAV_LINKS.map((link) =>
              link.href === "#contact" ? (
                <button
                  key={link.key}
                  onClick={handleScrollToFooter}
                  className="text-white text-lg text-left hover:font-bold"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.key}
                  href={link.href}
                  className="text-white text-lg hover:font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Button
              type="button"
              title="Contact Us"
              icon="/user.svg"
              variant="btn_dark_yellow"
              onClick={handleScrollToFooter}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
