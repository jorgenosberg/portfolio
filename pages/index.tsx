import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

const Home: NextPage = () => {
  const navElements: { href: string; text: string }[] = [
    { href: "#about", text: "About" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <div className="snap-y snap-mandatory scroll-smooth w-screen h-screen overflow-scroll text-white dark:text-black">
      <Head>
        <title>Jørgen Osberg – Welcome to my website!</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="absolute top-0 left-0 px-10 py-5">
        <Link href="#home">
          <Logo />
        </Link>
      </div>
      <div className="absolute top-0 right-0 px-10 py-5">
        <Navbar elements={navElements} />
      </div>
      <div
        id="home"
        className="snap-start flex flex-col w-screen h-screen items-center justify-center py-2 bg-gray-900 dark:bg-slate-200"
      >
        <Hero />
      </div>
      <div
        id="about"
        className="snap-start flex flex-col w-screen h-screen items-center justify-center py-2 bg-green-900 dark:bg-blue-400"
      >
        <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-6xl font-bold">About</h1>
        </div>
      </div>
      <div
        id="projects"
        className="snap-start flex flex-col w-screen h-screen items-center justify-center py-2 bg-gray-500 dark:bg-gray-700"
      >
        <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-6xl font-bold">Projects</h1>
        </div>
      </div>
      <div
        id="contact"
        className="snap-start flex flex-col w-screen h-screen items-center justify-center py-2 bg-gray-900"
      >
        <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-6xl font-bold">Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
