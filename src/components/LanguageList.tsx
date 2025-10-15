interface LanguageListProps {
  languages: { name: string; level: string }[];
}

export default function LanguageList({ languages }: LanguageListProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow">
      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">Idiomas</h3>
      <ul className="space-y-1">
        {languages.map((lang, index) => (
          <li key={index} className="flex justify-between">
            <span>{lang.name}</span>
            <span className="text-gray-500 dark:text-gray-400">{lang.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
