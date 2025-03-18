import Image from "next/image";
import Link from "next/link";

// Artist data
const artists = [
  { id: 1, name: "TONE DA BOSS", image: "https://ext.same-assets.com/1071712935/943236995.jpeg" },
  { id: 2, name: "KLAZIK", image: "https://ext.same-assets.com/4294681028/897466070.png" },
  { id: 3, name: "ESSENCE W. DANCE", image: "https://ext.same-assets.com/3262312548/1142473535.png" },
  { id: 4, name: "ZEUS REBEL WATERS", image: "https://ext.same-assets.com/1091719524/3795670750.png" },
  { id: 5, name: "NATE AND GRACE", image: "https://ext.same-assets.com/2903173947/4037539387.png" },
  { id: 6, name: "ZEEK THE RAPPER", image: "https://ext.same-assets.com/891142047/2108475643.png" },
  { id: 7, name: "CHISONGWRITER", image: "https://ext.same-assets.com/3703441518/4283947947.png" },
  { id: 8, name: "TEVIN JONES", image: "https://ext.same-assets.com/2247018288/550733134.png" },
  { id: 9, name: "MADI BLOC MUSIQ", image: "https://ext.same-assets.com/2909595661/1477891322.png" },
  { id: 10, name: "SUBTLE INTENTIONS", image: "https://ext.same-assets.com/2249822877/1633374136.jpeg" },
  { id: 11, name: "DRIA DANIELLE", image: "https://ext.same-assets.com/1395402082/1646053460.png" },
  { id: 12, name: "3J", image: "https://ext.same-assets.com/837536974/1016767421.jpeg" },
];

export default function ArtistLineup() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">ARTIST(S)</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-[#d53f46]">IOWA SUMMER JAM 8 LINE UP</h3>
        </div>

        {/* Artist grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <div key={artist.id} className="artist-card relative overflow-hidden">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  className="object-cover transform hover:scale-110 transition-transform duration-500"
                  fill
                />
                {/* Artist name with mask effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white z-10">
                    <h3 className="text-lg md:text-xl font-bold shadow-black drop-shadow-md">
                      {artist.name}
                    </h3>
                  </div>
                </div>
                {/* Dark overlay with clip-path for cool effect */}
                <div
                  className="absolute inset-0 bg-black/30"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Artists Button */}
        <div className="text-center mt-12">
          <Link href="/artist">
            <button className="btn-iowa">VIEW ALL ARTISTS</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
