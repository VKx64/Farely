"use client";
import React from "react";
import Hero from "./pages/Hero/page";
import About from "./pages/About/page";
import Safety from "./pages/Safety/page";
import Support from "./pages/Support/page";
import Navigation from "@/components/Navigation";
import Why from "./pages/Why/page";

const page = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <main className="w-full">
        <Hero />
        <Why />
        <About />
        <Safety />
        <Support />
      </main>
    </div>
  );
};

export default page;
