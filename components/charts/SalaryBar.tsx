"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis, LabelList } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { salaryRange: "range1", count: 58, fill: "var(--color-range1)" },
  { salaryRange: "range2", count: 175, fill: "var(--color-range2)" },
  { salaryRange: "range3", count: 31, fill: "var(--color-range3)" },
  { salaryRange: "range4", count: 5, fill: "var(--color-range4)" },
  { salaryRange: "range5", count: 0, fill: "var(--color-range5)" },
];

const chartConfig = {
  count: {
    label: "Count",
  },
  range1: {
    label: "0-20K",
    color: "hsl(var(--chart-1))",
  },
  range2: {
    label: "20-40K",
    color: "hsl(var(--chart-2))",
  },
  range3: {
    label: "40-60K",
    color: "hsl(var(--chart-3))",
  },
  range4: {
    label: "60-80K",
    color: "hsl(var(--chart-4))",
  },
  range5: {
    label: "80K+",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function SalaryBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>月薪范围分布</CardTitle>
        {/* <CardDescription>
          Average salary range distribution data
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 25,
            }}
          >
            <YAxis
              dataKey="salaryRange"
              type="category"
              tickLine={false}
              tickMargin={5}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="count" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" layout="vertical" radius={5}>
              <LabelList
                dataKey="count"
                position="insideRight"
                offset={2}
                className="fill-background"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          近60%岗位提供的月薪集中在20-40K
          {/* <TrendingUp className="h-4 w-4" /> */}
        </div>
        {/* <div className="leading-none text-muted-foreground">
          Showing total counts for the salary range distribution
        </div> */}
      </CardFooter>
    </Card>
  );
}
