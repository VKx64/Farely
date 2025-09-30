"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main
      id="home"
      className="min-h-screen w-full max-w-full flex flex-col lg:flex-row overflow-x-hidden"
    >
      <section className="w-full lg:w-1/2 bg-[var(--cta)] flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-8 lg:py-12 xl:py-0">
        <div className="text-white w-full max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 md:mb-6 lg:mb-6 xl:mb-8 text-left leading-tight">
            Safe & Smart Ride <br className="hidden sm:block" /> Sharing
            Platform
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-3xl 2xl:text-4xl text-left mb-6 lg:mb-6 xl:mb-8 leading-relaxed">
            Experience the future of transportation{" "}
            <br className="hidden md:block" /> with plate scanning, automatic
            reporting, <br className="hidden md:block" /> and real-time
            passenger discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-4 xl:gap-6 mt-6 lg:mt-6 xl:mt-8">
            <button className="flex font-poppins items-center justify-center cursor-pointer gap-2 md:gap-3 lg:gap-3 xl:gap-4 bg-white hover:bg-[var(--cta)] border border-transparent hover:border-white hover:text-white text-[var(--cta)] px-5 md:px-6 lg:px-3 xl:px-8 py-3 lg:py-3 xl:py-4 rounded-xl transition-colors duration-200 font-semibold text-sm md:text-base lg:text-base xl:text-lg">
              {/* Apple Icon */}
              <svg
                className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-8 xl:h-8 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="whitespace-nowrap">Download for iOS</span>
            </button>
            <button className="flex font-poppins cursor-pointer items-center justify-center gap-2 md:gap-3 lg:gap-3 xl:gap-4 bg-[var(--cta)] border border-white hover:bg-white hover:text-[var(--cta)] text-white px-5 md:px-6 lg:px-3 xl:px-8 py-3 lg:py-3 xl:py-4 rounded-xl transition-colors duration-200 font-semibold text-sm md:text-base lg:text-base xl:text-lg">
              {/* Google Play Icon */}
              <svg
                className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-8 xl:h-8 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <span className="whitespace-nowrap">Download for Android</span>
            </button>
          </div>
        </div>
      </section>
      <section className="w-full lg:w-1/2 bg-[var(--cta)] flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-8 lg:py-12 xl:py-0">
        <div className="flex items-center justify-center w-full max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl">
          <Image
            src="/images/Phone-mockup.svg"
            alt="Phone mockup showing Farely app interface"
            width={1000}
            height={1000}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
