import BeigeBackground from "@/components/BeigeBackground";
import { FC } from "react";
import SD1 from "@/public/sd1.png";
import SD2 from "@/public/sd2.png";
import MPDF from "@/public/mpdf.png";
import MPDF2 from "@/public/mpdf2.png";
import Image from "next/image";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <BeigeBackground />
      <section className="container mx-auto w-full max">
        <div className="p-4 flex flex-wrap md:justify-center gap-4">
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
            <h3 className="text-2xl font-bold">Self-Development</h3>
            <p>
              Throughout my career, I have cultivated a diverse range of
              experiences across multiple industries, including aerospace,
              biomedical, marketing, and fashion/cosmetics. This exposure has
              honed in on my adaptability and problem-solving skills, allowing
              me to thrive in dynamic environments and deliver results.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Image
              className="w-full md:w-52 h-auto rounded"
              src={SD1}
              alt="4 Edwards Interns"
            />
            <Image
              className="w-full md:w-52 h-auto rounded"
              src={SD2}
              alt="Dance picture"
            />
          </div>
        </div>
        <div className="flex flex-wrap-reverse p-4 gap-6 justify-center ">
          <div className="flex flex-col gap-4 w-auto items-start">
            <Image
              className="w-full md:w-96 rounded"
              src={MPDF}
              alt="Lots of Edwards Interns"
            />
            <Image
              className="rounded md:w-96"
              src={MPDF2}
              alt="Inside Rigel Meeting"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold">
              Meeting People/Developing Friendships
            </h3>
            <br />
            <p>
              During each professional chapter, my joy has been meeting new
              people and accepting their knowledge. The people I have surrounded
              myself with have provided me a strong foundation for a successful
              growth, and I have also had the privilege to support others and
              provide my knowledge and skills to guide and mentor other people
              to their fullest potential. With their supportive and guided
              nature and my calm and eager-to learn personality, the teams and
              mutual employees I have worked with have learned to execute
              projects successfully.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
