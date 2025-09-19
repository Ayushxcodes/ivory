"use client";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter bg-gray-10 py-16">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        {/* Top Section */}
        <div className="flex flex-col items-start justify-between gap-14 md:flex-row md:items-start">
          {/* Logo / Brand */}
          <Link href="/" className="mb-8 md:mb-0">
            <h1 className="text-3xl lg:text-4xl font-bold text-yellow-50">
              Ivory Tours & Travels
            </h1>
          </Link>

          {/* Links Columns */}
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link
                      href="/"
                      key={link}
                      className="hover:text-yellow-50 transition-colors"
                    >
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            {/* Contact Info */}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-2 md:flex-col lg:flex-row hover:text-yellow-50 transition-colors"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link
                      href="/"
                      key={link}
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src={link}
                        alt="social-icon"
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-20" />

        {/* Bottom Text */}
        <p className="regular-14 w-full text-center text-gray-30">
          2025 Ivory Tours & Travels | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
