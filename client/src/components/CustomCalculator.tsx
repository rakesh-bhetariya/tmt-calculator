import { useState } from "react";
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
  basicRate: number;
  cementRate: number;
  flyashRate: number;
}

interface CustomCalculatorProps {
  onCalculate: (inputs: CalculationInputs) => void;
}

export default function CustomCalculator({ onCalculate }: CustomCalculatorProps) {
  const [selectedGrade, setSelectedGrade] = useState("");
  const [cementQty, setCementQty] = useState("280.00");
  const [flyashQty, setFlyashQty] = useState("75.00");
  const [hasGGBS, setHasGGBS] = useState(false);
  const [basicRate] = useState("2950.00");
  const [cementRate] = useState("5.60");
  const [flyashRate] = useState("2.50");

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
      basicRate: parseFloat(basicRate),
      cementRate: parseFloat(cementRate),
      flyashRate: parseFloat(flyashRate),
    });
  };

  useState(() => {
    handleCalculate();
  });

  const handleInputChange = () => {
    setTimeout(handleCalculate, 0);
  };

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
              onChange={(e) => {
                setCementQty(e.target.value);
                handleInputChange();
              }}
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
              onChange={(e) => {
                setFlyashQty(e.target.value);
                handleInputChange();
              }}
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
                onCheckedChange={(checked) => {
                  setHasGGBS(checked);
                  handleInputChange();
                }}
                data-testid="switch-ggbs"
              />
              <span className="text-sm text-muted-foreground">
                {hasGGBS ? "Yes" : "No"}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <h3 className="text-sm font-medium uppercase tracking-wide mb-4">Rate Parameters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-sm">Basic Rate (₹)</Label>
              <Input value={basicRate} disabled className="bg-muted" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Cement Rate (₹)</Label>
              <Input value={cementRate} disabled className="bg-muted" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Flyash Rate (₹)</Label>
              <Input value={flyashRate} disabled className="bg-muted" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
