import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Projects from "./components/home/Projects";

const page = () => {
  return (
    <section className="w-full">
      <div className="min-h-dvh flex flex-col gap-4 px-2 items-center justify-center w-full">
        <Image
          src={"/me.jpg"}
          width={50}
          height={50}
          alt="me"
          className="rounded-full"
        />
        <h1 className="text-[clamp(60px,5vw,15rem)] font-bold">Winner</h1>
        <h2 className="text-[clamp(20px,1.3vw,3rem)]">Software Developer</h2>
        <p className="w-full max-w-xl text-center text-gray-400">
          I'm Winner Agbonikpeya a software developer experienced in frontend
          web development and backend development
        </p>
        <div className="flex gap-2">
          <Link href={"/"}>
            <FaThreads />
          </Link>
          <Link href={"/"}>
            <FaXTwitter />
          </Link>
        </div>
      </div>
    
    
      <div className="px-4 min-h-dvh bg-foreground text-background flex flex-col gap-2">
       <Projects/>
      </div>
    </section>
  );
};

export default page;
