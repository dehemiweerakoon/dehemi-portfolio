import { Button } from "../ui/moving-border";

const Skills = () => {
  return (
    <>
      <div
        className="relative justify-center items-center rounded-lg bg-gradient-to-b from-violet-950 to-black h-auto py-10 "
        id="skills"
      >
        <div className=" flex flex-row justify-center items-center">
            
        <Button
          borderRadius="1.75rem"
          className="bg-white  dark:bg-slate-900 text-base text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:scale-90"
        >
        Skills
        </Button>  
        </div>
     
    
        <div className="lg:flex md:grid md:grid-cols-5 grid grid-cols-3 sm:mx-0 mx-2 items-center justify-center my-10 lg:flex-row gap-3">
          <div className="backdrop-blur-2xl w-20 sm:w-30 bg-white/15 border-t-2 text-center border-pink-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110 hover:border-pink-400 hover:border-2 ">
            <i className="devicon-react-original colored sm:text-4xl "></i>
            <h1 className="text-xs sm:text-base"> React JS</h1>
          </div>
          <div className="backdrop-blur-2xl w-20 sm:w-30 bg-white/15 border-t-2 text-center border-pink-400   flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-pink-400 hover:border-2">
            <i className="devicon-nextjs-original-wordmark sm:text-4xl "></i>
            <h1 className="text-xs sm:text-base"> Next JS</h1>
          </div>
          <div className="backdrop-blur-2xl  w-20 sm:w-30 bg-white/15 border-t-2 text-center border-pink-400   flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-pink-400 hover:border-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              alt=""
              className="sm:w-10 sm:h-10  h-5 w-5 sm:mx-2 mx-4"
            />

            <h1 className="sm:text-base text-xs">TypeScript</h1>
          </div>
          <div className="backdrop-blur-2xl w-20 sm:w-30 bg-white/15 border-t-2 text-center border-pink-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-pink-400 hover:border-2">
            <i className="devicon-html5-plain-wordmark colored sm:text-4xl "></i>
            <h1 className="text-xs sm:text-base"> HTML</h1>
          </div>
          <div className="backdrop-blur-2xl w-20 sm:w-30 bg-white/15 border-t-2 text-center border-pink-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-pink-400 hover:border-2">
            <i className="devicon-css3-plain-wordmark colored sm:text-4xl "></i>
            <h1 className="text-xs sm:text-base">CSS</h1>
          </div>
          <div className="backdrop-blur-2xl  w-20 sm:w-30 bg-white/15 border-t-2 text-center border-pink-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-pink-400 hover:border-2">
            <i className="devicon-bootstrap-plain-wordmark colored sm:text-4xl "></i>
            <h1 className="text-xs sm:text-base">Bootstrap</h1>
          </div>
          <div className="backdrop-blur-2xl w-20 sm:w-30 text-center bg-white/15 border-t-2 border-pink-400  flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-pink-400 hover:border-2">
            <i className="devicon-tailwindcss-original colored sm:text-4xl "></i>
            <h1 className="text-xs sm:text-base">Tailwind</h1>
          </div>
          <div className="backdrop-blur-2xl w-20 sm:w-30 text-center bg-white/15 border-t-2 border-pink-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-pink-400 hover:border-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
              alt=""
              className="sm:h-10 sm:w-10 sm:mx-2 -5 w-5 mx-4"
            />
            <h1 className="text-xs sm:text-base">Figma</h1>
          </div>
        </div>
        {/* Programming languages */}
        <div className="lg:flex md:grid md:grid-cols-5 grid grid-cols-3 sm:mx-0 mx-2 items-center justify-center my-10 lg:flex-row gap-3">
          <div className="backdrop-blur-2xl w-20 sm:w-30 bg-white/15 border-t-2 text-center border-lime-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-lime-400 hover:border-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
              alt=""
              className="sm:w-10 sm:h-10  h-5 w-5 sm:mx-2 mx-4"
            />
            <h1 className="text-xs sm:text-base">Java</h1>
          </div>
          <div className="backdrop-blur-2xl w-20 sm:w-30 bg-white/15 border-t-2 text-center border-lime-400   flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-lime-400 hover:border-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              alt=""
              className="sm:w-10 sm:h-10  h-5 w-5 sm:mx-2 mx-4"
            />
            <h1 className="text-xs sm:text-base">Python</h1>
          </div>
          <div className="backdrop-blur-2xl  w-20 sm:w-30 bg-white/15 border-t-2 text-center border-lime-400   flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-lime-400 hover:border-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
              alt=""
              className="sm:w-10 sm:h-10  h-5 w-5 sm:mx-2 mx-4"
            />

            <h1 className="sm:text-base text-xs">C</h1>
          </div>
          <div className="backdrop-blur-2xl w-20 sm:w-30 bg-white/15 border-t-2 text-center border-lime-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-lime-400 hover:border-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
              alt=""
              className="sm:w-10 sm:h-10  h-5 w-5 sm:mx-2 mx-4"
            />
            <h1 className="text-xs sm:text-base">C#</h1>
          </div>
          <div className="backdrop-blur-2xl w-20 sm:w-30 bg-white/15 border-t-2 text-center border-lime-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-lime-400 hover:border-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
              alt=""
              className="sm:w-10 sm:h-10  h-5 w-5 sm:mx-2 mx-4"
            />
            <h1 className="text-xs sm:text-base">GO</h1>
          </div>
          <div className="backdrop-blur-2xl w-20 sm:w-30 bg-white/15 border-t-2 text-center border-lime-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-lime-400 hover:border-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt=""
              className="sm:w-10 sm:h-10  h-5 w-5 sm:mx-2 mx-4"
            />
            <h1 className="text-xs sm:text-base">JavaScript</h1>
          </div>
        </div>
        {/* backend  */}
        <div className="lg:flex md:grid md:grid-cols-5 grid grid-cols-3 sm:mx-0 mx-2 items-center justify-center my-10 lg:flex-row gap-3">
          <div className="backdrop-blur-2xl w-20 sm:w-30 text-center bg-white/15 border-t-2 border-sky-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-sky-400 hover:border-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
              alt=""
              className="sm:h-10 sm:w-10 sm:mx-2 -5 w-5 mx-4"
            />
            <h1 className="text-xs sm:text-base">MongoDB</h1>
          </div>
          <div className="backdrop-blur-2xl w-20 sm:w-30 text-center bg-white/15 border-t-2 border-sky-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-sky-400 hover:border-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
              alt=""
              className="sm:h-10 sm:w-10 sm:mx-2 -5 w-5 mx-4"
            />
            <h1 className="text-xs sm:text-base">MySQL</h1>
          </div>{" "}
          <div className="backdrop-blur-2xl  w-20 sm:w-30 bg-white/15 border-t-2 text-center border-sky-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-sky-400 hover:border-2">
            <i className="devicon-spring-original colored sm:text-4xl "></i>
            <h1 className="text-xs sm:text-base">Spring</h1>
          </div>
          <div className="backdrop-blur-2xl w-20 sm:w-30 text-center bg-white/15 border-t-2 border-sky-400  flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-sky-400 hover:border-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg"
              alt=""
              className="sm:h-10 sm:w-10 sm:mx-2 -5 w-5 mx-4"
            />

            <h1 className="text-xs sm:text-base">Hibernate</h1>
          </div>
          <div className="backdrop-blur-2xl w-20 sm:w-30 text-center bg-white/15 border-t-2 border-sky-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-sky-400 hover:border-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
              alt=""
              className="sm:h-10 sm:w-10 sm:mx-2 -5 w-5 mx-4"
            />
            <h1 className="text-xs sm:text-base">Node JS</h1>
          </div>
          <div className="backdrop-blur-2xl w-20 sm:w-30 text-center bg-white/15 border-t-2 border-sky-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-sky-400 hover:border-2">
            <i className="devicon-django-plain sm:text-4xl"></i>

            <h1 className="text-xs sm:text-base">Django</h1>
          </div>
          <div className="backdrop-blur-2xl w-20 sm:w-30 text-center bg-white/15 border-t-2 border-sky-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-sky-400 hover:border-2">
            <i className="devicon-express-original sm:text-4xl"></i>

            <h1 className="text-xs sm:text-base">Express</h1>
          </div>
        </div>
        <div className="lg:flex md:grid md:grid-cols-5 grid grid-cols-3 sm:mx-0 mx-2 items-center justify-center my-10 lg:flex-row gap-3">
          <div className="backdrop-blur-2xl w-20 sm:w-30 text-center bg-white/15 border-t-2 border-violet-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-violet-400 hover:border-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
              alt=""
              className="sm:h-10 sm:w-10 sm:mx-2 -5 w-5 mx-4"
            />
            <h1 className="text-xs sm:text-base">Postgresql</h1>
          </div>
          <div className="backdrop-blur-2xl w-20 sm:w-30 text-center bg-white/15 border-t-2 border-violet-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-violet-400 hover:border-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
              alt=""
              className="sm:h-10 sm:w-10 sm:mx-2 -5 w-5 mx-4"
            />
            <h1 className="text-xs sm:text-base">Docker</h1>
          </div>{" "}
          <div className="backdrop-blur-2xl  w-20 sm:w-30 bg-white/15 border-t-2 text-center border-violet-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-violet-400 hover:border-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"
              alt=""
              className="sm:h-10 sm:w-10 sm:mx-4 -5 w-5 mx-4"
            />
            <h1 className="text-xs sm:text-base mx-0">Kubernetes</h1>
          </div>
          <div className="backdrop-blur-2xl w-20 sm:w-30 text-center bg-white/15 border-t-2 border-violet-400  flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-violet-400 hover:border-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg"
              alt=""
              className="sm:h-10 sm:w-10 sm:mx-2 -5 w-5 mx-4"
            />

            <h1 className="text-xs sm:text-base">Git</h1>
          </div>
          <div className="backdrop-blur-2xl w-20 sm:w-30 text-center bg-white/15 border-t-2 border-violet-400 flex-flex-col justify-center items-center sm:p-7 p-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110  hover:border-violet-400 hover:border-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
              alt=""
              className="sm:h-10 sm:w-10 sm:mx-2 -5 w-5 mx-4"
            />
            <h1 className="text-xs sm:text-base">Postman</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
