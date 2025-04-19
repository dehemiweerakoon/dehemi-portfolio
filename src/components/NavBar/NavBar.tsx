import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
function NavBar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-5 sticky top-0bg-gradient-to-br from-violet-950 to-black rounded-2xl ">
        <nav className="relative  w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-3 md:px-6 lg:px-8 mx-auto">
          <div className="lg:col-span-3 flex items-center">
            <Link
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
              to={"#"}
              aria-label="Preline"
            >
              <p className="text-3xl text-pink-400 font-bold">DDW</p>
            </Link>
          </div>

          <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-1">
            <div
              className="lg:hidden"
              onClick={() => {
                setShow(!show);
              }}
            >
              <button
                type="button"
                className="hs-collapse-toggle size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="hs-navbar-hcail-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-hcail"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-hcail"
              >
                <svg
                  className={`shrink-0 size-4 ${show ? "hidden" : "block"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className={` shrink-0 size-4 ${show ? "block" : "hidden"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="hs-navbar-hcail"
            className={`lg:flex z-10 lg:flex-row lg:items-center absolute end-1/9 lg:w-auto lg:space-x-6 lg:mt-0 lg:border-0 lg:shadow-none lg:bg-transparent lg:p-0 ${
              show
                ? "absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 border-t border-gray-200 dark:bg-neutral-900 dark:border-neutral-700"
                : "hidden"
            } basis-full grow lg:basis-auto lg:order-2 lg:col-span-8 transition-all duration-300`}
            aria-labelledby="hs-navbar-hcail-collapse"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7">
              <div>
                <HashLink
                  className="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  to="/#about"
                  aria-current="page"
                >
                  About
                </HashLink>
              </div>
              <div>
                <HashLink
                  className="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  to="/#skills"
                >
                  Skills
                </HashLink>
              </div>
              <div>
                <HashLink
                  className="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  to="/#projects"
                >
                  Projects
                </HashLink>
              </div>
              <div>
                <Link
                  className="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  to="#"
                >
                  Education
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  to="#"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
