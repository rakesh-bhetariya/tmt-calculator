import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator } from "lucide-react";

export interface CalculationResult {
  grade: string;
  cementQty: number;
  flyashQty: number;
  hasGGBS: boolean;
  basicRate: number;
  cementCost: number;
  flyashCost: number;
  totalRate: number;
}

interface ResultsCardProps {
  result: CalculationResult | null;
}

export default function ResultsCard({ result }: ResultsCardProps) {
  if (!result) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Calculation Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground" data-testid="text-no-calculation">
            Select a grade and adjust quantities to see the calculated rate
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="text-xl flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Calculation Results
          </CardTitle>
          {result.grade && (
            <Badge variant="secondary" className="text-sm" data-testid="badge-grade">
              {result.grade}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-muted-foreground">Basic Rate</span>
            <span className="font-medium" data-testid="text-basic-rate">
              ₹{result.basicRate.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-muted-foreground">
              Cement Cost ({result.cementQty.toFixed(2)} kg × ₹5.60)
            </span>
            <span className="font-medium" data-testid="text-cement-cost">
              ₹{result.cementCost.toFixed(2)}
            </span>
          </div>
          {result.flyashQty > 0 && (
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-muted-foreground">
                Flyash Cost ({result.flyashQty.toFixed(2)} kg × ₹2.50)
              </span>
              <span className="font-medium" data-testid="text-flyash-cost">
                ₹{result.flyashCost.toFixed(2)}
              </span>
            </div>
          )}
          {result.hasGGBS && (
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-muted-foreground">GGBS</span>
              <Badge variant="outline" className="text-xs">Included</Badge>
            </div>
          )}
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Total Rate per m³</span>
            <span className="text-2xl font-bold text-primary" data-testid="text-total-rate">
              ₹{result.totalRate.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
