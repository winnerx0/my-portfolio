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
        <p className="w-full max-w-xl text-gray-400">
          I'm Winner a software developer experienced in frontend web
          development and backend development
        </p>
        <Link
          download
          href={"/Agbonikpeya-Eromoigbe-Winner.pdf"}
          target="parent"
          className="text-gray-400 underline"
        >
          Resume
        </Link>
        <div className="flex gap-2">
          <Link href={"https://www.linkedin.com/in/eromoigbe-agbonikpeya/"}>
            <LiaLinkedinIn />
          </Link>
          <Link href={"https://x.com/winnerx0"}>
            <FaXTwitter />
          </Link>
          <Link href={"https://github.com/winnerx0"}>
            <FaGithub />
          </Link>
          <Link href={"mailto:eragbonikpeya@gmail.com"}>
            <MdEmail />
          </Link>
        </div>
        <hr />
      </div>
      <div className="flex flex-col gap-4 w-full mt-16">
        <h1 className="text-xl font-bold">Projects</h1>
        <ul className="text-gray-400">
          <li>
            <p>
              <Link href={"https://notivue.vercel.app/"}>• Notivue</Link> - AI
              Meeting Analyzer
            </p>
          </li>
          <li>
            <p>
              <Link href={"https://simon-therapist.vercel.app/"}>• Simon</Link>{" "}
              - AI Theriapist
            </p>
          </li>

          <li>
            <p>
              <Link href={"https://lyra-pg.vercel.app/"}>• Lyra</Link> - Real
              time database visualization tool
            </p>
          </li>
        </ul>
        <hr />
      </div>

      <div className="flex flex-col gap-4 w-full mt-16">
        <h1 className="text-xl font-bold">Work</h1>
        <div>
          <h2 className="text-gray-400">Tredbase June 2025 - Present</h2>
          <p className="text-gray-400">
            Buiding and maintaining backend servers efficiently and effectively
          </p>
        </div>
        <hr />
        <div>
          <h2 className="text-gray-400">Luminevent June 2025 - July 2025</h2>
          <p className="text-gray-400">Built robust backend services</p>
        </div>
        <hr />
        <div>
          <h2 className="text-gray-400">TekkTopia Sept 2024 - Jan 2025</h2>
          <p className="text-gray-400">Built web applications for businesses</p>
        </div>
        <hr />
      </div>

      <div className="flex flex-col gap-4 w-full mt-16">
        <h1 className="text-xl font-bold">Interests</h1>
        <h2 className="text-gray-400">
          I am into backend using spring boot and node js
        </h2>
        {/* <h2 className="text-gray-400">
          I use Go to build cli tools e.g A file uploading tool, file
          compression etc.
        </h2> */}
        {/* <h2 className="text-gray-400">I like using neovim and the terminal</h2> */}
        <hr />
      </div>
    </section>
  );
};

export default page;
