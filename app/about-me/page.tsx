import { FC } from "react";
import MicroscopeCheck from "@/public/microscope-check.png";
import Image from "next/image";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main>
      <h1>About Me</h1>
      <Image src={MicroscopeCheck} alt="Harshita Dabir using a microscope" />
      <p>
        My name is Harshita Dabir, and I graduated from Cal Poly Pomona with a
        Bachelor&quot;s degree in Mechanical Engineering and a minor in Business
        Operations Management. This combination has equipped me well for a
        fast-paced and dynamic industry and has allowed me to be versatile
        within industries. <br />
        <br />
        Through various roles and internships, I have honed in on my skills in
        project management, supply chain engineering, data analysis, quality
        checks, and strong communication skills. These experiences have equipped
        me to create data-driven strategies to ensure growth and success in
        projects and team environments. <br />
        <br />I aim to devise and implement strategies that align with the
        company’s mission and ensures progress in the industry. I am seeking
        full-time opportunities to contribute my skills, driving growth and
        innovation.
      </p>
    </main>
  );
};

export default page;
