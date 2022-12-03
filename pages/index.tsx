import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col text-white items-center justify-center py-2 bg-gray-800">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Navbar />
        <Hero />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
