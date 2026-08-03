import { TextAnimate } from "./ui/text-animate";

type ArticleTextSectionProps = {
  span: string;
  title: string;
  text: string;
  titleClassName?: string;
  textClassName?: string;
  articleClassName?: string;
};

export default function ArticleTextSection({
  span,
  title,
  text,
  titleClassName,
  textClassName,
  articleClassName,
}: ArticleTextSectionProps) {
  return (
    <article
      className={`${articleClassName ? articleClassName : " justify-start laptop:items-center laptop:justify-center "} ml-15 laptop:ml-0 flex flex-col  gap-7 mb-20`}
    >
      <TextAnimate
        animation="slideLeft"
        by="character"
        duration={0.8}
        as="span"
        viewport={{ once: true }}
        className="font-satoshi font-medium text-[12px] tracking-[12%] text-primary-grey"
      >
        {span}
      </TextAnimate>

      <div className="flex flex-col items-start laptop:items-center laptop:w-282 gap-7">
        <TextAnimate
          animation="fadeIn"
          by="line"
          as="h2"
          duration={1}
          viewport={{ once: true, amount: 1 }}
          className={`${titleClassName ? titleClassName : " w-[70%] laptop:w-190 text-left laptop:text-center "} font-outfit text-[36px] laptop:text-[56px] leading-15.5 tracking-[-1%] `}
        >
          {title}
        </TextAnimate>

        <TextAnimate
          animation="fadeIn"
          by="line"
          as="p"
          duration={2}
          delay={0.4}
          viewport={{ once: true, amount: 1 }}
          className={`${textClassName ? textClassName : " not-laptop:w-[70%] text-left laptop:text-center "} font-outfit text-[20px] laptop:text-[24px]  leading-7.5 text-primary-grey `}
        >
          {text}
        </TextAnimate>
      </div>
    </article>
  );
}
