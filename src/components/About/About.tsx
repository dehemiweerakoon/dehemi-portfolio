import dehemi_image from "../../assets/dehemi_image.jpg";
import { cn } from "../../lib/utils"; // only if you're using cn()

const About = () => {
  return (
    <>
    <div className="h-auto w-auto sm:mx-5 mx-4 bg-gradient-to-tr from-violet-950 to-black relative " id="about">
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:50px_50px]",
          "[background-repeat:repeat]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )} />
      <div className="pointer-events-none absolute inset-0 z-10 flex bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      <div
        className="relative z-20 p-2 md:p-10 lg:p-16 lg:w-8/9  sm:flex sm:flex-row md:gap-10 gap-2 sm:items-center"
        style={{ textAlign: "justify" }}
      >
        <div className="p-[2px] rounded-lg bg-gradient-to-r from-lime-300 to-pink-400 mb-4 sm:mb-0 sm:mr-4 mx-auto">
          <div className="bg-white dark:bg-black rounded-lg p-4 flex items-center justify-center">
            <img
              className="h-auto max-w-xs transition-all duration-300 rounded-lg  hover:scale-115"
              src={dehemi_image}
              alt="image description" />
          </div>
        </div>

        {/* Your actual About content here */}
        <div>
          {" "}
          <h2 className="md:text-2xl text-base font-bold mb-4 ">About Me</h2>
          <p className="md:text-base text-sm ">
            A passionate and driven Computer Science undergraduate with hands-on
            experience in software development, backend engineering, and machine
            learning. I enjoy building full-stack applications that solve
            real-world problems, and I'm always eager to explore new
            technologies and improve my skills. With a strong foundation in
            Java, Spring Boot, React, and Python, I've worked on projects
            ranging from eCommerce platforms to intelligent systems like
            diabetic detection and movie recommendation apps. I'm a
            collaborative team player who values clean code, creative thinking,
            and continuous learning.
          </p>
        </div>
      </div>
    </div></>
  );
};

export default About;
