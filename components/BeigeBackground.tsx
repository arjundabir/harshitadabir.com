"use client";
import React, { useEffect, useState } from "react";

interface BeigeBackgroundProps {
  id: string;
  from?: string;
}

const BeigeBackground = ({ id, from }: BeigeBackgroundProps) => {
  const [height, setHeight] = useState(0);
  const [topY, setTopY] = useState(0);

  useEffect(() => {
    const calculateDimensions = () => {
      const imgElement = document.getElementById(id);
      const fromElement = from ? document.getElementById(from) : null;

      if (imgElement) {
        // Use window.pageYOffset to get the current scroll position
        const rect = imgElement.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2 + window.pageYOffset;

        if (fromElement) {
          const fromRect = fromElement.getBoundingClientRect();
          setTopY(fromRect.top + window.pageYOffset);
          setHeight(centerY - (fromRect.top + window.pageYOffset));
        } else {
          setTopY(0);
          setHeight(centerY);
        }
      }
    };

    calculateDimensions(); // Initial calculation

    // Recalculate on window resize or scroll
    window.addEventListener("resize", calculateDimensions);
    window.addEventListener("scroll", calculateDimensions);

    return () => {
      window.removeEventListener("resize", calculateDimensions);
      window.removeEventListener("scroll", calculateDimensions);
    };
  }, [id, from]);

  return (
    <div
      className={"w-full bg-beige -z-10"}
      style={{
        height: `${height}px`,
        position: "absolute",
        top: topY,
        right: 0,
      }}
    />
  );
};

export default BeigeBackground;
