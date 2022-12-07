import React from "react";
import Image from "next/image";
import PixelartImage from "public/portfolio-pixel-portrait.png";

const Hero: React.FC = (): React.ReactElement => {
  return (
    <>
      <Image src={PixelartImage} alt="Pixelart portrait of me"></Image>
    </>
  );
};

export default Hero;
