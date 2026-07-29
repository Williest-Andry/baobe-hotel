"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { TextAnimate } from "src/components/ui/text-animate";
import UnderlinedButton from "src/components/underlined-button";

export default function SuiteImageSection() {
  const [suiteBg, setSuiteBg] = useState(" bg-suite-signature ");
  const [essentielleOpacity, setEssentielleOpacity] = useState(false);
  const [signatureOpacity, setSignatureOpacity] = useState(true);
  const [panoramaOpacity, setpanoramaOpacity] = useState(false);

  return (
    <section
      className={`font-outfit relative mb-10 h-230 w-[97%] m-auto flex flex-col laptop:flex-row bg-no-repeat bg-cover bg-center rounded-[58px] ${suiteBg}`}
    >
      <Link
        onMouseEnter={() => {
          setSuiteBg("bg-suite-signature-light");
          setEssentielleOpacity(true);
          setSignatureOpacity(false);
          setpanoramaOpacity(false);
        }}
        onMouseLeave={() => {
          setSuiteBg("bg-suite-signature");
          setEssentielleOpacity(false);
        }}
        href={"#"}
        className="w-full h-[33.33%] laptop:w-[33.33%] laptop:h-full flex items-center justify-center"
      >
        <TextAnimate
          animation={"fadeIn"}
          duration={3}
          by="line"
          as="p"
          viewport={{ amount: 1 }}
          className={`${essentielleOpacity ? "opacity-100!" : "opacity-50!"} text-center font-medium text-[28px] md:text-[58px] leading-20 tracking-[-1%] text-white w-full laptop:w-md`}
        >
          SUITE ESSENTIELLE
        </TextAnimate>
      </Link>

      <Link
        onMouseEnter={() => {
          setSuiteBg("bg-suite-signature");
          setSignatureOpacity(true);
          setEssentielleOpacity(false);
          setpanoramaOpacity(false);
        }}
        onMouseLeave={() => {
          setSuiteBg("bg-suite-signature");
          setSignatureOpacity(false);
        }}
        href={"#"}
        className="w-full h-[33.33%] laptop:w-[33.33%] laptop:h-full flex flex-col items-center  justify-center not-laptop:border-y-4 border-white-500 laptop:border-x-4 border-white-500"
      >
        <TextAnimate
          animation={"fadeIn"}
          duration={3}
          by="line"
          as="p"
          viewport={{ amount: 1 }}
          className={`${signatureOpacity ? "opacity-100!" : "opacity-50!"} text-center font-medium text-[28px] md:text-[58px] leading-20 tracking-[-1%] text-white w-full laptop:w-md`}
        >
          SUITE SIGNATURE
        </TextAnimate>
      </Link>

      <Link
        onMouseEnter={() => {
          setSuiteBg("bg-suite-signature-dark");
          setpanoramaOpacity(true);
          setSignatureOpacity(false);
          setEssentielleOpacity(false);
        }}
        onMouseLeave={() => {
          setSuiteBg("bg-suite-signature");
          setpanoramaOpacity(false);
        }}
        href={"#"}
        className="w-full h-[33.33%] laptop:w-[33.33%] laptop:h-full flex items-center justify-center"
      >
        <TextAnimate
          animation={"fadeIn"}
          duration={3}
          by="line"
          as="p"
          viewport={{ amount: 1 }}
          className={`${panoramaOpacity ? "opacity-100!" : "opacity-50!"} text-center font-medium text-[28px] md:text-[58px] leading-20 tracking-[-1%] text-white w-full laptop:w-md`}
        >
          SUITE PANORAMA
        </TextAnimate>
      </Link>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0 }}
        className="absolute top-210 right-[50%] translate-x-[50%]"
      >
        <UnderlinedButton text="DÉCOUVRIR LES SUITES" link="#" />
      </motion.div>
    </section>
  );
}
