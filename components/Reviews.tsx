"use client";

import React from "react";
import { motion } from "framer-motion";
import { StarIcon, UserIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    name: "Ankit Agarwal",
    role: "Local Guide · 33 reviews",
    quote:
      "Our hotel booking in Cherapunji (Meghalaya) was a fantastic experience through Ivory Tours and Travels. Smooth check-in and check-out with all details already provided to the hotel front desk. The hotel was exactly as promised.",
  },
  {
    name: "Harsh Maheshwari",
    role: "7 reviews",
    quote:
      "We went for Mahakumbh at Prayagraj in Feb 2025 and stayed at Nagaland Pavilion Camp booked by Ivory. It was a wonderful stay—neat, clean, with attentive and courteous staff.",
  },
  {
    name: "Sunita Bharatia",
    role: "5 reviews",
    quote:
      "Decent driver. Arrived before time. Safe trip within Guwahati city and to Nagaon.",
  },
  {
    name: "Vidhi Kanoria",
    role: "4 reviews",
    quote:
      "Best tour & travels company. They go above and beyond! I had lost my passport which was wrongly delivered elsewhere—they tracked it and saved me. Truly grateful.",
  },
  {
    name: "Krishan Kumar",
    role: "4 reviews",
    quote:
      "My trip to Meghalaya was wonderful. The arrangements—boarding, lodging, logistics, and sightseeing—were mesmerizing.",
  },
  {
    name: "Gautam Agarwala",
    role: "5 reviews",
    quote:
      "The finest and most alert tour organisers. They understand customer needs and deliver their best. We had an excellent experience.",
  },
  {
    name: "Sunil Agarwal",
    role: "1 review",
    quote:
      "We visited Prayagraj for the Mahakumbh in Feb 2025 and stayed at the Nagaland Pavilion Camp booked through Ivory. The property was clean, well-maintained, and the staff was courteous. The food was excellent too.",
  },
  {
    name: "Saurabh Agarwal",
    role: "1 review · 11 photos",
    quote:
      "Thank you Prachi ji for your support and arrangements. Everything was smooth and well-managed.",
  },
  {
    name: "Vineeta Goyal",
    role: "6 reviews · 5 photos",
    quote:
      "Ivory Tours & Travels is reliable and customer-focused. They made our trip memorable with great service.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
          What Our Customers Say
        </h2>

        {/* Marquee container */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40, // speed of marquee
            }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] max-w-sm bg-white border border-black rounded-xl shadow-sm p-6 flex flex-col justify-between"
              >
                {/* Stars */}
                <div className="flex mb-3 justify-center">
                  {[...Array(5)].map((_, idx) => (
                    <StarIcon key={idx} className="w-5 h-5 text-yellow-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 italic mb-4 text-center">
                  “{t.quote}”
                </p>

                {/* Name + Icon */}
                <div className="flex items-center justify-center gap-2">
                  <UserIcon className="w-6 h-6 text-gray-600" />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg text-gray-900">
                      {t.name}
                    </h3>
                    <span className="text-sm text-gray-500">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
