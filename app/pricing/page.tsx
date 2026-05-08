"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    { name: "Starter", price: "$0", desc: "Basic access for testing" },
    { name: "Pro", price: "$19", desc: "Full SaaS features unlocked" },
    { name: "Enterprise", price: "$49", desc: "Advanced business tools" },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-white px-10 py-20"
    >
      <h1 className="text-5xl font-bold">Pricing</h1>
      <p className="text-gray-400 mt-4">
        Simple, powerful and scalable pricing.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.15 }}
            className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl text-center cursor-pointer"
          >
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-4xl font-bold mt-4">{p.price}</p>
            <p className="text-gray-400 mt-2 text-sm">{p.desc}</p>

            <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl">
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-20">
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.08 }}
            className="px-8 py-4 bg-white/10 border border-white/10 rounded-2xl"
          >
            Contact Sales
          </motion.button>
        </Link>
      </div>
    </motion.main>
  );
}