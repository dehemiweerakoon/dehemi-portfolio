"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Textarea } from "../ui/textarea";
import { RiHome2Line } from "react-icons/ri";
export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <div className="shadow-input   w-full max-w-lg rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Contact With Me
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          If you have any concerns Please reach me without any hesitation.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">Your Name</Label>
              <Input id="firstname" placeholder="Enter Your Name" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Your Message</Label>
            <Textarea id="message" placeholder="Your Message" />
          </LabelInputContainer>
          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-violet-900 dark:to-sky-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Send &rarr;
            <BottomGradient />
          </button>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        </form>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

const ContactUs = () => {
  return (
    <>
      <div className="mt-0 sm:px-10 flex flex-row justify-center items-center  ">
        <h1 className="text-3xl font-bold text-indigo-400">Contact Me</h1>
      </div>
      <div className="mt-10 sm:flex sm:flex-row  justify-center items-center p-5">
        <SignupFormDemo />
        <div className="flex flex-col gap-10">
          <div className="flex flex-row gap-2 border-2 shadow shadow-violet-600 cursor-pointer border-neutral-900 rounded-2xl px-10 py-5 items-center justify-center">
          <MdOutlineAlternateEmail className="text-2xl text-black bg-white rounded-2xl p-0.5" />
            <h2>dehemiweerakoon@gmail.com</h2>
          </div>
          <div className="flex flex-row gap-2 border-2 shadow shadow-violet-600 cursor-pointer border-neutral-900 rounded-2xl px-10 py-5 items-center justify-center">
          <FaPhone className="text-2xl text-black bg-white rounded-2xl p-0.5" />
            <h2>+94 719915800</h2>
          </div>
          <div className="flex flex-row gap-2 border-2 shadow shadow-violet-600 cursor-pointer border-neutral-900 rounded-2xl px-10 py-5 items-center justify-center">
          <RiHome2Line className="text-2xl text-black bg-white rounded-2xl p-0.5" />
            <h2>Polommaruwa Tangalle Sri Lanka</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
