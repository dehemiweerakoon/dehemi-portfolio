/* eslint-disable @typescript-eslint/no-unused-vars */
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { TypewriterEffectSmooth } from "../../lib/typewriter-effect";
import { Link } from "react-router-dom";
export function GridBackgroundDemo() {
  return (
    // <div className="relative flex h-[50rem] w-[90%] sm:mx-10 mx-4  bg-white dark:bg-black">
    //   <div
    //     className={cn(
    //       "absolute inset-0",
    //       "[background-size:50px_50px]",
    //       "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
    //       "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
    //     )}
    //   />
    //   {/* Radial gradient for the container to give a faded look */}
    //   <div className="pointer-events-none absolute inset-0 flex  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <HeroSection />
    // </div>
  );
}
const words = [
  {
    text: "Hi, I'm",
  },
  {
    text: "Dehemi Weerakoon,",
    className: "dark:text-pink-500 text-pink-900",
  },{

    text:"Undergraduate"
  },
  {
    text: "Software Developer",
    className: "dark:text-[#16f2b3] text-green-900",
  },
];
export function HeroSection() {
  const personalData = {
    name: "John Doe",
    designation: "Full Stack Developer",
    github: "https://github.com/dehemiweerakoon",
    linkedIn: "https://www.linkedin.com/in/dehemi-weerakoon/",
    resume: "https://example.com/resume.pdf",
  };

  return (
    <>
      <section className="relative flex flex-col items-center justify-between py-4 lg:py-0 mt-7 h-auto mb-30">
        <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-50 gap-y-8 lg:mx-10">
          <div className="order-2 lg:order-2 border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r dark:bg-white/20  dark:backdrop-grayscale-4">
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>

            <div className="px-4 lg:px-8 py-5">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-pink-300"></div>
                <div className="h-3 w-3 rounded-full bg-lime-300"></div>
                <div className="h-3 w-3 rounded-full bg-purple-800"></div>
              </div>
            </div>

            <div className="overflow-hidden border-t-[2px] border-purple-900 px-4 lg:px-8 py-4 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="blink">
                  <span className="mr-2 text-red-300">const</span>
                  <span className="mr-2 text-lime-300">Developer</span>
                  <span className="mr-2 text-red-300">=</span>
                  <span className="text-gray-400">{"{"}</span>
                </div>
                <div>
                  <span className="ml-8 mr-2  dark:text-white">name:</span>
                  <span className="text-gray-400">'</span>
                  <span className="dark:text-cyan-200">Dehemi Weerakoon</span>
                  <span className="text-gray-400">',</span>
                </div>
                <div className="ml-8 mr-2">
                  <span className=" dark:text-white">skills:</span>
                  <span className="text-gray-400">[</span>
                  <span className="dark:text-cyan-200">
                    'Java', 'Spring Boot', 'MySQL', 'React', 'Git'
                  </span>
                  <span className="text-gray-400">],</span>
                </div>
                <div>
                  <span className="ml-8 mr-2  dark:text-white">hardWorker:</span>
                  <span className="text-orange-500">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-8 mr-2  dark:text-white">quickLearner:</span>
                  <span className="text-orange-500">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-8 mr-2  dark:text-white">problemSolver:</span>
                  <span className="text-orange-500">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-8 mr-2 text-green-400">Work_Handle</span>
                  <span className="text-orange-500">function</span>
                  <span className="text-gray-400">() {"{"}</span>
                </div>
                <div>
                  <span className="ml-16 text-orange-400">return</span>{" "}
                  <span className="text-gray-400">(</span>
                </div>
                <div>
                  <span className="ml-24 text-cyan-400">this.</span>
                  <span className="dark:text-white">hardWorker</span>{" "}
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-24 text-cyan-400">this.</span>
                  <span className="dark:text-white">problemSolver</span>{" "}
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-24 text-cyan-400">this.</span>
                  <span className="dark:text-white">TimeWorker</span>
                </div>
                <div>
                  <span className="ml-16 text-gray-400">)</span>
                </div>
              </code>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10 mx-5 lg:mx-20">
            <h1 className="text-3xl font-bold leading-10  dark:text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
              <TypewriterEffectSmooth words={words} className="" />
            </h1>
            <div className="my-6 flex flex-row items-center gap-5 justify-center ">
              <Link
                to={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <BsGithub size={30} />
              </Link>
              <Link
                to={personalData.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <BsLinkedin size={30} />
              </Link>
            </div>

            <div className="flex items-center gap-3 ">
              <Link
                to="mailto:dehemiweerakoon@gmail.com"
                className="bg-gradient-to-r to-pink-500 from-lime-200 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
              >
                <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full text-white font-medium uppercase tracking-wider flex items-center gap-1 hover:gap-3">
                  <span>Contact me</span>
                  <RiContactsFill size={17} />
                </button>
              </Link>

              <Link
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-lime-500 to-pink-500 px-3 md:px-8 py-3 md:py-4 text-xs md:text-sm font-medium uppercase text-white"
                target="_blank"
                rel="noreferrer"
                download="My_CV.pdf"
                to={"/Dehemi_Weerakoon.pdf"}
              >
                {" "}
                {/* stored in public folder to describe the parties ...*/}
                <span>Get Resume</span>
                <MdDownload size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const Cover = () => {
  return (
    <>
      <GridBackgroundDemo />
    </>
  );
};

export default Cover;
