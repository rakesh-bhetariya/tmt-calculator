import { z } from "zod";

export const mixDesignSchema = z.object({
  grade: z.string(),
  cementQty: z.number(),
  flyashQty: z.number(),
  basicRate: z.number(),
  cementRate: z.number(),
  flyashRate: z.number(),
  total: z.number(),
});

export type MixDesign = z.infer<typeof mixDesignSchema>;

export const standardMixDesigns: MixDesign[] = [
  { grade: "M7.5 (Flyash)", cementQty: 160.00, flyashQty: 110.00, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 4121.00 },
  { grade: "M7.5 (No Flyash)", cementQty: 240.00, flyashQty: 0, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 4294.00 },
  { grade: "M10 (Flyash)", cementQty: 180.00, flyashQty: 100.00, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 4208.00 },
  { grade: "M10 (No Flyash)", cementQty: 250.00, flyashQty: 0, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 4350.00 },
  { grade: "M15 (Flyash)", cementQty: 220.00, flyashQty: 75.00, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 4369.50 },
  { grade: "M15 (No Flyash)", cementQty: 265.00, flyashQty: 0, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 4434.00 },
  { grade: "M20 (Flyash)", cementQty: 280.00, flyashQty: 75.00, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 4705.50 },
  { grade: "M20 (No Flyash)", cementQty: 320.00, flyashQty: 0, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 4742.00 },
  { grade: "M25 (Flyash)", cementQty: 300.00, flyashQty: 62.00, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 4785.00 },
  { grade: "M25 (No Flyash)", cementQty: 355.00, flyashQty: 0, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 4938.00 },
  { grade: "M30 (Flyash)", cementQty: 330.00, flyashQty: 62.00, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 4953.00 },
  { grade: "M30 (No Flyash)", cementQty: 390.00, flyashQty: 0, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 5134.00 },
  { grade: "M35 (Flyash)", cementQty: 370.00, flyashQty: 60.00, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 5172.00 },
  { grade: "M35 (No Flyash)", cementQty: 405.00, flyashQty: 0, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 5218.00 },
  { grade: "M40 (Flyash)", cementQty: 380.00, flyashQty: 70.00, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 5253.00 },
  { grade: "M40 (No Flyash)", cementQty: 428.00, flyashQty: 0, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 5346.80 },
  { grade: "M45 (Flyash)", cementQty: 410.00, flyashQty: 40.00, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 5346.00 },
  { grade: "M45 (No Flyash)", cementQty: 440.00, flyashQty: 0, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 5414.00 },
  { grade: "M50 (Flyash)", cementQty: 430.00, flyashQty: 20.00, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 5408.00 },
  { grade: "M50 (No Flyash)", cementQty: 447.00, flyashQty: 0, basicRate: 2950.00, cementRate: 5.60, flyashRate: 2.50, total: 5453.20 },
];
