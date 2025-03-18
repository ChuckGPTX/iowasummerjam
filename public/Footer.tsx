import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      {/* Main footer content */}
      <section className="w-full bg-[#e6d12d] py-10 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center">
            <h4 className="text-2xl md:text-3xl font-bold text-center mb-2">
              IOWA SUMMER JAM 8
            </h4>
            <h4 className="text-xl md:text-2xl font-bold text-[#d53f46] text-center mb-6">
              DON'T MISS THE BIGGEST SHOW IN IOWA
            </h4>
            <Link href="/tickets">
              <button className="btn-iowa">GET TICKETS</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Copyright section */}
      <section className="w-full bg-[#e6d12d] py-4 px-6 border-t border-[#d53f46]/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-center md:text-left mb-2 md:mb-0">
              © 2025 IOWA SUMMER JAM / T1 ENTERTAINMENT. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center">
              <p className="text-xs mr-2">CREATED BY</p>
              <Link href="https://lujanomedia.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://ext.same-assets.com/1813720258/4290220812.png"
                  alt="Lujano Media"
                  width={100}
                  height={30}
                  className="h-6 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
