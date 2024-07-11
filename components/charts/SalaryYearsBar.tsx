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
  {
    experience: "experience6",
    medianSalary: 18.0,
    fill: "var(--color-experience6)",
  },
  {
    experience: "experience1",
    medianSalary: 12.5,
    fill: "var(--color-experience1)",
  },
  {
    experience: "experience2",
    medianSalary: 20.0,
    fill: "var(--color-experience2)",
  },
  {
    experience: "experience3",
    medianSalary: 25.25,
    fill: "var(--color-experience3)",
  },
  {
    experience: "experience4",
    medianSalary: 35.0,
    fill: "var(--color-experience4)",
  },
  {
    experience: "experience5",
    medianSalary: 32.5,
    fill: "var(--color-experience5)",
  },

  {
    experience: "experience7",
    medianSalary: 22.0,
    fill: "var(--color-experience7)",
  },
];

const chartConfig = {
  medianSalary: {
    label: "Median Salary",
  },
  experience6: {
    label: "在校/应届",
    color: "hsl(var(--chart-6))",
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
  experience7: {
    label: "经验不限",
    color: "hsl(var(--chart-7))",
  },
} satisfies ChartConfig;

export function SalaryYearsBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>不同经验年限候选人的月薪中位数（单位：K）</CardTitle>
        {/* <CardDescription>
          Median salary distribution by experience
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
              dataKey="experience"
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
          月薪中位数呈现上升趋势，5-10年经验的候选人月薪有阶跃提升
          {/* <TrendingUp className="h-4 w-4" /> */}
        </div>
        {/* <div className="leading-none text-muted-foreground">
          Showing median salaries for different experience levels
        </div> */}
      </CardFooter>
    </Card>
  );
}
