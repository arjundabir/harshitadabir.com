import BeigeBackground from "@/components/BeigeBackground";
import { FC } from "react";
import Image from "next/image";
import Edison from "@/public/edison.png";
import SWE from "@/public/swe.jpg";
import Lockheed from "@/public/lockheed.jpg";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex flex-wrap w-screen">
      <BeigeBackground />
      <div className="flex flex-wrap p-4 container mx-auto">
        <section className="w-full md:w-1/2">
          <h2 className="text-3xl text-center">
            Scholarships, <span className="text-lg">2021</span>
          </h2>
          {scholarships.map((scholarship, key) => (
            <div key={key} className="p-4 flex gap-x-2">
              <Image
                src={scholarship.icon}
                alt="Edison Logo"
                className="aspect-square w-8 h-8 rounded border mt-1"
              />
              <div>
                <h5 className="text-xl font-bold">{scholarship.title}</h5>
                <p>{scholarship.description} </p>
              </div>
            </div>
          ))}
        </section>
        <section className="flex-1">
          <h2 className="text-3xl text-center">
            Clubs, <span className="text-lg">2020-2024</span>
          </h2>
          <div className="py-4">
            <h5 className="text-xl font-bold">
              CPP Tamanna Dance Team
              <span className="italic text-base font-normal">
                , Team Manager and Costume Head
              </span>
            </h5>
            <ul className="list-disc">
              <li>
                Managed comprehensive team operations, including budget
                allocation, practice scheduling, vendor relationship management,
                and travel logistics to optimize team performance and achieve
                competition goals.
              </li>
              <li>
                Cultivated a diverse and inclusive team environment by fostering
                open communication, addressing conflicts promptly, and ensuring
                all members felt valued and supported. Served as a primary point
                of contact for team members.
              </li>
              <li>
                Demonstrated project management skills by overseeing costume
                design, prop procurement, and stage setup. Successfully led the
                team to a 2nd place win for &quot;Best Costumes&quot; at a
                competition with 16 teams.
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h5 className="text-xl font-bold">
              CPP Society of Women Engineers (SWE),{" "}
              <span className="italic text-base font-normal"> Member</span>
            </h5>
            <ul className="list-disc">
              <li>
                Demonstrated commitment to advancing women in engineering
                through participation in conferences, mentorship programs, and
                networking events.
              </li>
              <li>
                Developed relationships with industry professionals and fellow
                engineering students through SWE involvement.
              </li>
              <li>
                Created the foundation for the CPP SWE website using Python in
                Visual Studio
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
const scholarships = [
  {
    title: "Edison STEM Scholarship",
    icon: Edison,
    description:
      "Awards students to help fuel our passion for making a difference by studying science, technology, engineering, and math.",
  },
  {
    title: "Lockheed Martin Recipient",
    icon: Lockheed,
    description:
      "Based on academic performance, demonstrate leadership, participate in community activities, educational goals and objectives, and outside appraisal.",
  },
  {
    title: "SWE-LA Recipient",

    icon: SWE,
    description:
      "Motivate women to reach their full potential as leaders and engineers, and to demonstrate the value of diversity.",
  },
];

export default page;
