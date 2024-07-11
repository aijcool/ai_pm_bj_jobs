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
  { experience: "experience1", count: 1, fill: "var(--color-experience1)" },
  { experience: "experience2", count: 50, fill: "var(--color-experience2)" },
  { experience: "experience3", count: 140, fill: "var(--color-experience3)" },
  { experience: "experience4", count: 54, fill: "var(--color-experience4)" },
  { experience: "experience5", count: 3, fill: "var(--color-experience5)" },
  { experience: "experience6", count: 3, fill: "var(--color-experience6)" },
  { experience: "experience7", count: 22, fill: "var(--color-experience7)" },
];

const chartConfig = {
  count: {
    label: "Count",
  },
  experience1: {
    label: "1年以内",
    color: "hsl(var(--chart-1))",
  },
  experience2: {
    label: "1-3年",
    color: "hsl(var(--chart-2))",
  },
  experience3: {
    label: "3-5年",
    color: "hsl(var(--chart-3))",
  },
  experience4: {
    label: "5-10年",
    color: "hsl(var(--chart-4))",
  },
  experience5: {
    label: "10年以上",
    color: "hsl(var(--chart-5))",
  },
  experience6: {
    label: "在校/应届",
    color: "hsl(var(--chart-6))",
  },
  experience7: {
    label: "经验不限",
    color: "hsl(var(--chart-7))",
  },
} satisfies ChartConfig;

export function YearsBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>从业经验年限分布</CardTitle>
        {/* <CardDescription>Count distribution by experience</CardDescription> */}
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
              dataKey="experience"
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
          岗位普遍倾向具备了一定的从业经验尤其3-5年的岗位需求占了近50%{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        {/* <div className="leading-none text-muted-foreground">
          Showing total counts for different experience levels
        </div> */}
      </CardFooter>
    </Card>
  );
}
