import BeigeBackground from "@/components/BeigeBackground";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <BeigeBackground />
      <div className="container mx-auto">
        {experiences.map((experience, key) => (
          <div key={key} className="p-4">
            <h3 className="text-base">{experience.type}</h3>
            <hr className="w-full border-1 border-black" />
            <div className="flex flex-wrap md:justify-between">
              <a href={experience.link} target="_blank">
                <h5 className=" text-xl font-bold underline hover:text-black/50">
                  {experience.job},
                  <span className="italic text-base font-normal">
                    {" "}
                    {experience.position}
                  </span>
                </h5>
              </a>
              <p className="font-bold">{experience.duration}</p>
            </div>
            <ul className="list-disc pl-4 md:px-8">
              {experience.actions.map((action, key) => (
                <li key={key}>{action}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

const experiences = [
  {
    type: "ONE-YEAR CONTRACT:",
    job: "CPP Marketing Department & Public Relations",
    position: "Project and Operations Supervisor",
    link: "https://drive.google.com/drive/folders/1SOW5r3fjN1245KR_47k3S4BiVK1Gp0ro?usp=drive_link",
    duration: "August 2023 - August 2024",
    actions: [
      "Led digital project initiatives aimed at optimizing user experience, achieving a 30% improvement in project delivery timelines through the use of Monday.com for task management and coordination",
      "Implemented strategic customer feedback systems to refine user interfaces and system efficiency, directly enhancing user engagement and project outcomes by 20%",
      "Autonomously managed multiple projects and oversaw budget forecasts, designer and external vendor interactions, and strategic planning to drive departmental success",
      "Developed training documentation and quality control procedures for new employees",
    ],
  },
  {
    type: "SIX-MONTH CO-OP:",
    job: "Edwards Lifesciences",
    position: "Research and Development Engineering Co-Op",
    link: "https://drive.google.com/drive/folders/1S3wIAkFqPicwnUxxbgCJiHr0QbGLKZoV?usp=drive_link",
    duration: "June 2022 - December 2022",
    actions: [
      "Assisted in an investigation process for an electrical test system on Advanced-Aged Disposable Pressure Transducers (DPT) and collaborated in submitting documents to the FDA",
      "Performed Design Verification for 10 mechanical testings on 480 DPT samples on Instrons, a torque tester, and External Leak/Flow Testers and documented the data via DV Protocol",
      "Conducted daily pre-testings on a TruCal simulator to verify the DPT’s flow rates and ensure accuracy",
      "Managed extensive data analysis using Excel and Minitab for Hemosphere monitors, enhancing project decision-making and efficiency",
      "Collaborated and communicated with interdisciplinary teams to meet regulatory requirements through the use of Gantt charts to meet goals and fulfill short-term and long-term projects",
    ],
  },
  {
    type: "INTERNSHIP:",
    job: "NASA L’Space Mission Concept Academy",
    position: "Deputy Project Manager",
    duration: "June 2021 - August 2021",
    link: "https://drive.google.com/drive/folders/1SpEEZLBZY1PTYcD6TpLPKeQ5FAvfVv2U?usp=drive_linkgt",
    actions: [
      "Designed a low-orbit satellite to Mars with a shallow ground-penetrating system and a lunar rover descent that adjusted to -238° F",
      "Directed three cross-functional teams on the development and testing of the project, focusing on robust validation processes and innovative design to meet stringent project specifications",
      "Conducted functional and mechanical testings of the satellite and drafted Model Dimensions through Solidworks by creating drawings with geometric dimensions and tolerances (GD&T)",
      "Managed project deliverables, aligning technical specifications with organization’s goals, akin to managing supply chain demands",
      "Produced a Preliminary Design Review Documentation and formally presented to NASA JPL Engineers",
    ],
  },
];
