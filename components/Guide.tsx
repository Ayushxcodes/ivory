"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Guide = () => {
  return (
    <section className="flex flex-col items-center relative py-16 md:py-24 lg:py-32">
      {/* Header */}
      <div className="padding-container max-container w-full text-center md:text-left pb-12 md:pb-20">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="mx-auto md:mx-0"
        />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We Are Here For You
        </p>

        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12 items-center lg:items-start">
          <motion.h2
            className="bold-40 lg:bold-64 xl:max-w-[400px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Your <span className="text-yellow-50">Guide</span> to an Easy Path
          </motion.h2>

          <motion.p
            className="regular-16 text-gray-30 xl:max-w-[520px] mt-4 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Only with the <strong>Ivory Tours & Travels</strong> app you won’t
            get lost again. We provide offline maps, guided routes, and share
            tips for exploring valleys, rivers, and mountains safely. Invite
            friends and make memories while reaching the top of adventure!
          </motion.p>
        </div>
      </div>

      {/* Travel Image with floating card */}
      <div className="flex justify-center relative max-container w-full">
        {/* Background Travel Image */}
        <motion.img
          src="/boat.png"
          alt="Travel Adventure"
          className="w-full object-cover object-center 2xl:rounded-5xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Floating Info Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute bottom-6 left-4 sm:left-6 md:left-[5%] z-50 flex w-[200px] sm:w-[240px] md:w-[280px] flex-col gap-4 sm:gap-6 rounded-2xl bg-white px-4 sm:px-6 py-4 shadow-xl border"
        >
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="regular-16 text-gray-600">Destination</p>
              <p className="bold-16 text-green-50">48 min</p>
            </div>
            <p className="bold-20 mt-2">Aguas Calientes</p>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="regular-16 text-gray-600">Start Track</p>
              <p className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </p>
            </div>
            <div className="flex flex-col text-right">
              <p className="regular-16 text-gray-600">Rating</p>
              <p className="bold-20 mt-2 text-green-50">4.9/5</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guide;
