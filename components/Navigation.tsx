"use client";
import React, { useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (
    href: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    closeMobileMenu();
    
    // Get the target element
    const targetId = href.substring(1); // Remove the # from href
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Smooth scroll to the target element
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Update the URL hash without jumping
      window.history.pushState(null, '', href);
    }
  };

  return (
    <nav className="h-16 w-full max-w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Navigation Links */}
          <div className="flex items-center space-x-4 lg:space-x-8 flex-1 min-w-0">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="h-6 w-6 sm:h-8 sm:w-8 bg-[var(--cta)] rounded-lg flex items-center justify-center mr-2 sm:mr-3"></div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 font-poppins">
                Farely
              </h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:block">
              <div className="flex items-baseline space-x-4 xl:space-x-6">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick("#home", e)}
                  className="text-gray-900 hover:text-[var(--cta)] px-2 xl:px-3 py-2 text-lg xl:text-xl font-medium font-poppins transition-colors duration-200 whitespace-nowrap"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick("#about", e)}
                  className="text-[var(--main-text)] hover:text-[var(--cta)] px-2 xl:px-3 py-2 text-lg xl:text-xl font-medium font-poppins transition-colors duration-200 whitespace-nowrap"
                >
                  How It Works
                </a>
                <a
                  href="#safety"
                  onClick={(e) => handleNavClick("#safety", e)}
                  className="text-[var(--main-text)] hover:text-[var(--cta)] px-2 xl:px-3 py-2 text-lg xl:text-xl font-medium font-poppins transition-colors duration-200 whitespace-nowrap"
                >
                  Safety
                </a>
                <a
                  href="#support"
                  onClick={(e) => handleNavClick("#support", e)}
                  className="text-[var(--main-text)] hover:text-[var(--cta)] px-2 xl:px-3 py-2 text-lg xl:text-xl font-medium font-poppins transition-colors duration-200 whitespace-nowrap"
                >
                  Support
                </a>
              </div>
            </div>
          </div>

          {/* Right: Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-shrink-0">
            <button className="text-[var(--main-text)] hover:cursor-pointer px-2 xl:px-3 py-2 text-lg xl:text-xl font-medium font-poppins transition-colors duration-200 whitespace-nowrap">
              Sign In
            </button>
            <button className="bg-[var(--cta)] cursor-pointer text-white px-3 xl:px-4 py-2 rounded-lg text-lg xl:text-xl font-medium font-poppins transition-colors duration-200 whitespace-nowrap">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-[var(--main-text)] hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">
                {isMobileMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-5 w-5 sm:h-6 sm:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-5 w-5 sm:h-6 sm:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <a
              href="#home"
              onClick={(e) => handleNavClick("#home", e)}
              className="text-gray-900 hover:text-[var(--cta)] block px-3 py-2 text-base sm:text-lg font-medium font-poppins transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick("#about", e)}
              className="text-[var(--main-text)] hover:text-[var(--cta)] block px-3 py-2 text-base sm:text-lg font-medium font-poppins transition-colors duration-200"
            >
              How It Works
            </a>
            <a
              href="#safety"
              onClick={(e) => handleNavClick("#safety", e)}
              className="text-[var(--main-text)] hover:text-[var(--cta)] block px-3 py-2 text-base sm:text-lg font-medium font-poppins transition-colors duration-200"
            >
              Safety
            </a>
            <a
              href="#support"
              onClick={(e) => handleNavClick("#support", e)}
              className="text-[var(--main-text)] hover:text-[var(--cta)] block px-3 py-2 text-base sm:text-lg font-medium font-poppins transition-colors duration-200"
            >
              Support
            </a>
            <div className="pt-4 pb-3 border-t border-gray-100">
              <div className="flex flex-col space-y-3 px-3">
                <button className="w-full text-[var(--main-text)] hover:cursor-pointer px-3 py-2 text-base sm:text-lg font-medium font-poppins text-center border border-[var(--cta)] rounded-lg transition-colors duration-200 hover:bg-blue-50">
                  Sign In
                </button>
                <button className="w-full bg-[var(--cta)] hover:cursor-pointer text-white px-4 py-2 rounded-lg text-base sm:text-lg font-medium font-poppins transition-colors duration-200 hover:bg-blue-600">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
