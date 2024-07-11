import React from "react";
import { CompanySizeBar } from "@/components/charts/CompanySizeBar";
import { SalaryIndustryBar } from "@/components/charts/SalaryIndustryBar";
import { SalarySizeBar } from "@/components/charts/SalarySizeBar";
import { DegreesBar } from "@/components/charts/DegreesBar";
import { IndustryBar } from "@/components/charts/IndustryBar";
import { MarjorsBar } from "@/components/charts/MarjorsBar";
import { ProjectsBar } from "@/components/charts/ProjectsBar";
import { SalaryBar } from "@/components/charts/SalaryBar";
import { SalaryYearsBar } from "@/components/charts/SalaryYearsBar";
import { SkillsBar } from "@/components/charts/SkillsBar";
import { YearsBar } from "@/components/charts/YearsBar";

const Page = () => {
  return (
    <div>
      {/* Top bar with black background and white/gray text */}
      <div className="w-full bg-black text-white p-4">
        <div className="max-w-[1600px] mx-auto p-4 mt-4">
          <h1 className="text-3xl font-bold">AI产品经理（北京）招聘岗位分析</h1>
          <p className="text-gray-300 mt-4">
            数据取自某招聘网站2024年7月9日检索出的300条数据，个别分类结果样本较少，结果仅供参考
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1600px] mx-auto p-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <IndustryBar />
          <CompanySizeBar />
          <SalaryBar />
          <SalaryIndustryBar />
          <SalarySizeBar />
          <SalaryYearsBar />
          <DegreesBar />
          <MarjorsBar />
          <YearsBar />
        </div>

        <div className="flex flex-row gap-10 pt-10">
          <div className="flex-1">
            <SkillsBar />
          </div>
          <div className="flex-1">
            <ProjectsBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
