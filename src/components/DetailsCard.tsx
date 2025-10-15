interface DetailsCardProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function DetailsCard({ title, subtitle, description }: DetailsCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 space-y-2">
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{title}</h3>
      {subtitle && <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>}
      {description && <p className="text-gray-700 dark:text-gray-300">{description}</p>}
    </div>
  );
}
