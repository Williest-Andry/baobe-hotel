"use client";

import Image from "next/image";
import DetailsUnderSection from "./details-under-section";
import { motion } from "motion/react";

type CustomSectionProps = {
  imagePosition: "left" | "right";
  imageSrc: string;
  sectionSpan: string;
  title: string;
  paragraph: string;
  secondParagraph?: string;
  buttonText: string;
  buttonLink: string;
  textPixelGap: number;
  textAndButtonPixelGap: number;
  itemsPosition: "items-center" | "items-start" | "items-end";
  textPosition: "text-center" | "text-left" | "text-right";
};

export default function CustomSection({
  imagePosition,
  imageSrc,
  sectionSpan,
  title,
  paragraph,
  secondParagraph,
  buttonLink,
  buttonText,
  textPixelGap,
  textAndButtonPixelGap,
  itemsPosition,
  textPosition,
}: CustomSectionProps) {
  if (imagePosition === "left") {
    return (
      <section className="flex flex-col min-[1200px]:flex-row items-center px-6 gap-14.5 mb-6">
        <motion.figure
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Image
            src={imageSrc}
            alt="about image"
            width={0}
            height={0}
            className="w-70 min-[1200px]:w-212.5"
          />
        </motion.figure>
        <DetailsUnderSection
          sectionSpan={sectionSpan}
          title={title}
          paragraph={paragraph}
          secondParagraph={secondParagraph}
          buttonText={buttonText}
          buttonLink={buttonLink}
          textPixelGap={textPixelGap}
          textAndButtonPixelGap={textAndButtonPixelGap}
          itemsPosition={itemsPosition}
          textPosition={textPosition}
        />
      </section>
    );
  } else {
    return (
      <section className="flex flex-col-reverse min-[1200px]:flex-row items-center justify-end px-6 pr-10 gap-35 mb-6 overflow-hidden">
        <DetailsUnderSection
          sectionSpan={sectionSpan}
          title={title}
          paragraph={paragraph}
          secondParagraph={secondParagraph}
          buttonText={buttonText}
          buttonLink={buttonLink}
          textPixelGap={textPixelGap}
          textAndButtonPixelGap={textAndButtonPixelGap}
          itemsPosition={itemsPosition}
          textPosition={textPosition}
        />
        <motion.figure
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Image
            src={imageSrc}
            alt="about image"
            width={0}
            height={0}
            className="w-70 min-[1200px]:w-212.5"
          />
        </motion.figure>
      </section>
    );
  }
}
