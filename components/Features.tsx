"use client";
import { FEATURES } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="flex flex-col items-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 md:py-32 lg:py-40">
      <div className="max-container padding-container relative w-full flex flex-col lg:flex-row justify-between items-start">
        {/* Feature Phone Image */}
        <div className="flex flex-1 lg:min-h-[900px] justify-center lg:justify-end relative mb-12 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <Image
              src="/phone.png"
              alt="phone"
              width={440}
              height={1000}
              className="feature-phone"
            />
          </motion.div>
        </div>

        {/* Features List */}
        <div className="z-20 flex w-full lg:w-[60%] flex-col">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-8"
          >
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </motion.div>

          <motion.ul
            className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-20"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {FEATURES.map((feature, i) => (
              <FeatureItem
                key={feature.title}
                index={i}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
  index: number;
};

const FeatureItem = ({ title, icon, description, index }: FeatureItemProps) => {
  return (
    <motion.li
      className="flex w-full flex-col items-start rounded-2xl p-5 md:p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 bg-white/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
    >
      <div className="rounded-full p-4 lg:p-6 bg-yellow-50 shadow-md">
        <Image src={icon} alt={title} width={28} height={28} />
      </div>
      <h3 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h3>
      <p className="regular-16 mt-3 text-gray-700 lg:mt-5">{description}</p>
    </motion.li>
  );
};

export default Features;
