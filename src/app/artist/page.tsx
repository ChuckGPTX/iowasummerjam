import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

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

export default function ArtistPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="w-full red-bg py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ARTIST PERFORMING
            </h1>
            <h2 className="text-2xl md:text-3xl">
              AT IOWA SUMMER JAM 8
            </h2>
          </div>
        </div>
      </section>

      {/* Artist Grid */}
      <section className="w-full bg-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {artists.map((artist) => (
              <div key={artist.id} className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="aspect-square relative">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-white text-xl md:text-2xl font-bold text-center">
                      {artist.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-[#e6d12d] py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              WANT TO PERFORM?
            </h2>
            <a href="/artist-signup" className="btn-iowa">
              ARTIST SIGN UP
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
