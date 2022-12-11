import React, { useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { LightMode, DarkMode } from "@styled-icons/material-rounded";

export interface NavbarProps {
  elements: { href: string; text: string }[];
}

const Navbar: React.FC<NavbarProps> = (
  props: NavbarProps
): React.ReactElement => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <ul className="flex gap-10 font-mono">
        {props.elements.map((element: { href: string; text: string }) => {
          return (
            <li className="flex justify-center items-center text-center hover:text-green-400">
              <Link href={element.href}>{element.text}</Link>
            </li>
          );
        })}
        <li className="flex justify-center items-center text-center hover:text-green-400">
          <button
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
          >
            {theme === "dark" ? (
              <LightMode size="24" />
            ) : (
              <DarkMode size="24" />
            )}
          </button>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
