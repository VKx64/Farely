"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full min-h-[230px] bg-[var(--footer)] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-12">
      <div className="w-full max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div>
            <h1 className="flex items-center text-4xl font-bold text-white sm:text-2xl lg:text-2xl xl:text-3xl mb-4">
              <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-lg bg-[var(--cta)] sm:mr-3 sm:h-8 sm:w-8" />
              Farely
            </h1>
            <p className="text-[#9CA3AF] text-2xl text-balance leading-relaxed">
              The safest and smartest ride-sharing platform with advanced safety
              features.
            </p>
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-semibold text-2xl mb-2">Company</h3>
            <button className="text-[#9CA3AF] hover:text-[var(--cta)] text-left text-lg transition-colors">
              About Us
            </button>
            <button className="text-[#9CA3AF] hover:text-[var(--cta)] text-left text-lg transition-colors">
              Careers
            </button>
            <button className="text-[#9CA3AF] hover:text-[var(--cta)] text-left text-lg transition-colors">
              Press
            </button>
            <button className="text-[#9CA3AF] hover:text-[var(--cta)] text-left text-lg transition-colors">
              Blog
            </button>
          </div>

          {/* Support */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-semibold text-2xl mb-2">Support</h3>
            <button className="text-[#9CA3AF] hover:text-[var(--cta)] text-left text-lg transition-colors">
              Help Center
            </button>
            <button className="text-[#9CA3AF] hover:text-[var(--cta)] text-left text-lg transition-colors">
              Safety
            </button>
            <button className="text-[#9CA3AF] hover:text-[var(--cta)] text-left text-lg transition-colors">
              Contact Us
            </button>
            <button className="text-[#9CA3AF] hover:text-[var(--cta)] text-left text-lg transition-colors">
              Emergency
            </button>
          </div>

          {/* Legal */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-semibold text-2xl mb-2">Legal</h3>
            <button className="text-[#9CA3AF] hover:text-[var(--cta)] text-left text-lg transition-colors">
              Terms of Service
            </button>
            <button className="text-[#9CA3AF] hover:text-[var(--cta)] text-left text-lg transition-colors">
              Privacy Policy
            </button>
            <button className="text-[#9CA3AF] hover:text-[var(--cta)] text-left text-lg transition-colors">
              Cookie Policy
            </button>
            <button className="text-[#9CA3AF] hover:text-[var(--cta)] text-left text-lg transition-colors">
              Accessibility
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#9CA3AF]">
          <p className="text-[#9CA3AF] text-lg text-center">
            © 2025 Farely. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
