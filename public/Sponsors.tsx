import Image from "next/image";
import Link from "next/link";

// Sponsor data
const sponsors = [
  { id: 1, name: "Sponsor 1", image: "https://ext.same-assets.com/2903798528/834359255.png" },
  { id: 2, name: "Sponsor 2", image: "https://ext.same-assets.com/1839349691/2618427021.png" },
  { id: 3, name: "Sponsor 3", image: "https://ext.same-assets.com/3779018628/1744021121.png" },
  { id: 4, name: "Sponsor 4", image: "https://ext.same-assets.com/3404260534/2201461541.png" },
  { id: 5, name: "Sponsor 5", image: "https://ext.same-assets.com/3279006703/2957951111.png" },
  { id: 6, name: "Sponsor 6", image: "https://ext.same-assets.com/84019203/623305332.png" },
];

export default function Sponsors() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">OUR SPONSORS</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-[#d53f46]">2024 IOWA SUMMER JAM</h3>
        </div>

        {/* Sponsors grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300">
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                width={200}
                height={100}
                className="max-h-24 w-auto"
              />
            </div>
          ))}
        </div>

        {/* Become a sponsor button */}
        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">ARTIST SIGN UP</h2>
          <h3 className="text-lg md:text-xl mb-6">WANT TO PERFORM?</h3>
          <Link href="/artist-signup">
            <button className="btn-iowa">SIGN UP</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
