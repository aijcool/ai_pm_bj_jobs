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
  { size: "size1", medianSalary: 22.5, fill: "var(--color-size1)" },
  { size: "size2", medianSalary: 24.0, fill: "var(--color-size2)" },
  { size: "size3", medianSalary: 25.0, fill: "var(--color-size3)" },
  { size: "size4", medianSalary: 26.25, fill: "var(--color-size4)" },
  { size: "size5", medianSalary: 30.0, fill: "var(--color-size5)" },
  { size: "size6", medianSalary: 37.5, fill: "var(--color-size6)" },
];

const chartConfig = {
  medianSalary: {
    label: "Median Salary",
  },
  size1: {
    label: "0-20人",
    color: "hsl(var(--chart-1))",
  },
  size2: {
    label: "20-99人",
    color: "hsl(var(--chart-2))",
  },
  size3: {
    label: "100-499人",
    color: "hsl(var(--chart-3))",
  },
  size4: {
    label: "500-999人",
    color: "hsl(var(--chart-4))",
  },
  size5: {
    label: "1000-9999人",
    color: "hsl(var(--chart-5))",
  },
  size6: {
    label: "10000人以上",
    color: "hsl(var(--chart-6))",
  },
} satisfies ChartConfig;

export function SalarySizeBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>不同规模公司的月薪中位数（单位：K）</CardTitle>
        {/* <CardDescription>
          Median salary distribution by company size
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
              dataKey="size"
              type="category"
              tickLine={false}
              tickMargin={5}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="medianSalary" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="medianSalary" layout="vertical" radius={5}>
              <LabelList
                dataKey="medianSalary"
                position="insideRight"
                offset={8}
                className="fill-background"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          薪酬随着招聘公司的规模水涨船高
          {/* <TrendingUp className="h-4 w-4" /> */}
        </div>
        {/* <div className="leading-none text-muted-foreground">
          Showing median salaries for different company sizes
        </div> */}
      </CardFooter>
    </Card>
  );
}
