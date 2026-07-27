import CustomSection from "src/component/custom-section";
import HeroSection from "src/feature/hero-section/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />

      <CustomSection
        imagePosition="left"
        imageSrc="/image-about.svg"
        sectionSpan="À PROPOS"
        title="UN LIEU OÙ DESIGN, CALME ET HOSPITALITÉ SE RENCONTRENT"
        paragraph="Baobé est né de l’envie de créer un refuge urbain singulier à Antananarivo, où l’architecture organique, le confort et la sérénité composent une expérience de séjour à part."
        secondParagraph="Inspiré par les formes de la nature et pensé comme une parenthèse d’évasion, l’hôtel offre un cadre raffiné où chaque espace invite à ralentir, se ressourcer et profiter pleinement du moment."
        buttonText="DÉCOUVRIR BAOBÉ"
        buttonLink="#"
        textPixelGap={28}
        textAndButtonPixelGap={200}
        itemsPosition="items-start"
        textPosition="text-left"
      />

      <CustomSection
        imagePosition="right"
        imageSrc="/suite-image.svg"
        sectionSpan="LES SUITES"
        title="DES SUITES AU CARACTÈRE SINGULIER"
        paragraph="Pensées comme des refuges élégants, les suites Baobé allient design, lumière et sérénité pour offrir une expérience de séjour aussi confortable qu’inspirante."
        buttonText="DÉCOUVRIR LES SUITES"
        buttonLink="#"
        textPixelGap={28}
        textAndButtonPixelGap={80}
        itemsPosition="items-center"
        textPosition="text-center"
      />
    </>
  );
}
