import { FC } from "react";
import BeigeBackground from "@/components/BeigeBackground";
import Image from "next/image";
import MicroscopeCheck from "@/public/microscope-check.png";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <BeigeBackground />
      <div className="container mx-auto flex flex-wrap items-start md:justify-center gap-4 max-w-4xl p-4">
        <Image
          src={MicroscopeCheck}
          alt="Microscope Checks"
          className="md:w-80 w-full rounded-[2.5%]"
        />
        <div className="w-full md:flex-1">
          <p>
            My name is Harshita Dabir, and I graduated from Cal Poly Pomona with
            a Bachelor&quot;s degree in Mechanical Engineering and a minor in
            Business Operations Management. This combination has equipped me
            well for a fast-paced and dynamic industry and has allowed me to be
            versatile within industries. <br />
            <br />
            Through various roles and internships, I have honed in on my skills
            in project management, supply chain engineering, data analysis,
            quality checks, and strong communication skills. These experiences
            have equipped me to create data-driven strategies to ensure growth
            and success in projects and team environments. <br />
            <br />I aim to devise and implement strategies that align with the
            company’s mission and ensures progress in the industry. I am seeking
            full-time opportunities to contribute my skills, driving growth and
            innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
