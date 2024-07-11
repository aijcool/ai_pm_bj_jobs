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
  { degree: "doctorate", count: 1, fill: "var(--color-doctorate)" },
  { degree: "associate", count: 3, fill: "var(--color-associate)" },
  { degree: "noDegree", count: 3, fill: "var(--color-no-degree)" },
  { degree: "bachelor", count: 238, fill: "var(--color-bachelor)" },
  { degree: "master", count: 28, fill: "var(--color-master)" },
];

const chartConfig = {
  count: {
    label: "Count",
  },
  doctorate: {
    label: "博士",
    color: "hsl(var(--chart-1))",
  },
  associate: {
    label: "大专",
    color: "hsl(var(--chart-2))",
  },
  noDegree: {
    label: "学历不限",
    color: "hsl(var(--chart-3))",
  },
  bachelor: {
    label: "本科",
    color: "hsl(var(--chart-4))",
  },
  master: {
    label: "硕士",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function DegreesBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>学历要求分布</CardTitle>
        {/* <CardDescription>Degree distribution data</CardDescription> */}
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
              dataKey="degree"
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
          80%的岗位要求本科以上。AI产品的确对技术背景要求较高，有10%的岗位甚至对硕士和AI专业定为了准入门槛。{" "}
          {/* <TrendingUp className="h-4 w-4" /> */}
        </div>
        {/* <div className="leading-none text-muted-foreground">
          Showing total counts for the degree distribution
        </div> */}
      </CardFooter>
    </Card>
  );
}
