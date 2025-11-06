import ResultsCard from '../ResultsCard';

export default function ResultsCardExample() {
  const mockResult = {
    grade: "M25 (Flyash)",
    cementQty: 300.00,
    flyashQty: 62.00,
    hasGGBS: false,
    basicRate: 2950.00,
    cementCost: 1680.00,
    flyashCost: 155.00,
    totalRate: 4785.00,
  };

  return <ResultsCard result={mockResult} />;
}
