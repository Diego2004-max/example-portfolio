// 🔹 Dependencias externas
import Image from "next/image";

// 🔹 Funciones y configuraciones internas
import { getDictionary } from "../i18n/dictionaries";
import { Lang, languages } from "../i18n/config";

// 🔹 Componentes reutilizables
import AvatarCard from "@/components/AvatarCard";
import Container from "@/components/Container";
import DetailsCard from "@/components/DetailsCard";
import EducationCard from "@/components/EducationCard";
import ExperienceCard from "@/components/ExperienceCard";
import InterestsList from "@/components/InterestsList";
import IntroSection from "@/components/IntroSection";
import LanguageList from "@/components/LanguageList";
import PortafolioCard from "@/components/PortafolioCard";
import ThemeToggle from "@/components/ThemeToggle";
import ToolsList from "@/components/ToolsList";
import LanguageSwitcher from "@/components/LanguageSwitcher";

// 🌍 Genera rutas estáticas para cada idioma
export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

// ✅ Página principal
export default async function Home({ params }: { params: { lang: Lang } }) {
  const { lang } = params;
  const dict = await getDictionary(lang);

  return (
    <div className="font-sans flex justify-center relative">
      {/* Cambiador de idioma */}
      <div className="absolute top-6 right-6">
        <LanguageSwitcher currentLang={lang} />
      </div>

      {/* Contenido principal */}
      <main className="grid grid-cols-12 container mt-20 gap-10">
        {/* Imagen de perfil */}
        <span className="flex items-center justify-center col-span-3 row-span-2 bg-white rounded-2xl overflow-hidden shadow-md">
          <Image src="/avatar.jpg" alt="avatar" width={300} height={300} />
        </span>

        {/* Introducción */}
        <p className="p-5 text-2xl text-white col-span-9 rounded-2xl bg-foreground">
          {dict.intro}
        </p>

        {/* Intereses */}
        <ul className="flex items-center col-span-9 gap-4 p-5 rounded-2xl bg-foreground">
          <li className="text-white text-lg font-bold border-r pr-4">
            {dict.sections.interests.title}
          </li>
          {dict.sections.interests.items.map((item: string) => (
            <li
              key={item}
              className="flex items-center bg-background rounded-lg text-white text-sm px-4 py-2"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Experiencia: Freelance */}
        <article className="col-span-6 rounded-2xl bg-foreground p-10">
          <section className="flex items-center justify-between border-b border-b-grey pb-10">
            <header className="flex flex-col">
              <h3 className="text-2xl font-bold text-white">
                {dict.sections.experience.freelance.title}
              </h3>
              <p className="text-grey text-sm">
                {dict.sections.experience.freelance.role}
              </p>
            </header>
            <span className="bg-background rounded-lg text-white text-sm p-4">
              {dict.sections.experience.freelance.period}
            </span>
          </section>
          <ul className="list-disc list-inside text-white text-sm mt-6">
            {dict.sections.experience.freelance.bullets.map((b: string) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>

        {/* Experiencia: Meetzed */}
        <article className="col-span-6 rounded-2xl bg-foreground p-10">
          <section className="flex items-center justify-between border-b border-b-grey pb-10">
            <header className="flex flex-col">
              <h3 className="text-2xl font-bold text-white">
                {dict.sections.experience.meetzed.title}
              </h3>
              <p className="text-grey text-sm">
                {dict.sections.experience.meetzed.role}
              </p>
            </header>
            <span className="bg-background rounded-lg text-white text-sm p-4">
              {dict.sections.experience.meetzed.period}
            </span>
          </section>
          <ul className="list-disc list-inside text-white text-sm mt-6">
            {dict.sections.experience.meetzed.bullets.map((b: string) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>

        {/* Herramientas de diseño */}
        <ul className="flex gap-4 items-center col-span-6 rounded-2xl bg-foreground p-10">
          <li className="text-white text-xl font-bold border-r pr-4">
            {dict.sections.designTools}
          </li>
          <li className="flex items-center bg-[#360300] rounded-lg font-bold text-[#da9f4c] text-xl px-4 py-2">
            Ai
          </li>
          <li className="flex items-center bg-[#0b172a] rounded-lg font-bold text-[#74aaf2] text-xl px-4 py-2">
            Ps
          </li>
          <li className="flex items-center bg-[#59051e] rounded-lg font-bold text-[#d84b6f] text-xl px-4 py-2">
            Id
          </li>
          <li className="flex items-center bg-[#480d30] rounded-lg font-bold text-[#de6ff0] text-xl px-4 py-2">
            Xd
          </li>
        </ul>

        {/* Educación */}
        <section className="flex flex-col gap-4 items-center col-span-6 row-span-3 rounded-2xl bg-foreground p-10">
          {Object.values(dict.sections.education).map((edu: any) => (
            <article
              key={edu.title}
              className="flex items-center justify-between w-full border-b border-b-grey pb-8 last:border-none"
            >
              <span className="flex flex-col">
                <h2 className="text-white text-3xl font-bold">{edu.title}</h2>
                <p className="text-grey text-lg">{edu.field}</p>
                <p className="text-grey text-sm">{edu.location}</p>
              </span>
              <span className="bg-background rounded-lg text-white text-sm p-4">
                {edu.period}
              </span>
            </article>
          ))}
        </section>

        {/* Herramientas de edición */}
        <ul className="flex gap-4 items-center col-span-6 rounded-2xl bg-foreground p-10">
          <li className="text-white text-xl font-bold border-r pr-4">
            {dict.sections.editingTools}
          </li>
          <li className="flex items-center bg-[#000155] rounded-lg font-bold text-[#a0a0f9] text-xl px-4 py-2">
            Ae
          </li>
          <li className="flex items-center bg-[#02035e] rounded-lg font-bold text-[#9997f9] text-xl px-4 py-2">
            Pr
          </li>
        </ul>

        {/* Idiomas */}
        <ul className="flex gap-4 items-center col-span-6 rounded-2xl bg-foreground p-10">
          <li className="text-white text-xl font-bold border-r pr-4">
            {dict.sections.languages}
          </li>
          <li className="text-4xl">🇧🇴</li>
          <li className="text-4xl">🇬🇧</li>
          <li className="text-4xl">🇺🇸</li>
        </ul>
      </main>
    </div>
  );
}
