import About from "../../components/About/About";
import Education from "../../components/Education/Education";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import { cn } from "../../lib/utils";
import Cover from "../Cover/Cover";

const Home = () => {
  return (
    <>
      <div className="h-auto   bg-gradient-to-br from-violet-950 to-black relative ">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:50px_50px]",
            "[background-repeat:repeat]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}

        <NavBar />
        <Cover />
      </div>
      <About />
      <Skills/>
      <Projects/>
      <Education/>
    </>
  );
};

export default Home;
