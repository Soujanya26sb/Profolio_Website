import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { hero } from "../data/content";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold"
      >
        {hero.name}
      </motion.h1>

      <p className="text-xl text-gray-400 mt-4 max-w-2xl">
        {hero.title} · {hero.tagline}
      </p>

      <div className="flex gap-6 mt-8">
        <a href={hero.links.github} target="_blank"><Github /></a>
        <a href={hero.links.linkedin} target="_blank"><Linkedin /></a>
        <a href={hero.links.email}><Mail /></a>
      </div>
    </section>
  );
}
