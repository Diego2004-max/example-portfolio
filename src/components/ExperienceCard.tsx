import DetailsCard from "./DetailsCard";

interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  description?: string;
}

export default function ExperienceCard({ company, role, period, description }: ExperienceProps) {
  return (
    <DetailsCard
      title={role}
      subtitle={`${company} • ${period}`}
      description={description}
    />
  );
}
