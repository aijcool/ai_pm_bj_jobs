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
  { industry: "internet", medianSalary: 30.0, fill: "var(--color-internet)" },
  { industry: "services", medianSalary: 16.0, fill: "var(--color-services)" },
  { industry: "education", medianSalary: 42.5, fill: "var(--color-education)" },
  { industry: "software", medianSalary: 25.0, fill: "var(--color-software)" },
];

const chartConfig = {
  medianSalary: {
    label: "Median Salary",
  },
  internet: {
    label: "互联网",
    color: "hsl(var(--chart-1))",
  },
  services: {
    label: "企业服务",
    color: "hsl(var(--chart-2))",
  },
  education: {
    label: "在线教育",
    color: "hsl(var(--chart-3))",
  },
  software: {
    label: "计算机软件",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function SalaryIndustryBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>不同行业的月薪中位数（单位：K）</CardTitle>
        {/* <CardDescription>
          Median salary distribution by industry
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
              dataKey="industry"
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
          互联网薪酬中位数30K，企业服务和计算机软件次之也符合预期，在线教育招聘统计数据较少且都是高阶岗位拉高了数据
        </div>
        {/* <div className="leading-none text-muted-foreground">
          Showing median salaries for different industries
        </div> */}
      </CardFooter>
    </Card>
  );
}
