"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function HeroSection() {
  const lines = [
    "Crafting unique experiences",
    "with modern design tools",
    "and clean code solutions.",
  ];

  return (
    <main className="relative font-outfit bg-[#4788A0] mt-5 rounded-[50px] h-[95vh] flex items-end w-[98vw] m-auto overflow-hidden">
      <motion.figure
        initial={{ y: 500, opacity: 0 }}
        transition={{
          delay: 0.8,
        }}
        animate={{ y: 0, opacity: 1 }}
        className="rounded-[50px] -mb-15 w-full"
      >
        <img
          src={"/hero-img.webp"}
          alt="hero section image"
          className="w-full"
        ></img>
      </motion.figure>

      <motion.figure
        initial={{ left: -500 }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        animate={{ left: -200 }}
        className="absolute top-20"
      >
        <Image src={"/sky-img.webp"} alt="sky image" width={500} height={500} />
      </motion.figure>

      <motion.figure
        initial={{ top: -400 }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        animate={{ top: -180 }}
        className="absolute left-180"
      >
        <Image src={"/sky-img.webp"} alt="sky image" width={500} height={500} />
      </motion.figure>

      <motion.figure
        initial={{ right: -450 }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        animate={{ right: -290 }}
        className="absolute top-5"
      >
        <Image src={"/sky-img.webp"} alt="sky image" width={500} height={500} />
      </motion.figure>

      <motion.figure
        initial={{ right: -450 }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        animate={{ right: -210 }}
        className="absolute top-38"
      >
        <Image src={"/sky-img.webp"} alt="sky image" width={500} height={500} />
      </motion.figure>

      <motion.h1
        initial={{ y: 500, opacity: 0 }}
        transition={{
          delay: 1.8,
          duration: 1.2,
        }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute text-[20px] min-[444px]:text-[30px] min-[741px]:text-[80px] text-white top-30 font-medium w-100 min-[444px]:w-130 min-[741px]:w-137.5 leading-23 ml-10"
      >
        DÉCOUVREZ BAOBÉ HÔTEL
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        animate={{ opacity: 1 }}
        className="absolute text-[20px] min-[444px]:text-[30px] min-[741px]:text-[40px] text-white bottom-20 w-70 min-[444px]:w-90 min-[741px]:w-160 ml-10 leading-12"
      >
        Entre design, sérénité et hospitalité, Baobé redéfinit le séjour haut de
        gamme à Antananarivo
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        animate={{ opacity: 1 }}
        className="hidden min-[1176px]:flex absolute text-2xl text-end text-white bottom-15 right-15 w-130 ml-10 font-light"
      >
        Architecture inspirée du baobab, services raffinés et atmosphère
        apaisante.
      </motion.p>
    </main>
  );
}
