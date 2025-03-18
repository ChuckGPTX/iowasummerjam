import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full red-bg tilted-section">
        <div className="container mx-auto max-w-6xl py-12 px-6">
          <div className="flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/1456401979/2479197015.png"
              alt="Iowa Summer Jam Logo"
              width={300}
              height={150}
              className="h-auto mb-8"
            />
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="w-full bg-white py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-[#931a22] text-white p-8 rounded-lg shadow-xl">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg mb-6">
                Iowa Summer Jam is an all day festival where all the best of the best artist in Iowa and surrounding states come together and put on a show.
              </p>
              <p className="text-lg mb-6">
                It averages about 500-1000 people in attendance each year, gets crazy online promotion, and is super big on networking. In the past A&Rs, radio personalities, dj's, bloggers, videographers and content creators all make sure they have a presence at Iowa Summer Jam.
              </p>
              <p className="text-lg">
                This is our 8th year and it will take place June 14th, 2025 in Iowa City from 4pm til midnight. Best performers now get nominated for the Iowa Music Awards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-[#e6d12d] py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              JOIN US FOR IOWA SUMMER JAM 8
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              <a href="/tickets" className="btn-iowa">
                GET TICKETS
              </a>
              <a href="/artist-signup" className="bg-black text-white hover:bg-[#232127] text-xl px-12 py-3 rounded font-bold transition duration-300 ease-in-out">
                ARTIST SIGN UP
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
