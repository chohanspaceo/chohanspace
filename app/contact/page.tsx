"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [activeField, setActiveField] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const fields = [
    { key: "name", label: "Your Name" },
    { key: "email", label: "Email" },
    { key: "message", label: "Message" },
  ];

  const active = fields.find((f) => f.key === activeField);

  // ENTER = DONE (unified handler)
  const handleDone = () => setActiveField(null);

  return (
    <main className="min-h-screen bg-black text-white px-10 py-20 relative overflow-hidden">

      {/* TITLE */}
      <h1 className="text-5xl font-bold">Contact</h1>
      <p className="text-gray-400 mt-4">
        Enter = Done | Apple-style focus form system
      </p>

      {/* FORM CARDS */}
      <div className="mt-12 max-w-xl space-y-4">
        {fields.map((field) => (
          <motion.div
            key={field.key}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveField(field.key)}
            className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl cursor-pointer"
          >
            <p className="text-gray-400 text-sm">{field.label}</p>
            <p className="mt-1 text-white">
              {form[field.key as keyof typeof form] || "Tap to enter"}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🔥 ZOOM MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="w-[90%] max-w-xl p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-2xl"
            >

              <h2 className="text-xl font-semibold mb-4">
                {active.label}
              </h2>

              {/* INPUTS */}
              {active.key !== "message" ? (
                <input
                  autoFocus
                  value={form[active.key as keyof typeof form]}
                  onChange={(e) =>
                    setForm({ ...form, [active.key]: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleDone();
                    }
                  }}
                  className="w-full p-4 rounded-xl bg-black/40 border border-white/10 outline-none"
                />
              ) : (
                <textarea
                  autoFocus
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleDone();
                    }
                  }}
                  className="w-full h-40 p-4 rounded-xl bg-black/40 border border-white/10 outline-none"
                />
              )}

              {/* DONE BUTTON */}
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleDone}
                  className="px-4 py-2 rounded-xl bg-white/10 border border-white/10"
                >
                  Done
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🚀 SEND BUTTON */}
      <motion.button
        onClick={() => {
          setSending(true);

          setTimeout(() => {
            setSending(false);
            setSent(true);

            setTimeout(() => setSent(false), 2000);
          }, 1500);
        }}
        whileTap={{ scale: 0.95 }}
        animate={sending ? { scale: 1.15 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className={`mt-10 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all
          ${sent ? "bg-green-500 text-white" : "bg-white text-black"}
        `}
      >
        {sending && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
          />
        )}

        {sent ? "✓ Sent" : sending ? "Sending..." : "Send Message"}
      </motion.button>

      {/* 🎉 SUCCESS OVERLAY */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-xl z-50"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              className="w-44 h-44 rounded-full bg-green-500 flex items-center justify-center shadow-2xl"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-6xl"
              >
                ✓
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}