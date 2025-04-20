import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Meteors } from "../../components/ui/meteors";

const edu = [
  {
    education: "Bachelor Degree",
    description: "Bsc in Computer Science specialized in Data Science.",
    year:"2022-Present"
  },
  {
    education: "Advanced Level - 2020",
    description:
      "Advanced Level (G.C.E)-2020 Physical Science Stream - Z Score 1.5648",
    year:"2020 A/L"
  },
];
export function MeteorsDemo({
  education,
  description,
  year
}: {
  education: string;
  description: string;
  year:string
}) {
  return (
    <div className="">
      <div className="relative w-full max-w-lg hover:scale-105 transition-transform  duration-300">
        <div className="absolute  inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <div className=" flex flex-row  items-center justify-center">
              <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
            {education}
          </h1>
          <h1 className="absolute z-50 mb-4 end-0 text-sm font-bold text-sky-400 p-5">
            {year}
          </h1>
          </div>
        

          <p className="relative z-50 mb-4 text-base font-normal text-slate-300">
            {description}
          </p>
          {/* Meaty part - Meteor effect */}
          <Meteors number={80} />
        </div>
      </div>
    </div>
  );
}

const Education = () => {
  return (
    <>
      <div className="py-10 px-2 " id="education">
        <div className=" flex flex-row justify-center items-center text-3xl font-bold  ">
          Education
        </div>
        <div className="sm:flex sm:flex-row sm:justify-start sm:items-center gap-0 mt-10 overflow-hidden">
          <DotLottieReact
            src="https://lottie.host/30414f7e-d324-44d2-aa22-518bd052d5a2/wbEHWiE14E.lottie"
            loop
            autoplay
            className="sm:w-3xl w-lg "
          />
          <div className="flex flex-col gap-10">
            <MeteorsDemo
              education={edu[0].education}
              description={edu[0].description}
              year={edu[0].year}
            />
            <MeteorsDemo
              education={edu[1].education}
              description={edu[1].description}
              year={edu[1].year}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
