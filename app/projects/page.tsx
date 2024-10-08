import BeigeBackground from "@/components/BeigeBackground";
import { ArrowRightToLineIcon, ExternalLinkIcon, LinkIcon } from "lucide-react";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <BeigeBackground />
      <div className="mx-auto container flex flex-wrap">
        <section className="w-full md:w-1/2">
          {projects.map((project, key) => (
            <div key={key} className="p-4">
              <div className="flex justify-between">
                {project.link ? (
                  <a href={project.link} target="_blank">
                    <h5 className="text-xl font-bold underline hover:text-black/50">
                      {project.title},
                      <span className="italic text-base font-normal">
                        {" "}
                        {project.position}
                      </span>
                    </h5>
                  </a>
                ) : (
                  <h5 className="text-xl font-bold">
                    {project.title},
                    <span className="italic text-base font-normal">
                      {" "}
                      {project.position}
                    </span>
                  </h5>
                )}

                <p className="font-bold">{project.duration}</p>
              </div>
              <ul className="list-disc pl-4 md:px-8">
                {project.actions.map((action, key) => (
                  <li key={key}>{action}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section className="flex-1">
          <div className="p-4">
            <div className="flex justify-between">
              <a href={secondaryproject.link} target="_blank">
                <h5 className="text-xl font-bold underline hover:text-black/50">
                  {secondaryproject.title},
                  <span className="italic text-base font-normal">
                    {" "}
                    {secondaryproject.position}
                  </span>
                </h5>
              </a>
              <p className="font-bold">{secondaryproject.duration}</p>
            </div>
            <ul className="list-disc pl-4 md:px-8">
              {secondaryproject.actions.map((action, key) => (
                <li key={key}>{action}</li>
              ))}
            </ul>
          </div>
          <a href="https://drive.google.com/drive/folders/1PdAWpdw2IM_kPPy6s5MXmrR4zuiEVFkc?usp=drive_link">
            <div className="p-2">
              <div className="transition-all duration-200 h-10 w-full bg-beige flex items-center justify-center rounded text-md md:text-xl font-bold drop-shadow-md shadow hover:shadow-none gap-1 hover:bg-[#d9cbc1]/90">
                <p>Favorite University Labs/Papers</p>
                <ExternalLinkIcon />
              </div>
            </div>
          </a>
        </section>
      </div>
    </div>
  );
};

export default page;

const projects = [
  {
    title: "Private Tennis Coach",
    position: "Entrepreneur",
    duration: "’17-’22",
    actions: [
      "Develop training strategies and learning schedules for 12 beginning and intermediate student players",
      "Budgeted and allocated funds effectively to purchase proper amenities and advanced equipment",
    ],
  },
  {
    title: "CubeSat",
    link: "https://drive.google.com/drive/folders/1zhWrRZrLvIuFI7zKF-QiiLAervKtCIQS?usp=drive_link",
    position: "Systems Tool Kit Leader",
    duration: "’18-’20",
    actions: [
      "First school district in California to design and launch a 1.33-kilogram mini satellite with silicon-based solar panels and a camera to take pictures",
      "Utilized the STK software where we developed complex dynamic simulations of real-world situations that affect the execution of the satellite",
      "Documented Systems Engineering regulations in coordination with NASA’s Strategic Plan and monitored activities regularly to ensure our deadline was met",
    ],
  },
  {
    title: "MIT-Lemelson",
    link: "https://drive.google.com/drive/folders/19xSVcGGV-YMVoRuEqugsxGwaEX4XALvM?usp=drive_link",
    position: "Communications Lead",
    duration: "‘18-’19",
    actions: [
      "Developed a packaging system to deter theft and researched automatic locking system options",
      "Liaison between team members and sponsors and designed prototypes through Inventor to attain our final solution idea",
      "Placed in the Top 30 out of 106 total teams",
    ],
  },
];

const secondaryproject = {
  title: "Senior Project",
  link: "https://drive.google.com/drive/folders/1WJrPln22XSCrBrWXXmiLsjSUB6y6zgJX?usp=drive_link",
  position: "Aerodynamics Lead",
  duration: "‘23-’24",
  actions: [
    "Successfully designed and manufactured HPV shell, resulting in improved vehicle aerodynamics and reduced drag coefficient",
    "Conducted aerodynamic research on Human Powered Vehicles (HPVs), comparing faired and unfaired models through wind tunnel testing. Analyzed data to optimize vehicle design for minimal drag and maximum efficiency",
    "Optimized shell design for aerodynamics and weight reduction through material selection, prototyping, and testing",
    "Collaborated with cross-functional teams to integrate shell design with overall vehicle architecture and performance goals",
  ],
};
