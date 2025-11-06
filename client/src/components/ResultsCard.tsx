import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator } from "lucide-react";

export interface CalculationResult {
  grade: string;
  cementQty: number;
  flyashQty: number;
  hasGGBS: boolean;
  ggbsQty: number;
  basicRate: number;
  cementCost: number;
  flyashCost: number;
  ggbsCost: number;
  cementRate: number;
  flyashRate: number;
  ggbsRate: number;
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
              Cement Cost ({result.cementQty.toFixed(2)} kg × ₹{result.cementRate.toFixed(2)})
            </span>
            <span className="font-medium" data-testid="text-cement-cost">
              ₹{result.cementCost.toFixed(2)}
            </span>
          </div>
          {result.flyashQty > 0 && (
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-muted-foreground">
                Flyash Cost ({result.flyashQty.toFixed(2)} kg × ₹{result.flyashRate.toFixed(2)})
              </span>
              <span className="font-medium" data-testid="text-flyash-cost">
                ₹{result.flyashCost.toFixed(2)}
              </span>
            </div>
          )}
          {result.hasGGBS && result.ggbsQty > 0 && (
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-muted-foreground">
                GGBS Cost ({result.ggbsQty.toFixed(2)} kg × ₹{result.ggbsRate.toFixed(2)})
              </span>
              <span className="font-medium" data-testid="text-ggbs-cost">
                ₹{result.ggbsCost.toFixed(2)}
              </span>
            </div>
          )}
        </div>

        <div className="pt-4 border-t space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-base font-medium">Rate per m³</span>
            <span className="text-lg font-semibold" data-testid="text-base-total">
              ₹{result.totalRate.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-base font-medium">GST (18%)</span>
            <span className="text-lg font-semibold" data-testid="text-gst">
              ₹{(result.totalRate * 0.18).toFixed(2)}
            </span>
          </div>
          <div className="pt-3 border-t">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Total (including GST)</span>
              <span className="text-2xl font-bold text-primary" data-testid="text-total-rate">
                ₹{(result.totalRate * 1.18).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
