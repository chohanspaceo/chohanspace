"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Features() {
  const features = [
    { title: "⚡ Ultra Fast", desc: "Optimized Next.js App Router architecture" },
    { title: "🎨 Glass UI", desc: "iOS-style blur, depth and modern UI system" },
    { title: "🔐 Secure", desc: "Built with production-grade structure" },
    { title: "📈 Scalable", desc: "Ready for SaaS, startups and enterprise" },
    { title: "🤖 AI Ready", desc: "Easy integration with AI systems" },
    { title: "🌐 Global", desc: "Works fast anywhere in the world" },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-white px-10 py-20"
    >
      <h1 className="text-5xl font-bold">Features</h1>
      <p className="text-gray-400 mt-4 max-w-xl">
        Everything built for performance, design and scalability.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl cursor-pointer"
          >
            <h2 className="text-xl font-semibold">{f.title}</h2>
            <p className="text-gray-400 mt-2 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <Link href="/pricing">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black rounded-2xl font-semibold"
          >
            View Pricing
          </motion.button>
        </Link>
      </div>
    </motion.main>
  );
}