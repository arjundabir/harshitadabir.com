import Image from "next/image";
import HarshitaHeadshot from "@/public/harshita-headshot.png";
import {
  FileCogIcon,
  HandshakeIcon,
  InfoIcon,
  LightbulbIcon,
  LinkedinIcon,
  MailIcon,
  PhoneCallIcon,
  UniversityIcon,
} from "lucide-react";
import Link from "next/link";
import BeigeBackground from "@/components/BeigeBackground";

export default function Home() {
  return (
    <div className="container mx-auto pt-16 px-4">
      <BeigeBackground id="photo-headshot" />
      <section className="flex flex-col items-center gap-2 p-4">
        <div className="text-center space-y-1">
          <h1 className="text-5xl font-bold tracking-widest">
            Harshita <span className="font-normal">Dabir</span>
          </h1>
          <h2 className="text-xl italic tracking-wide">Digital Portfolio</h2>
        </div>
        <Image
          id="photo-headshot"
          src={HarshitaHeadshot}
          width={400}
          className="rounded-[50%] w-40"
          alt="Headshot photo of Harshita Dabir in her California Polytechnic University, Pomona Graduation Attire."
        />
        <p className="max-w-4xl leading-relaxed lg:text-center m-1 p-1">
          Welcome to my online portfolio! Here, you will get a deeper insight
          into who I am, my various involvements, and my interests. This space
          is designed to represent me authentically, allowing you to see beyond
          the bullet points of my resume and truly understand my passions and
          experiences. Explore, engage, and get to know the person behind these
          achievements!
        </p>
      </section>
      <hr className="w-1/2 mx-auto" />
      <section
        id="get-to-know-me"
        className="flex flex-col items-center py-2 w-full"
      >
        <h2 className="text-3xl font-bold text-center pt-6 pb-1">
          Get To Know Me
        </h2>
        <p className="pb-2">Select any of the options below.</p>
        <div className="md:flex justify-center gap-4 w-full flex-wrap">
          {options.map((option, key) => (
            <Link
              key={key}
              href={`${option.title.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div className="flex flex-row md:flex-col items-center gap-2 hover:bg-gray-50 p-2 md:p-4 w-full md:w-32 rounded-lg transition">
                <option.icon id="icons" className="h-10 w-10" />
                <h6 className="text-md text-center">{option.title}</h6>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

const icons = [MailIcon, PhoneCallIcon, LinkedinIcon];

const options = [
  {
    icon: InfoIcon,
    title: "About Me",
  },
  {
    icon: UniversityIcon,
    title: "Campus Involvements",
  },
  {
    icon: HandshakeIcon,
    title: "Industry Experience",
  },
  {
    icon: FileCogIcon,
    title: "Projects",
  },
  {
    icon: LightbulbIcon,
    title: "Passions",
  },
];
