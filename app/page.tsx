"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen transition-colors duration-500 bg-black text-white relative overflow-hidden"
    >
      {/* 🌈 Floating background blobs */}
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-purple-600/30 blur-[140px] rounded-full"
      />

      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-cyan-500/30 blur-[140px] rounded-full"
      />

      {/* 🧊 NAVBAR (glass + blur + iOS style) */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex justify-between items-center px-10 py-5 border-b border-white/10 backdrop-blur-2xl bg-white/5 sticky top-0 z-50"
      >
        <h1 className="font-bold text-xl">Chohan Space</h1>

        <div className="hidden md:flex gap-8 text-gray-300 text-sm">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/features" className="hover:text-white transition">Features</Link>
          <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* 🌗 Theme toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xl hover:bg-white/20 transition"
        >
          Theme
        </button>
      </motion.nav>

      {/* 🚀 HERO SECTION */}
      <section className="flex flex-col items-center text-center mt-28 px-6 relative z-10">

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-xs text-gray-300"
        >
          ✨ Next Gen iOS Web Experience
        </motion.div>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mt-10"
        >
          Build Modern <br />
          <span className="text-gray-300">Web Apps</span>
        </motion.h1>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg">
          Premium SaaS UI with glass effects, animations, dark/light mode,
          and production-ready Next.js structure.
        </p>

        {/* 🎯 CTA Buttons */}
        <div className="flex gap-4 mt-10">

          <Link href="/pricing">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-white text-black font-semibold"
            >
              Get Started
            </motion.button>
          </Link>

          <Link href="/features">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl"
            >
              Explore Features
            </motion.button>
          </Link>

        </div>
      </section>

      {/* 🧊 GLASS FEATURE CARDS */}
      <section className="grid md:grid-cols-3 gap-6 px-10 mt-32 max-w-6xl mx-auto relative z-10">

        {[
          { title: "⚡ Speed", desc: "Lightning-fast Next.js performance" },
          { title: "🎨 iOS UI", desc: "Glassmorphism + blur + depth design" },
          { title: "📈 Scalable", desc: "Built for SaaS and startups" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl hover:bg-white/10 transition"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{item.desc}</p>
          </motion.div>
        ))}

      </section>

      {/* 📍 QUICK NAV CARDS */}
      <section className="grid md:grid-cols-3 gap-6 px-10 mt-24 max-w-6xl mx-auto relative z-10">

        <Link href="/features">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition">
            Features Page →
          </div>
        </Link>

        <Link href="/pricing">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition">
            Pricing Page →
          </div>
        </Link>

        <Link href="/contact">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition">
            Contact Page →
          </div>
        </Link>

      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm mt-32 pb-10 border-t border-white/10 pt-8 relative z-10">
        © 2026 Chohan Space. Built with Next.js + iOS UI
      </footer>

    </motion.main>
  );
}