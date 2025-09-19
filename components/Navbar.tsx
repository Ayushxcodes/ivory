"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* Text Logo for Ivory Tours & Travels */}
      <Link href="/">
        <h1 className="text-2xl lg:text-3xl font-extrabold text-yellow-50 tracking-tight">
          Ivory Tours & Travels
        </h1>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Login / Contact Button */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Contact Us"
          icon="/user.svg"
          variant="btn_dark_yellow"
        />
      </div>

      {/* Mobile Menu Icon */}
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
