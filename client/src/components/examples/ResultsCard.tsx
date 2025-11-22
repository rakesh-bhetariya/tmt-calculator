import ResultsCard from '../ResultsCard';

export default function ResultsCardExample() {
  const mockResult = {
    grade: "M25 (Flyash)",
    cementQty: 300.00,
    flyashQty: 62.00,
    hasGGBS: true,
    ggbsQty: 50.00,
    basicRate: 2950.00,
    cementCost: 1680.00,
    flyashCost: 155.00,
    ggbsCost: 150.00,
    cementRate: 5.60,
    flyashRate: 2.50,
    ggbsRate: 3.00,
    totalRate: 4935.00,
  };

  return <ResultsCard result={mockResult} />;
}
