import ArticleTextSection from "src/components/article-text-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "src/components/ui/carousel";

export default function TestimonySection() {
  const testimonies = [
    {
      content:
        "Un lieu absolument unique à Antananarivo. L’architecture, la lumière et la qualité de l’accueil rendent l’expérience vraiment mémorable.",
      author: "Sophie RAKOTOARIVAO",
      job: "Voyageuse",
    },
    {
      content:
        "Baobé réussit à mêler calme, design et confort avec beaucoup d'élégance. Chaque espace donne envie de ralentir et de profiter.",
      author: "Marc TOJONIRINA",
      job: "Séjour en couple",
    },
    {
      content:
        "Entre la vue, l'atmosphère apaisante et le niveau de service, tout a été pensé pour offrir un séjour haut de gamme et chaleureux.",
      author: "Aina LAHATIANA",
      job: "Cliente",
    },
  ];

  return (
    <section className="mt-40 pl-10 mb-20">
      <ArticleTextSection
        span="TÉMOIGNAGES"
        title="ILS ONT VÉCU L’EXPÉRIENCE BAOBÉ"
        text="À travers l’atmosphère du lieu, la qualité de l’accueil et le confort des espaces, Baobé laisse à chacun le souvenir d’un séjour singulier, pensé pour allier calme, élégance et bien-être."
        articleClassName="items-start not-laptop:-ml-4!"
        titleClassName="text-left w-full"
        textClassName="text-left"
      />

      <Carousel
        // w-282
        className="relative w-[65%]"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {testimonies.map((t, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col gap-14 font-outfit"
            >
              <div>
                <blockquote className="text-[30px] md:text-[40px] leading-15.5 tracking-[-1%]">
                  "{t.content}"
                </blockquote>
              </div>

              <div className="flex flex-col">
                <h3 className="text-[24px] md:text-[34px]">{t.author}</h3>
                <span className="text-[20px] text-primary-grey font-light">
                  {t.job}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute left-0 -bottom-60 flex">
          <CarouselPrevious
            className={"static w-50 h-50 -ml-15"}
            variant={"link"}
          />
          <CarouselNext
            className={"static w-50 h-50 -ml-25"}
            variant={"link"}
          />
        </div>
      </Carousel>
    </section>
  );
}
