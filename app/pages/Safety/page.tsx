"use client";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Safety = () => {
  return (
    <div
      id="safety"
      className="min-h-screen w-full max-w-full flex flex-col lg:flex-row overflow-x-hidden bg-gradient-to-br from-gray-50 to-gray-100"
    >
      {/* Left side text & icons */}
      <section className="w-full lg:w-1/2 bg-white flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-12 lg:py-16 xl:py-20">
        <div className="w-full max-w-2xl lg:max-w-xl xl:max-w-2xl">
          <h2 className="whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl text-[var(--main-text)] font-bold mb-8 lg:mb-12 leading-tight tracking-tight">
            Your Safety is Our Priority
          </h2>

          <ul className="space-y-8 lg:space-y-10">
            <li className="flex items-start space-x-4 lg:space-x-5">
              <Icon
                icon="mdi:alert-circle-outline"
                className="text-red-500 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0 mt-1"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg sm:text-xl lg:text-xl xl:text-2xl text-gray-900 mb-2 leading-tight">
                  Automatic Harassment Detection
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-base xl:text-lg leading-relaxed">
                  AI-powered system monitors rides and automatically reports
                  suspicious behavior
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-4 lg:space-x-5">
              <Icon
                icon="mdi:car-info"
                className="text-blue-500 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0 mt-1"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg sm:text-xl lg:text-xl xl:text-2xl text-gray-900 mb-2 leading-tight">
                  Plate Verification System
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-base xl:text-lg leading-relaxed">
                  Scan and verify vehicle plates for enhanced security and
                  tracking
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-4 lg:space-x-5">
              <Icon
                icon="mdi:phone-in-talk"
                className="text-green-500 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0 mt-1"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg sm:text-xl lg:text-xl xl:text-2xl text-gray-900 mb-2 leading-tight">
                  24/7 Emergency Support
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-base xl:text-lg leading-relaxed">
                  Round-the-clock support team ready to assist in any emergency
                  situation
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Right side illustration */}
      <section className="w-full lg:w-1/2 bg-white flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-8 lg:py-16 xl:py-20">
        <div className="w-full max-w-lg lg:max-w-md xl:max-w-lg 2xl:max-w-xl">
          <Image
            src="/images/Emergency.svg"
            alt="Emergency services illustration"
            width={1000}
            height={1000}
            className="w-full h-auto drop-shadow-lg"
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default Safety;
