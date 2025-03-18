"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import OptimizedImage from "./OptimizedImage";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render the component on the client to prevent hydration errors
  if (!isClient) {
    return (
      <section className="relative w-full red-bg">
        <div className="container mx-auto max-w-6xl py-12 px-6">
          <div className="flex flex-col items-center">
            {/* Placeholder for hero image */}
            <div className="mb-12 w-full max-w-3xl aspect-[2/1] bg-gray-200 rounded-lg"></div>

            {/* Event details placeholders */}
            <div className="text-center text-white mb-12">
              <div className="h-8 bg-white/20 w-64 mx-auto mb-2 rounded"></div>
              <div className="h-12 bg-white/20 w-48 mx-auto mb-3 rounded"></div>
              <div className="h-8 bg-white/20 w-72 mx-auto rounded"></div>
            </div>

            {/* Button placeholder */}
            <div>
              <div className="bg-white/20 w-32 h-12 rounded"></div>
            </div>
          </div>
        </div>

        {/* Tilt shape divider */}
        <div className="w-full h-24 overflow-hidden">
          <svg
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="w-full h-full"
            style={{ fill: '#ffffff' }}
          >
            <path d="M0,6V0h1000v100L0,6z" />
          </svg>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full red-bg">
      <div className="container mx-auto max-w-6xl py-12 px-6">
        <div className="flex flex-col items-center">
          {/* Hero image with festival lineup */}
          <div className="mb-12 w-full max-w-3xl">
            <OptimizedImage
              src="https://ext.same-assets.com/2966732990/2640821308.png"
              alt="Iowa Summer Jam 8 Lineup"
              width={1536}
              height={768}
              className="w-full h-auto rounded-lg shadow-xl"
              priority={true}
            />
          </div>

          {/* Event details */}
          <div className="text-center text-white mb-12">
            <h2 className="event-date text-2xl md:text-4xl mb-2">
              SAT JUNE 14TH | 4PM - CLOSE
            </h2>
            <h1 className="text-4xl md:text-6xl mb-3">
              IOWA CITY
            </h1>
            <h3 className="text-2xl md:text-3xl">
              WILDWOOD SALOON
            </h3>
          </div>

          {/* Get tickets button */}
          <div>
            <Link href="/tickets">
              <button className="bg-white text-black hover:bg-[#e6d12d] text-xl px-12 py-3 rounded font-bold transition duration-300 ease-in-out">
                GET TICKETS
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tilt shape divider */}
      <div className="w-full h-24 overflow-hidden">
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-full"
          style={{ fill: '#ffffff' }}
        >
          <path d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>
    </section>
  );
}
