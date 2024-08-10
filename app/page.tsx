import Image from "next/image";
import HarshitaHeadshot from "@/public/harshita-headshot.png";
import {
  FileCogIcon,
  HandshakeIcon,
  InfoIcon,
  LightbulbIcon,
  UniversityIcon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="">
        <h1>Harshita Dabir</h1>
        <h2 className="italic">Digital Portfolio</h2>
        <Image
          src={HarshitaHeadshot}
          width={400}
          alt="Headshot photo of Harshita Dabir in her California Polytechnic University, Pomona Graduation Attire."
        />
        <p>
          Welcome to my online portfolio! Here, you will get a deeper insight
          into who I am, my various involvements, and my interests. This space
          is designed to represent me authentically, allowing you to see beyond
          the bullet points of my resume and truly understand my passions and
          experiences. Explore, engage, and get to know the person behind these
          achievements!
        </p>
      </div>
      <div>
        <h2>Get To Know Me</h2>
        <div className="flex gap-4 justify-center">
          {options.map((option, key) => (
            <Link
              key={key}
              href={`${option.title.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div className="flex flex-col items-center">
                {option.icon}
                <h4 className="text-lg py-2">{option.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

const options = [
  {
    icon: <InfoIcon className="" />,
    title: "About Me",
  },
  {
    icon: <UniversityIcon />,
    title: "Campus Involvements",
  },
  {
    icon: <HandshakeIcon />,
    title: "Industry Experience",
  },
  {
    icon: <FileCogIcon />,
    title: "Projects",
  },
  {
    icon: <LightbulbIcon />,
    title: "Passions",
  },
];
