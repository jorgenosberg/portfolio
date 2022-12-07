import React from "react";
import Link from "next/link";

export interface NavbarProps {
  logo: string;
  elements: { href: string; text: string }[];
}

const Navbar: React.FC<NavbarProps> = (
  props: NavbarProps
): React.ReactElement => {
  return (
    <div className="absolute flex flex-column top-0 right-0 p-10 gap-10">
      <h1>{props.logo}</h1>
      <ul className="flex flex-column justify-around content-around gap-10">
        {props.elements.map((element: { href: string; text: string }) => {
          return (
            <li>
              <Link href={element.href}>{element.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
