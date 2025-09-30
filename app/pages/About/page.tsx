"use client";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen w-full bg-[var(--card)] flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-8"
    >
      <div className="text-center mb-16">
        <h1 className="text-[var(--main-text)] text-5xl font-bold mb-4">
          How Farely Works
        </h1>
        <p className="text-[var(--main-text)] text-3xl">
          Simple steps to safer rides
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl w-full mt-16">
        {/* For Passengers Column */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-[var(--cta)] w-10 h-10 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[var(--cta)] ">
              For Passengers
            </h2>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="bg-[var(--cta)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold text-[var(--main-text)] mb-2">
                  Book Your Ride
                </h3>
                <p className="text-gray-600 font-semibold">
                  Request a driver or join any available vehicle
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="bg-[var(--cta)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold text-[var(--main-text)] mb-2">
                  Scan Plate Number
                </h3>
                <p className="text-gray-600 font-semibold">
                  Verify vehicle safety by scanning the license plate
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="bg-[var(--cta)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold text-[var(--main-text)] mb-2">
                  Safe Journey
                </h3>
                <p className="text-gray-600 font-semibold">
                  Enjoy your ride with automatic safety monitoring
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* For Drivers Column */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-[var(--cta)] w-10 h-10 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[var(--cta)]">
              For Drivers
            </h2>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="bg-[var(--cta)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold text-[var(--main-text)] mb-2">
                  Open the Map
                </h3>
                <p className="text-gray-600 font-semibold">
                  View available passengers in your area
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="bg-[var(--cta)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold text-[var(--main-text)] mb-2">
                  Use Smart Radar
                </h3>
                <p className="text-gray-600 font-semibold">
                  Click radar to see top 3 nearest passengers
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="bg-[var(--cta)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold text-[var(--main-text)] mb-2">
                  Pick Up & Earn
                </h3>
                <p className="text-gray-600 font-semibold">
                  Connect with passengers and start earning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
