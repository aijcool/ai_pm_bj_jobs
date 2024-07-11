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
  { size: "size1", count: 33, fill: "var(--color-size1)" },
  { size: "size2", count: 82, fill: "var(--color-size2)" },
  { size: "size3", count: 49, fill: "var(--color-size3)" },
  { size: "size4", count: 26, fill: "var(--color-size4)" },
  { size: "size5", count: 61, fill: "var(--color-size5)" },
  { size: "size6", count: 47, fill: "var(--color-size6)" },
];

const chartConfig = {
  count: {
    label: "Count",
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

export function CompanySizeBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>招聘该岗位的公司规模</CardTitle>
        {/* <CardDescription>Company size distribution data</CardDescription> */}
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
            <XAxis dataKey="count" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" layout="vertical" radius={5}>
              <LabelList
                dataKey="count"
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
          36%集中在千人以上规模的大厂，30%集中在百人规模左右的公司，可见AI领域创业的火热
          {/* <TrendingUp className="h-4 w-4" /> */}
        </div>
        {/* <div className="leading-none text-muted-foreground">
          Showing total counts for the company size distribution
        </div> */}
      </CardFooter>
    </Card>
  );
}
