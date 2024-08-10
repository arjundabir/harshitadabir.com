import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="flex flex-wrap w-screen">
      <h1 className="w-full">Campus Involvements</h1>
      <section className="w-full md:max-w-[50dvw]">
        <h3>Scholarships, 2021</h3>
        {scholarships.map((scholarship, key) => (
          <div key={key}>
            <h5>{scholarship.title}</h5>
            <p>{scholarship.description} </p>
          </div>
        ))}
      </section>
      <section className="flex-1">
        <h3>Clubs, 2020-2024</h3>
        <p>
          CPP Tamanna Dance Team, Team Manager and Costume Head Managed
          comprehensive team operations, including budget allocation, practice
          scheduling, vendor relationship management, and travel logistics to
          optimize team performance and achieve competition goals Cultivated a
          diverse and inclusive team environment by fostering open
          communication, addressing conflicts promptly, and ensuring all members
          felt valued and supported. Served as a primary point of contact for
          team members Demonstrated project management skills by overseeing
          costume design, prop procurement, and stage setup. Successfully led
          the team to a 2nd place win for "Best Costumes" at a competition with
          16 teams
        </p>
        <p>
          CPP Society of Women Engineers (SWE), Member Demonstrated commitment
          to advancing women in engineering through participation in
          conferences, mentorship programs, and networking events Developed
          relationships with industry professionals and fellow engineering
          students through SWE involvement. Created the foundation for the CPP
          SWE website using Python in Visual Studio
        </p>
      </section>
    </main>
  );
};
const scholarships = [
  {
    title: "Edison STEM Scholarship",
    description:
      "Awards students to help fuel our passion for making a difference by studying science, technology, engineering, and math.",
  },
  {
    title: "Lockheed Martin Recipient",
    description:
      "Based on academic performance, demonstrate leadership, participate in community activities, educational goals and objectives, and outside appraisal.",
  },
  {
    title: "SWE-LA Recipient",
    description:
      "Motivate women to reach their full potential as leaders and engineers, and to demonstrate the value of diversity.",
  },
];

export default page;
