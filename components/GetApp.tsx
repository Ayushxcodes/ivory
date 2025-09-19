"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="get-app relative flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        {/* Left Content */}
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-8 lg:gap-12">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bold-40 lg:bold-64 xl:max-w-[400px]"
          >
            Get in Touch with Us!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="regular-16 text-gray-10 xl:max-w-[480px]"
          >
            Reach out to Ivory Tours & Travels and let us plan your perfect
            adventure. Our team is ready to help you explore breathtaking
            destinations and create unforgettable memories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex w-full flex-col gap-3 xl:flex-row"
          >
            <Button
              type="button"
              title="Contact Us"
              variant="btn_yellow"
              full
            />
            <Button
              type="button"
              title="Request Quote"
              variant="btn_white_text"
              full
            />
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="flex flex-1 items-center justify-end relative"
        >
          <Image
            src="/phones.png"
            alt="phones"
            width={550}
            height={870}
            className="rounded-3xl shadow-xl object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetApp;
