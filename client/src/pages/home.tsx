import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import MixDesignTable from "@/components/MixDesignTable";
import CustomCalculator, { type CalculationInputs } from "@/components/CustomCalculator";
import ResultsCard, { type CalculationResult } from "@/components/ResultsCard";
import { standardMixDesigns } from "@shared/schema";
import { TableProperties, Calculator } from "lucide-react";

export default function Home() {
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);

  const handleCalculate = (inputs: CalculationInputs) => {
    const cementCost = inputs.cementQty * inputs.cementRate;
    const flyashCost = inputs.flyashQty * inputs.flyashRate;
    const ggbsCost = inputs.hasGGBS ? inputs.ggbsQty * inputs.ggbsRate : 0;
    const totalRate = inputs.basicRate + cementCost + flyashCost + ggbsCost;

    setCalculationResult({
      grade: inputs.grade,
      cementQty: inputs.cementQty,
      flyashQty: inputs.flyashQty,
      hasGGBS: inputs.hasGGBS,
      ggbsQty: inputs.ggbsQty,
      basicRate: inputs.basicRate,
      cementCost,
      flyashCost,
      ggbsCost,
      cementRate: inputs.cementRate,
      flyashRate: inputs.flyashRate,
      ggbsRate: inputs.ggbsRate,
      totalRate,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">RMC Rate Calculator</h1>
          <p className="text-muted-foreground">
            Calculate rates for standard and custom Ready Mix Concrete designs
          </p>
        </div>

        <Tabs defaultValue="standard" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="standard" data-testid="tab-standard" className="flex items-center gap-2">
              <TableProperties className="h-4 w-4" />
              Standard Designs
            </TabsTrigger>
            <TabsTrigger value="custom" data-testid="tab-custom" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Custom Calculator
            </TabsTrigger>
          </TabsList>

          <TabsContent value="standard" className="space-y-6">
            <MixDesignTable designs={standardMixDesigns} />
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <CustomCalculator onCalculate={handleCalculate} />
              </div>
              <div className="lg:sticky lg:top-6 lg:self-start">
                <ResultsCard result={calculationResult} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <p className="text-sm text-muted-foreground text-center">
            © 2024 Procon RMC. All rates are subject to change.
          </p>
        </div>
      </footer>
    </div>
  );
}
