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
    major: "computerScience",
    count: 111,
    fill: "var(--color-computerScience)",
  },
  {
    major: "artificialIntelligence",
    count: 41,
    fill: "var(--color-artificialIntelligence)",
  },
  { major: "mathematics", count: 30, fill: "var(--color-mathematics)" },

  {
    major: "softwareEngineering",
    count: 25,
    fill: "var(--color-softwareEngineering)",
  },
  {
    major: "informationTechnology",
    count: 19,
    fill: "var(--color-informationTechnology)",
  },
  { major: "statistics", count: 18, fill: "var(--color-statistics)" },
  { major: "dataScience", count: 17, fill: "var(--color-dataScience)" },
];

const chartConfig = {
  count: {
    label: "Count",
  },
  computerScience: {
    label: "计算机科学",
    color: "hsl(var(--chart-1))",
  },
  artificialIntelligence: {
    label: "人工智能",
    color: "hsl(var(--chart-2))",
  },
  mathematics: {
    label: "数学",
    color: "hsl(var(--chart-3))",
  },
  computer: {
    label: "计算机",
    color: "hsl(var(--chart-4))",
  },
  softwareEngineering: {
    label: "软件工程",
    color: "hsl(var(--chart-5))",
  },
  informationTechnology: {
    label: "信息技术",
    color: "hsl(var(--chart-1))",
  },
  statistics: {
    label: "统计学",
    color: "hsl(var(--chart-2))",
  },
  dataScience: {
    label: "数据科学",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function MarjorsBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 8 专业要求分布</CardTitle>
        <CardDescription>
          * 计数显示该专业被提及的次数，可能一个岗位提及多个可能的专业要求
        </CardDescription>
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
              dataKey="major"
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
          近一半岗位提及了要求具备计算机，AI，数学等工科背景{" "}
          {/* <TrendingUp className="h-4 w-4" /> */}
        </div>
        {/* <div className="leading-none text-muted-foreground">
          Showing total counts for different majors
        </div> */}
      </CardFooter>
    </Card>
  );
}
