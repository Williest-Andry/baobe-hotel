import Link from "next/link";
import React from "react";

type DetailsUnderSectionProps = {
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

const textPositionResponsive: Record<string, string> = {
  "text-center": "min-[1200px]:text-center",
  "text-left": "min-[1200px]:text-left",
  "text-right": "min-[1200px]:text-right",
};

export default function DetailsUnderSection({
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
}: DetailsUnderSectionProps) {
  return (
    <article
      className={`w-full min-[1200px]:w-200 flex flex-col gap-0 min-[1200px]:gap-(--pixel-gap) text-left ${textPositionResponsive[textPosition]}`}
      style={
        {
          "--pixel-gap": `${textAndButtonPixelGap}px`,
          "--text-position": textPosition,
        } as React.CSSProperties
      }
    >
      <article className="flex flex-col" style={{ gap: `${textPixelGap}px` }}>
        <span className="font-satoshi font-light text-[12px] text-[#696969] tracking-[12%]">
          {sectionSpan}
        </span>

        <div className={`font-outfit`}>
          <h2
            className="font-medium text-[22px] max-[1200px]:ml-0! min-[431px]:text-[36px] min-[1200px]:text-[56px] w-70 min-[431px]:w-100 min-[1200px]:w-160 leading-15 min-[1200px]:leading-20"
            style={{ margin: itemsPosition === "items-center" ? "auto" : "" }}
          >
            {title}
          </h2>
          <div className="flex flex-col gap-3">
            <p className="font-light text-[20px] min-[1200px]:text-[24px] text-[#696969] leading-7.5">
              {paragraph}
            </p>
            {secondParagraph && (
              <p className="font-light text-[20px] min-[1200px]:text-[24px] text-[#696969] leading-7.5">
                {secondParagraph}
              </p>
            )}
          </div>
        </div>
      </article>

      <Link
        href={buttonLink}
        className="font-satoshi font-medium text-[26px] tracking-[8%] underline"
      >
        {buttonText}
      </Link>
    </article>
  );
}
