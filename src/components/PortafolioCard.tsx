interface PortafolioCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function PortafolioCard({ title, description, image, link }: PortafolioCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white dark:bg-gray-800 rounded-2xl shadow hover:scale-[1.02] transition-transform overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </div>
    </a>
  );
}
