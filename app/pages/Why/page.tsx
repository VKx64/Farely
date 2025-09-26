import React from "react";

const Why = () => {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col items-center justify-center text-white text-center p-8">
      <h3 className="text-5xl font-bold mb-4 text-[var(--main-text)]">
        Why Choose Farely?
      </h3>
      <p className="text-2xl max-w-3xl text-[var(--main-text)]">
        Experience the safest and smartest ride-sharing platform.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 max-w-7xl w-full">
        {/* Plate Scanner Card */}
        <div className="bg-[var(--card)] backdrop-blur-sm rounded-2xl p-8 ">
          <div className="bg-[var(--cta)] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 3h8v2H8v-2zm0 3h6v2H8v-2z" />
            </svg>
          </div>
          <h4 className="text-3xl font-bold mb-4 text-[var(--main-text)] text-left">
            Plate Scanner
          </h4>
          <p className="text-xl opacity-90 text-[var(--main-text)] text-left">
            Scan any vehicle's plate number instantly for verification and
            safety tracking.
          </p>
        </div>

        {/* Auto Reporting Card */}
        <div className="bg-[var(--card)] backdrop-blur-sm rounded-2xl p-8 ">
          <div className="bg-[var(--cta)] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V19A2 2 0 0 0 5 21H11V19H5V3H13V9H21ZM14 13.5C14 15.43 15.57 17 17.5 17C19.43 17 21 15.43 21 13.5C21 11.57 19.43 10 17.5 10C15.57 10 14 11.57 14 13.5ZM20.5 16L22 17.5L17.5 22L15 19.5L16.5 18L17.5 19L20.5 16Z" />
            </svg>
          </div>
          <h4 className="text-3xl font-bold mb-4 text-[var(--main-text)] text-left">
            Auto Reporting
          </h4>
          <p className="text-xl opacity-90 text-[var(--main-text)] text-left">
            Automatic harassment detection and reporting system for passenger
            safety.
          </p>
        </div>

        {/* Smart Radar Card */}
        <div className="bg-[var(--card)] backdrop-blur-sm rounded-2xl p-8">
          <div className="bg-[var(--cta)] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C13.11 2 14 2.9 14 4C14 5.11 13.11 6 12 6C10.89 6 10 5.11 10 4C10 2.9 10.89 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14Z" />
            </svg>
          </div>
          <h4 className="text-3xl font-bold mb-4 text-[var(--main-text)] text-left">
            Smart Radar
          </h4>
          <p className="text-xl opacity-90 text-[var(--main-text)] text-left">
            Find the 3 nearest passengers with our intelligent radar system.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Why;
