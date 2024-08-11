"use client";
import {
  FileCogIcon,
  HandshakeIcon,
  HouseIcon,
  InfoIcon,
  LightbulbIcon,
  UniversityIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";

interface BeigeBackgroundProps {
  id?: string;
}

const BeigeBackground = ({ id }: BeigeBackgroundProps) => {
  const [hydrate, setHydrate] = useState<boolean>(false);
  const [height, setHeight] = useState(500);

  useEffect(() => {
    if (id) {
      const calculateDimensions = () => {
        const imgElement = document.getElementById(id);

        if (imgElement) {
          const rect = imgElement.getBoundingClientRect();
          const centerY = rect.top + rect.height / 2 + window.pageYOffset;

          setHeight(centerY);

          localStorage.setItem("beigeBackgroundHeight", centerY.toString());
        }
      };

      calculateDimensions();

      // Recalculate on window resize or scroll
      window.addEventListener("resize", calculateDimensions);

      return () => {
        window.removeEventListener("resize", calculateDimensions);
      };
    } else {
      const storedHeight = localStorage.getItem("beigeBackgroundHeight");

      if (storedHeight) {
        setHeight(parseInt(storedHeight, 10));
      }
    }
  }, [id]);

  useEffect(() => {
    setHydrate(true);
  }, [hydrate]);

  const currentPage = usePathname();
  const title = currentPage.slice(1).replace("-", " ");
  return (
    hydrate &&
    (id ? (
      <div
        className={"w-full bg-beige -z-10"}
        style={{
          height: `${height}px`,
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
    ) : (
      <div
        className={
          "w-full bg-beige z-10 flex flex-col justify-center items-center space-y-2"
        }
        style={{ height: `${height}px` }}
      >
        <h1 className="text-4xl font-bold text-center pt-16 tracking-wider capitalize">
          {title}
        </h1>
        <hr className="w-1/4g border-1 border-black" />
        <div className="flex gap-2 items-center justify-center">
          {options.map((option, key) => (
            <Link
              key={key}
              href={"/" + option.title.toLowerCase().replace(" ", "-")}
            >
              {title.toLowerCase() === option.title.toLowerCase() ? (
                <option.icon className="h-16 w-16 " />
              ) : (
                <option.icon className="h-10 w-10 opacity-50 hover:opacity-100" />
              )}
            </Link>
          ))}
        </div>
      </div>
    ))
  );
};

export default BeigeBackground;

const options = [
  { icon: HouseIcon, title: "" },
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
