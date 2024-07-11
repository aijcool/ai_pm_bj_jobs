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
  { skill: "machineLearning", count: 74, fill: "var(--color-machineLearning)" },
  { skill: "dataAnalysis", count: 68, fill: "var(--color-dataAnalysis)" },
  { skill: "python", count: 57, fill: "var(--color-python)" },
  { skill: "deepLearning", count: 44, fill: "var(--color-deepLearning)" },
  { skill: "communication", count: 35, fill: "var(--color-communication)" },
  { skill: "dataMining", count: 27, fill: "var(--color-dataMining)" },
  { skill: "logicalThinking", count: 26, fill: "var(--color-logicalThinking)" },
  {
    skill: "naturalLanguageProcessing",
    count: 25,
    fill: "var(--color-naturalLanguageProcessing)",
  },
  { skill: "productDesign", count: 15, fill: "var(--color-productDesign)" },
  {
    skill: "projectManagement",
    count: 15,
    fill: "var(--color-projectManagement)",
  },
  { skill: "aiTechnology", count: 13, fill: "var(--color-aiTechnology)" },
  { skill: "learningAbility", count: 12, fill: "var(--color-learningAbility)" },
  {
    skill: "communicationCoordination",
    count: 12,
    fill: "var(--color-communicationCoordination)",
  },
  { skill: "teamwork", count: 11, fill: "var(--color-teamwork)" },
  { skill: "java", count: 10, fill: "var(--color-java)" },
  {
    skill: "creativeThinking",
    count: 9,
    fill: "var(--color-creativeThinking)",
  },
  {
    skill: "requirementAnalysis",
    count: 9,
    fill: "var(--color-requirementAnalysis)",
  },
  { skill: "marketAnalysis", count: 8, fill: "var(--color-marketAnalysis)" },
  {
    skill: "communicationSkills",
    count: 8,
    fill: "var(--color-communicationSkills)",
  },
];

// Sort the chartData by count in descending order and keep only the top 10
const sortedChartData = chartData
  .sort((a, b) => b.count - a.count)
  .slice(0, 10);

const chartConfig = {
  count: {
    label: "Count",
  },
  machineLearning: {
    label: "机器学习",
    color: "hsl(var(--chart-2))",
  },
  dataAnalysis: {
    label: "数据分析",
    color: "hsl(var(--chart-2))",
  },
  python: {
    label: "Python",
    color: "hsl(var(--chart-2))",
  },
  deepLearning: {
    label: "深度学习",
    color: "hsl(var(--chart-2))",
  },
  communication: {
    label: "沟通能力",
    color: "hsl(var(--chart-2))",
  },
  dataMining: {
    label: "数据挖掘",
    color: "hsl(var(--chart-2))",
  },
  logicalThinking: {
    label: "逻辑思维",
    color: "hsl(var(--chart-2))",
  },
  naturalLanguageProcessing: {
    label: "自然语言处理",
    color: "hsl(var(--chart-2))",
  },
  productDesign: {
    label: "产品设计",
    color: "hsl(var(--chart-2))",
  },
  projectManagement: {
    label: "项目管理",
    color: "hsl(var(--chart-2))",
  },
  aiTechnology: {
    label: "AI技术",
    color: "hsl(var(--chart-2))",
  },
  learningAbility: {
    label: "学习能力",
    color: "hsl(var(--chart-2))",
  },
  communicationCoordination: {
    label: "沟通协调",
    color: "hsl(var(--chart-2))",
  },
  teamwork: {
    label: "团队协作",
    color: "hsl(var(--chart-2))",
  },
  java: {
    label: "Java",
    color: "hsl(var(--chart-2))",
  },
  creativeThinking: {
    label: "创新思维",
    color: "hsl(var(--chart-2))",
  },
  requirementAnalysis: {
    label: "需求分析",
    color: "hsl(var(--chart-2))",
  },
  marketAnalysis: {
    label: "市场分析",
    color: "hsl(var(--chart-2))",
  },
  communicationSkills: {
    label: "沟通",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function SkillsBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 10 要求具备的技能</CardTitle>
        <CardDescription>* 计数显示该技能在岗位描述中提及的累计次数</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={sortedChartData}
            layout="vertical"
            margin={{
              left: 25,
            }}
          >
            <YAxis
              dataKey="skill"
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
          相比沟通能力和项目管理等软技能，AI产品岗位更强调机器学习、数据分析和Python等硬技能。{" "}
          {/* <TrendingUp className="h-4 w-4" /> */}
        </div>
        {/* <div className="leading-none text-muted-foreground">
          Showing total counts for different skills
        </div> */}
      </CardFooter>
    </Card>
  );
}
