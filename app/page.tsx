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
    <div>
      <main className="container mx-auto py-16 px-4">
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
            is designed to represent me authentically, allowing you to see
            beyond the bullet points of my resume and truly understand my
            passions and experiences. Explore, engage, and get to know the
            person behind these achievements!
          </p>
        </section>
        <section
          id="get-to-know-me"
          className="flex flex-col items-center py-6 w-full"
        >
          <h2 className="text-3xl font-bold text-center py-6">
            Get To Know Me
          </h2>
          <div className="flex justify-center gap-4 w-full flex-wrap">
            {options.map((option, key) => (
              <div key={key} className="flex flex-col items-center">
                <Link
                  href={`${option.title.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <div className="bg-white flex flex-col items-center justify-center w-32 rounded-lg border p-2 shadow hover:bg-gray-50 hover:shadow-sm h-36">
                    <option.icon id="icons" className="h-10 w-10" />
                    <h4 className="text-lg py-2 text-center">{option.title}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
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
