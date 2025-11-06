import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import type { MixDesign } from "@shared/schema";

interface MixDesignTableProps {
  designs: MixDesign[];
}

export default function MixDesignTable({ designs }: MixDesignTableProps) {
  const [search, setSearch] = useState("");

  const filteredDesigns = designs.filter((design) =>
    design.grade.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by grade (e.g., M25, M30)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
          data-testid="input-search-grade"
        />
      </div>

      <div className="rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Grade</TableHead>
                <TableHead className="text-right font-semibold">Cement Qty (kg/m³)</TableHead>
                <TableHead className="text-right font-semibold">Flyash Qty (kg/m³)</TableHead>
                <TableHead className="text-right font-semibold">Basic Rate (₹)</TableHead>
                <TableHead className="text-right font-semibold">Cement Rate (₹)</TableHead>
                <TableHead className="text-right font-semibold">Flyash Rate (₹)</TableHead>
                <TableHead className="text-right font-semibold">Total (₹)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDesigns.map((design, index) => (
                <TableRow key={index} data-testid={`row-design-${index}`}>
                  <TableCell className="font-medium" data-testid={`text-grade-${index}`}>
                    {design.grade}
                  </TableCell>
                  <TableCell className="text-right">{design.cementQty.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    {design.flyashQty > 0 ? design.flyashQty.toFixed(2) : "-"}
                  </TableCell>
                  <TableCell className="text-right">{design.basicRate.toFixed(2)}</TableCell>
                  <TableCell className="text-right">{design.cementRate.toFixed(2)}</TableCell>
                  <TableCell className="text-right">{design.flyashRate.toFixed(2)}</TableCell>
                  <TableCell className="text-right font-semibold" data-testid={`text-total-${index}`}>
                    ₹{design.total.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {filteredDesigns.length === 0 && (
        <div className="text-center py-8 text-muted-foreground" data-testid="text-no-results">
          No mix designs found matching "{search}"
        </div>
      )}
    </div>
  );
}
