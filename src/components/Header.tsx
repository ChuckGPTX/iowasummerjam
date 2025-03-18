"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

export default function Header() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  // Use useMemo for eventDate to fix the React hook dependency warning
  const eventDate = useMemo(() => new Date("2025-06-14T16:00:00"), []);

  useEffect(() => {
    setIsClient(true);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <header>
      {/* Countdown timer */}
      <div className="w-full bg-black text-white py-2 flex justify-center items-center text-sm md:text-base countdown-timer">
        <div className="flex space-x-4">
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-2xl">{isClient ? timeLeft.days.toString().padStart(2, "0") : "00"}</span>
            <span>Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-2xl">{isClient ? timeLeft.hours.toString().padStart(2, "0") : "00"}</span>
            <span>Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-2xl">{isClient ? timeLeft.minutes.toString().padStart(2, "0") : "00"}</span>
            <span>Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-2xl">{isClient ? timeLeft.seconds.toString().padStart(2, "0") : "00"}</span>
            <span>Seconds</span>
          </div>
        </div>
      </div>

      {/* Main header with logo and navigation */}
      <div className="w-full bg-[#e6d12d] py-4 px-6 flex justify-between items-center">
        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#e6d12d] p-0">
              <div className="flex flex-col p-4">
                <Link href="/" className="py-2 font-semibold hover:text-[#d53f46]">
                  Home
                </Link>
                <Link href="/about" className="py-2 font-semibold hover:text-[#d53f46]">
                  About
                </Link>
                <div className="relative py-2">
                  <span className="font-semibold cursor-pointer">Artist</span>
                  <div className="pl-4 mt-2 flex flex-col">
                    <Link href="/artist" className="py-1 hover:text-[#d53f46]">
                      2024 Artist
                    </Link>
                    <Link href="/artist/2023" className="py-1 hover:text-[#d53f46]">
                      2023 Artist
                    </Link>
                  </div>
                </div>
                <Link href="/sponsors" className="py-2 font-semibold hover:text-[#d53f46]">
                  Sponsors/Vendors
                </Link>
                <Link href="/media" className="py-2 font-semibold hover:text-[#d53f46]">
                  Media
                </Link>
                <Link href="/tickets" className="py-2 font-semibold hover:text-[#d53f46]">
                  Tickets
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="mx-auto md:mx-0">
          <Link href="/">
            <OptimizedImage
              src="https://ext.same-assets.com/1456401979/2479197015.png"
              alt="Iowa Summer Jam Logo"
              width={180}
              height={60}
              className="h-auto"
              priority={true}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-black hover:text-[#d53f46] font-semibold">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-[#d53f46] font-semibold">
            About
          </Link>
          <div className="relative group">
            <span className="text-black hover:text-[#d53f46] font-semibold cursor-pointer">
              Artist
            </span>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 z-10 min-w-32">
              <Link href="/artist" className="block px-4 py-2 hover:bg-gray-100">
                2024 Artist
              </Link>
              <Link href="/artist/2023" className="block px-4 py-2 hover:bg-gray-100">
                2023 Artist
              </Link>
            </div>
          </div>
          <Link href="/sponsors" className="text-black hover:text-[#d53f46] font-semibold">
            Sponsors/Vendors
          </Link>
          <Link href="/media" className="text-black hover:text-[#d53f46] font-semibold">
            Media
          </Link>
          <Link href="/tickets" className="text-black hover:text-[#d53f46] font-semibold">
            Tickets
          </Link>
        </nav>

        {/* Shopping cart icon */}
        <div className="hidden md:block">
          <Link href="/tickets">
            <div className="bg-black rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M9 5H2v14h18V5h-7"></path>
                <path d="M9 5a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M6 10h12"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
