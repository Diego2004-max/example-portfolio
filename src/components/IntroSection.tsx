import AvatarCard from "./AvatarCard";

export default function IntroSection() {
  return (
    <section className="flex flex-col items-center text-center space-y-4">
      <AvatarCard />
      <p className="text-gray-600 dark:text-gray-300 max-w-md">
        ¡Hola! Soy Diego, desarrollador apasionado por la tecnología, la innovación
        y las experiencias digitales modernas. Me gusta construir interfaces limpias
        y funcionales usando React, Next.js y Tailwind.
      </p>
    </section>
  );
}
