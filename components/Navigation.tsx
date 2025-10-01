"use client";
import React, { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "How It Works" },
  { href: "#safety", label: "Safety" },
  { href: "#support", label: "Support" },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleNavClick = (
    href: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    closeMobileMenu();

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    }
  };

  const NavLink = ({
    href,
    label,
    className = "",
  }: {
    href: string;
    label: string;
    className?: string;
  }) => (
    <a
      href={href}
      onClick={(e) => handleNavClick(href, e)}
      className={`transition-colors duration-200 font-poppins ${className}`}
    >
      {label}
    </a>
  );

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="sticky top-0 z-[9999] h-16 w-full border-b border-gray-100 bg-white"
    >
      <div className="mx-auto flex h-16 max-w-[1700px] items-center justify-between px-4 sm:px-6 lg:px-6 xl:px-8 ml-2 md:ml-6 lg:ml-10 xl:ml-17">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-lg bg-[var(--cta)] sm:mr-3 sm:h-8 sm:w-8" />
          <h1 className="font-poppins text-xl font-bold text-gray-900 sm:text-2xl lg:text-2xl xl:text-3xl">
            Farely
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-4 lg:space-x-5 xl:space-x-8">
          {links.map((link) => (
            <NavLink
              key={link.href}
              {...link}
              className="whitespace-nowrap text-base lg:text-lg xl:text-xl font-medium text-[var(--main-text)] hover:text-[var(--cta)]"
            />
          ))}
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 text-[var(--main-text)] hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">
            {isMobileMenuOpen ? "Close menu" : "Open menu"}
          </span>
          {isMobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden w-full border-t border-gray-100 bg-white"
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {links.map((link) => (
              <NavLink
                key={link.href}
                {...link}
                className="block px-3 py-2 text-base font-medium text-[var(--main-text)] hover:text-[var(--cta)] sm:text-lg"
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
