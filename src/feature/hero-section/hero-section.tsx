import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="font-satoshi bg-[#4788A0] mt-5 rounded-[50px] h-[95vh] flex items-end w-[98vw] m-auto overflow-hidden">
      <Image
        src={"/hero-img.webp"}
        alt="hero section image"
        width={1900}
        height={5000}
        className="rounded-[50px] -mb-15"
      />

      <Image
        src={"/sky-img.webp"}
        alt="sky image"
        width={500}
        height={500}
        className="absolute top-20 -left-30"
      />

      <Image
        src={"/sky-img.webp"}
        alt="sky image"
        width={500}
        height={500}
        className="absolute -top-35 left-190"
      />

      <Image
        src={"/sky-img.webp"}
        alt="sky image"
        width={500}
        height={500}
        className="absolute top-15 right-0"
      />

      <h1 className="absolute text-[70px] text-white top-30 font-bold w-130 ml-10">
        DÉCOUVREZ BAOBÉ HÔTEL
      </h1>

      <p className="absolute text-3xl text-white bottom-20 w-130 ml-10">
        Entre design, sérénité et hospitalité, Baobé redéfinit le séjour haut de
        gamme à Antananarivo
      </p>

      <p className="absolute text-2xl text-end text-white bottom-15 right-15 w-130 ml-10">
        Architecture inspirée du baobab, services raffinés et atmosphère
        apaisante.
      </p>
    </main>
  );
}
