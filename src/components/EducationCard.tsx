import DetailsCard from "./DetailsCard";

interface EducationProps {
  institution: string;
  degree: string;
  year: string;
}

export default function EducationCard({ institution, degree, year }: EducationProps) {
  return (
    <DetailsCard
      title={degree}
      subtitle={institution}
      description={`Año: ${year}`}
    />
  );
}
