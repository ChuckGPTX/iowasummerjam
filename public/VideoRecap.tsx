"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function VideoRecap() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <section className="w-full yellow-bg py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center">
            {/* Section title */}
            <div className="flex flex-col items-center mb-10">
              <div className="h-[100px] w-[200px] bg-gray-200 animate-pulse mb-4" /> {/* Placeholder for logo */}
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                WATCH THE 2024 RECAP
              </h2>
            </div>

            {/* Video placeholder */}
            <div className="w-full max-w-3xl relative bg-black rounded-lg overflow-hidden shadow-xl">
              <div className="relative pb-[56.25%]">
                <div className="absolute inset-0 bg-gray-800 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full yellow-bg py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center">
          {/* Section title */}
          <div className="flex flex-col items-center mb-10">
            <Image
              src="https://ext.same-assets.com/1456401979/2479197015.png"
              alt="Iowa Summer Jam Logo"
              width={200}
              height={100}
              className="h-auto mb-4"
              priority
            />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              WATCH THE 2024 RECAP
            </h2>
          </div>

          {/* Video container */}
          <div className="w-full max-w-3xl relative bg-black rounded-lg overflow-hidden shadow-xl">
            <div className={`relative pb-[56.25%] ${videoLoaded ? 'hidden' : 'block'}`}>
              <Image
                src="https://ext.same-assets.com/2486445613/1546838901.jpeg"
                alt="Video Thumbnail"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#d53f46] flex items-center justify-center cursor-pointer"
                  onClick={() => setVideoLoaded(true)}
                >
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
                    className="h-8 w-8 md:h-10 md:w-10 ml-1"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>

            {videoLoaded && (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                style={{ aspectRatio: "16/9" }}
                src="https://www.youtube.com/embed/hBplg7yqZX4?autoplay=1"
                title="Iowa Summer Jam 2024 Recap"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
