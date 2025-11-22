import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { standardMixDesigns } from "@shared/schema";

export interface CalculationInputs {
  grade: string;
  cementQty: number;
  flyashQty: number;
  hasGGBS: boolean;
  ggbsQty: number;
  basicRate: number;
  cementRate: number;
  flyashRate: number;
  ggbsRate: number;
}

interface CustomCalculatorProps {
  onCalculate: (inputs: CalculationInputs) => void;
}

export default function CustomCalculator({ onCalculate }: CustomCalculatorProps) {
  const [selectedGrade, setSelectedGrade] = useState("");
  const [cementQty, setCementQty] = useState("280.00");
  const [flyashQty, setFlyashQty] = useState("75.00");
  const [hasGGBS, setHasGGBS] = useState(false);
  const [ggbsQty, setGgbsQty] = useState("50.00");
  const [basicRate, setBasicRate] = useState("2950.00");
  const [cementRate, setCementRate] = useState("5.60");
  const [flyashRate, setFlyashRate] = useState("2.50");
  const [ggbsRate, setGgbsRate] = useState("3.00");

  const handleGradeChange = (grade: string) => {
    setSelectedGrade(grade);
    const design = standardMixDesigns.find((d) => d.grade === grade);
    if (design) {
      setCementQty(design.cementQty.toFixed(2));
      setFlyashQty(design.flyashQty.toFixed(2));
    }
  };

  const handleCalculate = () => {
    onCalculate({
      grade: selectedGrade,
      cementQty: parseFloat(cementQty) || 0,
      flyashQty: parseFloat(flyashQty) || 0,
      hasGGBS,
      ggbsQty: parseFloat(ggbsQty) || 0,
      basicRate: parseFloat(basicRate) || 0,
      cementRate: parseFloat(cementRate) || 0,
      flyashRate: parseFloat(flyashRate) || 0,
      ggbsRate: parseFloat(ggbsRate) || 0,
    });
  };

  useEffect(() => {
    handleCalculate();
  }, [selectedGrade, cementQty, flyashQty, hasGGBS, ggbsQty, basicRate, cementRate, flyashRate, ggbsRate]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Custom Mix Design Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="grade" className="text-sm font-medium uppercase tracking-wide">
              Select Grade
            </Label>
            <Select value={selectedGrade} onValueChange={handleGradeChange}>
              <SelectTrigger id="grade" data-testid="select-grade">
                <SelectValue placeholder="Choose a standard grade" />
              </SelectTrigger>
              <SelectContent>
                {standardMixDesigns.map((design) => (
                  <SelectItem key={design.grade} value={design.grade}>
                    {design.grade}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cement" className="text-sm font-medium uppercase tracking-wide">
              Cement Quantity (kg/m³)
            </Label>
            <Input
              id="cement"
              type="number"
              step="0.01"
              value={cementQty}
              onChange={(e) => setCementQty(e.target.value)}
              data-testid="input-cement-qty"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="flyash" className="text-sm font-medium uppercase tracking-wide">
              Flyash Quantity (kg/m³)
            </Label>
            <Input
              id="flyash"
              type="number"
              step="0.01"
              value={flyashQty}
              onChange={(e) => setFlyashQty(e.target.value)}
              data-testid="input-flyash-qty"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ggbs" className="text-sm font-medium uppercase tracking-wide">
              Include GGBS
            </Label>
            <div className="flex items-center gap-3 h-9">
              <Switch
                id="ggbs"
                checked={hasGGBS}
                onCheckedChange={setHasGGBS}
                data-testid="switch-ggbs"
              />
              <span className="text-sm text-muted-foreground">
                {hasGGBS ? "Yes" : "No"}
              </span>
            </div>
          </div>

          {hasGGBS && (
            <div className="space-y-2">
              <Label htmlFor="ggbs-qty" className="text-sm font-medium uppercase tracking-wide">
                GGBS Quantity (kg/m³)
              </Label>
              <Input
                id="ggbs-qty"
                type="number"
                step="0.01"
                value={ggbsQty}
                onChange={(e) => setGgbsQty(e.target.value)}
                data-testid="input-ggbs-qty"
              />
            </div>
          )}
        </div>

        <div className="pt-4 border-t">
          <h3 className="text-sm font-medium uppercase tracking-wide mb-4">Rate Parameters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="basic-rate" className="text-sm">Basic Rate (₹)</Label>
              <Input 
                id="basic-rate"
                type="number"
                step="0.01"
                value={basicRate}
                onChange={(e) => setBasicRate(e.target.value)}
                data-testid="input-basic-rate"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cement-rate" className="text-sm">Cement Rate (₹/kg)</Label>
              <Input 
                id="cement-rate"
                type="number"
                step="0.01"
                value={cementRate}
                onChange={(e) => setCementRate(e.target.value)}
                data-testid="input-cement-rate"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="flyash-rate" className="text-sm">Flyash Rate (₹/kg)</Label>
              <Input 
                id="flyash-rate"
                type="number"
                step="0.01"
                value={flyashRate}
                onChange={(e) => setFlyashRate(e.target.value)}
                data-testid="input-flyash-rate"
              />
            </div>
            {hasGGBS && (
              <div className="space-y-2">
                <Label htmlFor="ggbs-rate" className="text-sm">GGBS Rate (₹/kg)</Label>
                <Input 
                  id="ggbs-rate"
                  type="number"
                  step="0.01"
                  value={ggbsRate}
                  onChange={(e) => setGgbsRate(e.target.value)}
                  data-testid="input-ggbs-rate"
                />
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
