import Image from "next/image";

export default function AvatarCard() {
  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <Image
        src="/avatar.jpg"
        alt="Profile Avatar"
        width={120}
        height={120}
        className="rounded-full shadow-lg"
      />
      <h2 className="text-xl font-semibold">Diego Alejandro</h2>
      <p className="text-gray-500 dark:text-gray-300">Full Stack Developer</p>
    </div>
  );
}
