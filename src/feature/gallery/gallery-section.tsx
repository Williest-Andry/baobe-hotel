import Image from "next/image";
import ArticleTextSection from "src/components/article-text-section";
// import { Card, CardContent } from "@/components/ui/card"
import { Card, CardContent } from "src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "src/components/ui/carousel";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@"

export default function GallerySection() {
  const galleries = [
    {
      image: "/gallery1.png",
      alt: "gallery1 image",
    },
    {
      image: "/gallery2.png",
      alt: "gallery2 image",
    },
    {
      image: "/gallery3.png",
      alt: "gallery3 image",
    },
    {
      image: "/gallery4.png",
      alt: "gallery4 image",
    },
    {
      image: "/gallery5.png",
      alt: "gallery5 image",
    },
  ];

  const galleriesCopy = [...galleries];
  galleries.push(...galleriesCopy);

  return (
    <section className="flex flex-col">
      <ArticleTextSection
        titleClassName="w-full"
        textClassName="w-[70%] laptop:w-[98vw] "
        span="GALERIE"
        title="UN REGARD SUR L’UNIVERS BAOBÉ"
        text="Entre architecture organique, lumière chaleureuse et atmosphère apaisante, chaque image révèle une facette de l’expérience Baobé."
      />

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full cursor-grab"
      >
        <CarouselContent>
          {galleries.map((g) => (
            <CarouselItem
              key={g.image}
              className="relative w-full h-100 sm:h-172 basis-50 sm:basis-114.5 ml-4"
            >
              <Image
                src={g.image}
                alt={g.alt}
                fill
                className="rounded-[58px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
