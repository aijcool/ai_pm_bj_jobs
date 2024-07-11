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
  { industry: "internet", count: 134, fill: "var(--color-internet)" },
  { industry: "software", count: 41, fill: "var(--color-software)" },
  { industry: "services", count: 11, fill: "var(--color-services)" },
  { industry: "education", count: 11, fill: "var(--color-education)" },
  { industry: "other", count: 93, fill: "var(--color-other)" },
];

const chartConfig = {
  count: {
    label: "Count",
  },
  internet: {
    label: "互联网",
    color: "hsl(var(--chart-1))",
  },
  software: {
    label: "计算机软件",
    color: "hsl(var(--chart-2))",
  },
  services: {
    label: "企业服务",
    color: "hsl(var(--chart-3))",
  },
  education: {
    label: "在线教育",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "其他",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function IndustryBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>哪些行业在招聘AI产品经理</CardTitle>
        {/* <CardDescription>Industry distribution data</CardDescription> */}
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
          岗位主要集中在互联网和软件行业，累计占比约60%
          {/* <TrendingUp className="h-4 w-4" /> */}
        </div>
        {/* <div className="leading-none text-muted-foreground">
          Showing total counts for the industry distribution
        </div> */}
      </CardFooter>
    </Card>
  );
}
