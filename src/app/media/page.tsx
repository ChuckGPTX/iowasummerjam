import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// Gallery data
const galleryImages = [
  { id: 1, src: "https://ext.same-assets.com/1071712935/943236995.jpeg", alt: "Iowa Summer Jam Performance 1", caption: "Artist performance at Iowa Summer Jam 2023" },
  { id: 2, src: "https://ext.same-assets.com/3779018628/1744021121.png", alt: "Iowa Summer Jam Crowd", caption: "Excited crowd at Iowa Summer Jam" },
  { id: 3, src: "https://ext.same-assets.com/2486445613/1546838901.jpeg", alt: "Stage Setup", caption: "Stage setup before the event" },
  { id: 4, src: "https://ext.same-assets.com/2247018288/550733134.png", alt: "DJ Set", caption: "DJ getting the crowd hyped" },
  { id: 5, src: "https://ext.same-assets.com/2249822877/1633374136.jpeg", alt: "Artist Backstage", caption: "Behind the scenes with the artists" },
  { id: 6, src: "https://ext.same-assets.com/837536974/1016767421.jpeg", alt: "Crowd Dancing", caption: "Fans enjoying the music" },
  { id: 7, src: "https://ext.same-assets.com/1091719524/3795670750.png", alt: "Night Performance", caption: "Evening performance with light show" },
  { id: 8, src: "https://ext.same-assets.com/2903173947/4037539387.png", alt: "Group Photo", caption: "Artists group photo at Iowa Summer Jam" },
  { id: 9, src: "https://ext.same-assets.com/891142047/2108475643.png", alt: "Merch Stand", caption: "Official merchandise booth" },
];

// Video data
const videoLinks = [
  { id: 1, title: "Iowa Summer Jam 2023 Recap", thumbnail: "https://ext.same-assets.com/2486445613/1546838901.jpeg", youtubeId: "hBplg7yqZX4" },
  { id: 2, title: "Artist Interviews", thumbnail: "https://ext.same-assets.com/1071712935/943236995.jpeg", youtubeId: "hBplg7yqZX4" },
  { id: 3, title: "Behind the Scenes", thumbnail: "https://ext.same-assets.com/1395402082/1646053460.png", youtubeId: "hBplg7yqZX4" },
];

export default function MediaPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="w-full red-bg py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              PHOTOS & VIDEOS
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Relive the excitement of Iowa Summer Jam through our collection of photos and videos
            </p>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="w-full bg-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-center">FEATURED VIDEOS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoLinks.map((video) => (
              <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative pb-[56.25%]">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <Link href={`https://www.youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer">
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full bg-[#d53f46] flex items-center justify-center">
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
                          className="h-8 w-8 ml-1"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="w-full bg-gray-100 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-center">PHOTO GALLERY</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-lg mb-6">Want to share your photos from Iowa Summer Jam?</p>
            <Link href="/contact" className="btn-iowa">
              SUBMIT YOUR PHOTOS
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="w-full yellow-bg py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">CONNECT WITH US</h2>
            <p className="text-lg mb-8">
              Follow us on social media for the latest updates and behind-the-scenes content!
            </p>

            <div className="flex justify-center space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#d53f46] text-white rounded-full hover:bg-[#232127] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#d53f46] text-white rounded-full hover:bg-[#232127] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#d53f46] text-white rounded-full hover:bg-[#232127] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#d53f46] text-white rounded-full hover:bg-[#232127] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>

            <p className="mt-8 text-lg">
              Tag your posts with <span className="font-bold">#IowaSummerJam</span> for a chance to be featured!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
