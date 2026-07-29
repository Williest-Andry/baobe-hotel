import { TextAnimate } from "src/components/ui/text-animate";
import ExperienceImage from "./experience-image";

export default function ExperienceSection() {
  return (
    <section className="relative flex flex-col items-center mb-20">
      <article className="ml-15 laptop:ml-0 flex flex-col justify-start laptop:items-center laptop:justify-center gap-7 mt-10 mb-20">
        <TextAnimate
          animation="slideLeft"
          by="character"
          duration={0.8}
          as="span"
          viewport={{ once: true }}
          className="font-satoshi font-medium text-[12px] tracking-[12%] text-primary-grey"
        >
          EXPÉRIENCE
        </TextAnimate>

        <div className="flex flex-col items-start laptop:items-center laptop:w-282 gap-7">
          <TextAnimate
            animation="fadeIn"
            by="line"
            as="h2"
            duration={1}
            viewport={{ once: true, amount: 1 }}
            className="font-outfit font-medium text-[36px] laptop:text-[56px] w-[70%] laptop:w-190 leading-15.5 tracking-[-1%] text-left laptop:text-center"
          >
            {"DES MOMENTS PENSÉS POUR RALENTIR ET PROFITER"}
          </TextAnimate>

          <TextAnimate
            animation="fadeIn"
            by="line"
            as="p"
            duration={2}
            delay={0.4}
            viewport={{ once: true, amount: 1 }}
            className="font-outfit text-[20px] laptop:text-[24px] not-laptop:w-[70%] leading-7.5 text-primary-grey text-left laptop:text-center"
          >
            {
              "Bien plus qu’un simple séjour, Baobé propose une expérience complète où bien-être, confort et atmosphère raffinée se rencontrent à chaque instant."
            }
          </TextAnimate>
        </div>
      </article>

      <ExperienceImage
        title="SPA & BIEN-ÊTRE"
        bgImage="bg-spa"
        text="Un espace pensé pour se ressourcer, relâcher le rythme et retrouver un équilibre dans une atmosphère calme et apaisante."
      />

      <ExperienceImage
        title="PISCINE & DÉTENTE"
        bgImage="bg-piscine"
        text="Entre lumière, silence et élégance, chaque moment invite à profiter d’un cadre exclusif tourné vers le confort."
      />

      <ExperienceImage
        title="SAVEURS & HOSPITALITÉ"
        bgImage="bg-saveur"
        text="Petit-déjeuner raffiné, service attentif et ambiance chaleureuse prolongent l’expérience avec justesse."
      />
    </section>
  );
}
