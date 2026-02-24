import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { MdEmail } from "react-icons/md";

const page = () => {
  return (
    <section className="w-full px-4 max-w-5xl">
      <div className="flex flex-col gap-4 w-full mt-16">
        <Image
          src={"/me.jpg"}
          width={50}
          height={50}
          alt="me"
          className="rounded-full"
        />
        <h1 className="text-xl font-bold">Winner</h1>
        <h2 className="text-[clamp(20px,1.3vw,3rem)]">Software Engineer</h2>
        <p className="text-gray-400">
          I'm Winner a software developer passionate about solving problems and
          software solutions.
        </p>
        <p className="text-gray-400">
          I primarily work with Java, Typescript and Go. But I am interested in
          a lot of other technologies.
        </p>
        <Link
          download
          href={"/resume.pdf"}
          target="_blank"
          className="text-gray-400 underline"
        >
          Resume
        </Link>
        <div className="flex gap-2">
          <Link
            href={"https://www.linkedin.com/in/eromoigbe-agbonikpeya/"}
            target="_blank"
          >
            <LiaLinkedinIn />
          </Link>
          <Link href={"https://x.com/winnerx0"} target="_blank">
            <FaXTwitter />
          </Link>
          <Link href={"https://github.com/winnerx0"} target="_blank">
            <FaGithub />
          </Link>
          <Link href={"mailto:winneragbonikpeya@gmail.com"} target="_blank">
            <MdEmail />
          </Link>
        </div>
        <hr />
      </div>
      <div className="flex flex-col gap-4 w-full mt-16">
        <h1 className="text-xl font-bold">Projects</h1>
        <ul className="text-gray-400 divide-y">
          <li className="py-4">
            <Link
              href="https://notivue.vercel.app/"
              className="underline-offset-4 hover:underline transition-all duration-200"
            >
              • Notivue
            </Link>{" "}
            - AI Meeting Analyzer
          </li>

          <li className="py-4">
            <Link
              href="https://simon-therapist.vercel.app/"
              className="underline-offset-4 hover:underline transition-all duration-200"
            >
              • Simon
            </Link>{" "}
            - AI Therapist
          </li>

          <li className="py-4">
            <Link
              href="https://lyra-pg.vercel.app/"
              className="underline-offset-4 hover:underline transition-all duration-200"
            >
              • Lyra
            </Link>{" "}
            - Real time database visualization tool
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4 w-full mt-16">
        <h1 className="text-xl font-bold">Work</h1>
        <div>
          <h2 className="text-gray-400">Tredbase June 2025 - Present</h2>
        </div>
        <hr />
        <div>
          <h2 className="text-gray-400">Luminevent June 2025 - July 2025</h2>
        </div>
        <hr />
        <div>
          <h2 className="text-gray-400">TekkTopia Sept 2024 - Jan 2025</h2>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default page;
