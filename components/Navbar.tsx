import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <h1>Jørgen</h1>
      <ul className="absolute top-0 right-0 flex-column">
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
