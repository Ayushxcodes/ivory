"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      className="relative max-container padding-container flex flex-col-reverse xl:flex-row items-center gap-16 md:gap-24 lg:gap-28 
  py-20 md:py-24 lg:py-28 xl:py-32
  pt-32 sm:pt-36 md:pt-40"
    >
      {" "}
      {/* Map background */}
      <div className="hero-map absolute inset-0 -z-10" />
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex flex-1 flex-col items-center xl:items-start text-center xl:text-left w-full max-w-[600px]"
      >
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-2 md:left-[-5px] top-[-25px] w-8 md:w-10 lg:w-[50px]"
        />

        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Discover Your Next Adventure
        </h1>

        <p className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg xl:max-w-[520px]">
          Explore breathtaking destinations, plan unforgettable trips, and make
          memories that last forever. From mountains to beaches, your dream
          journey starts here.
        </p>

        {/* Reviews */}
        <div className="my-8 flex flex-wrap justify-center xl:justify-start gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              ))}
          </div>
          <p className="font-bold text-blue-600 text-sm sm:text-base md:text-lg">
            198k
            <span className="ml-1 font-normal text-gray-700">
              Happy Travelers
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center xl:justify-start">
          <Button
            type="button"
            title="Start Your Journey"
            variant="btn_yellow"
          />
          <Button
            type="button"
            title="Watch Video"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </motion.div>
      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-1 justify-center items-center w-full max-w-[500px]"
      >
        {/* Floating Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 flex w-[200px] sm:w-[240px] md:w-[260px] flex-col gap-4 sm:gap-6 rounded-xl sm:rounded-2xl bg-yellow-500 px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 shadow-xl"
        >
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="text-xs sm:text-sm text-gray-100">Location</p>
              <Image src="/close.svg" alt="close" width={18} height={18} />
            </div>
            <p className="font-bold text-white text-sm sm:text-lg md:text-xl">
              Santorini, Greece
            </p>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="text-xs sm:text-sm text-gray-100">Best Time</p>
              <p className="font-bold text-white text-sm sm:text-lg md:text-xl">
                May - Sep
              </p>
            </div>
            <div className="flex flex-col text-right">
              <p className="text-xs sm:text-sm text-gray-100">Rating</p>
              <p className="font-bold text-white text-sm sm:text-lg md:text-xl">
                4.9/5
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
