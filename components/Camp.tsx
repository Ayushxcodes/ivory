"use client";

import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className={`relative h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat bg-animate lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="relative z-10 flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        {/* Top part */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flexCenter gap-4"
        >
          <div className="rounded-full bg-yellow-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </motion.div>

        {/* Bottom part */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flexCenter gap-6"
        >
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url, index) => (
              <motion.div
                key={index}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  className="inline-block h-10 w-10 rounded-full"
                  src={url}
                  alt="person"
                  width={52}
                  height={52}
                />
              </motion.div>
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      {/* Camps scrollable section */}
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      {/* Bottom info card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6"
      >
        <div className="relative w-full overflow-hidden rounded-3xl bg-yellow-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Camp;
