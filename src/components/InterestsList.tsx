interface InterestsListProps {
  interests: string[];
}

export default function InterestsList({ interests }: InterestsListProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow">
      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">Intereses</h3>
      <ul className="flex flex-wrap gap-2">
        {interests.map((interest, index) => (
          <li key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
            {interest}
          </li>
        ))}
      </ul>
    </div>
  );
}
