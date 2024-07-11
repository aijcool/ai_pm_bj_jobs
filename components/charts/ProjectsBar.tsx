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
    experience: "machineLearningProject",
    count: 20,
    fill: "var(--color-machineLearningProject)",
  },
  { experience: "nlpProject", count: 25, fill: "var(--color-nlpProject)" },
  {
    experience: "dataScienceProject",
    count: 20,
    fill: "var(--color-dataScienceProject)",
  },
  {
    experience: "dataMiningProject",
    count: 16,
    fill: "var(--color-dataMiningProject)",
  },
  {
    experience: "dataAnalysisProject",
    count: 14,
    fill: "var(--color-dataAnalysisProject)",
  },
  {
    experience: "projectManagement",
    count: 16,
    fill: "var(--color-projectManagement)",
  },
  {
    experience: "aiProductExperience",
    count: 12,
    fill: "var(--color-aiProductExperience)",
  },
  {
    experience: "teamManagement",
    count: 10,
    fill: "var(--color-teamManagement)",
  },
  {
    experience: "computerVisionProject",
    count: 5,
    fill: "var(--color-computerVisionProject)",
  },
  {
    experience: "productExperience",
    count: 5,
    fill: "var(--color-productExperience)",
  },
  {
    experience: "businessIntelligenceProject",
    count: 5,
    fill: "var(--color-businessIntelligenceProject)",
  },
  { experience: "teamwork", count: 4, fill: "var(--color-teamwork)" },
  { experience: "aiProject", count: 4, fill: "var(--color-aiProject)" },
];

// Sort the chartData by count in descending order and keep only the top 10
const sortedChartData = chartData
  .sort((a, b) => b.count - a.count)
  .slice(0, 10);

const chartConfig = {
  count: {
    label: "Count",
  },
  machineLearningProject: {
    label: "机器学习项目",
    color: "hsl(var(--chart-2))",
  },
  nlpProject: {
    label: "自然语言处理项目",
    color: "hsl(var(--chart-2))",
  },
  dataScienceProject: {
    label: "数据科学项目",
    color: "hsl(var(--chart-2))",
  },
  dataMiningProject: {
    label: "数据挖掘项目",
    color: "hsl(var(--chart-2))",
  },
  dataAnalysisProject: {
    label: "数据分析项目",
    color: "hsl(var(--chart-2))",
  },
  projectManagement: {
    label: "项目管理",
    color: "hsl(var(--chart-2))",
  },
  aiProductExperience: {
    label: "AI产品经验",
    color: "hsl(var(--chart-2))",
  },
  teamManagement: {
    label: "团队管理",
    color: "hsl(var(--chart-2))",
  },
  computerVisionProject: {
    label: "计算机视觉项目",
    color: "hsl(var(--chart-2))",
  },
  productExperience: {
    label: "产品经验",
    color: "hsl(var(--chart-2))",
  },
  businessIntelligenceProject: {
    label: "商业智能项目",
    color: "hsl(var(--chart-2))",
  },
  teamwork: {
    label: "团队合作",
    color: "hsl(var(--chart-2))",
  },
  aiProject: {
    label: "AI项目",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ProjectsBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 10 要求具备的项目经验</CardTitle>
        <CardDescription>
          * 计数显示该项目经验在岗位描述中提及的累计次数
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={sortedChartData}
            layout="vertical"
            margin={{
              left: 50,
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
          与技能的要求一致，AI产品岗位强调对NLP, ML, DS, DA, CV等AI项目经验
          {/* <TrendingUp className="h-4 w-4" /> */}
        </div>
        {/* <div className="leading-none text-muted-foreground">
          Showing total counts for different experiences
        </div> */}
      </CardFooter>
    </Card>
  );
}
