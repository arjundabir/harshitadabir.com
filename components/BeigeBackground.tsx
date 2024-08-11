"use client";
import React, { useEffect, useState } from "react";

interface BeigeBackgroundProps {
  id?: string;
}

const BeigeBackground = ({ id }: BeigeBackgroundProps) => {
  const [hydrate, setHydrate] = useState<boolean>(false);
  const [height, setHeight] = useState(500); // Default height of 500

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
  return (
    hydrate && (
      <div
        className={"w-full bg-beige -z-10"}
        style={{
          height: `${height}px`,
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
    )
  );
};

export default BeigeBackground;
