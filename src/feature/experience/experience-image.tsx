import { TextAnimate } from "src/components/ui/text-animate";

type ExperienceImageProps = {
  title: string;
  bgImage: string;
  text: string;
};

export default function ExperienceImage({
  title,
  text,
  bgImage,
}: ExperienceImageProps) {
  return (
    <figure
      className={`${bgImage} z-10 sticky  top-5 font-outfit h-[95vh] mb-6 w-[97%] m-auto flex bg-no-repeat bg-cover bg-center rounded-[58px]`}
    >
      <article className="flex flex-col w-[90%] laptop:w-[70%] gap-2 justify-end pl-6 sm:pl-20 pb-22.75 font-outfit font-medium text-white tracking-[-1%]">
        <TextAnimate
          animation="fadeIn"
          by="line"
          as="h3"
          duration={2}
          viewport={{ once: true, amount: 1 }}
          className="text-[30px] laptop:text-[80px]"
        >
          {title}
        </TextAnimate>
        <TextAnimate
          animation="fadeIn"
          by="line"
          as="p"
          duration={2}
          viewport={{ once: true, amount: 1 }}
          className="text-[25px] laptop:text-[40px] leading-[46px%] text-variant-white"
        >
          {text}
        </TextAnimate>
      </article>
    </figure>
  );
}
