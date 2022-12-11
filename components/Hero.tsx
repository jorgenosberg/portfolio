import React from "react";
import Image from "next/image";
import PixelartImage from "public/portfolio-pixel-portrait-hires.png";
import { Twitter, Github, LinkedinSquare } from "@styled-icons/boxicons-logos";

const Hero: React.FC = (): React.ReactElement => {
  return (
    <div className="grid grid-cols-2">
      <Image src={PixelartImage} alt="Pixelart portrait of me" quality={100} />
      <div className="flex flex-col justify-center text-left gap-3">
        <h1 className="text-6xl font-bold font-mono">Hi, I'm Jørgen!</h1>
        <p className="text-2xl font-mono w-[40ch]">
          Computer Science major focused on HCI and tech politics.
        </p>
        <div className="flex flex-row gap-5 pt-10">
          <Github size="48" />
          <LinkedinSquare size="48" />
          <Twitter size="48" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
