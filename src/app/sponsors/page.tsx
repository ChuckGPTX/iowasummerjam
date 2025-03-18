import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// Sponsor data
const sponsors = [
  { id: 1, name: "Soundwave Audio", image: "https://ext.same-assets.com/2903798528/834359255.png", level: "Gold", description: "Professional audio equipment and sound reinforcement" },
  { id: 2, name: "Rhythm Records", image: "https://ext.same-assets.com/1839349691/2618427021.png", level: "Gold", description: "Iowa's premier independent record label" },
  { id: 3, name: "Metro Music Studios", image: "https://ext.same-assets.com/3779018628/1744021121.png", level: "Silver", description: "Recording and production facility" },
  { id: 4, name: "Crescendo Beverages", image: "https://ext.same-assets.com/3404260534/2201461541.png", level: "Silver", description: "Craft beverages and refreshments" },
  { id: 5, name: "Harmony Apparel", image: "https://ext.same-assets.com/3279006703/2957951111.png", level: "Bronze", description: "Custom merchandise and apparel" },
  { id: 6, name: "Bass Boost Media", image: "https://ext.same-assets.com/84019203/623305332.png", level: "Bronze", description: "Digital marketing for musicians" },
];

// Sponsorship packages
const packages = [
  {
    id: 1,
    level: "Gold",
    price: "$5,000",
    benefits: [
      "Premium logo placement on all event materials",
      "VIP area access for 10 guests",
      "Dedicated booth space (10' x 20')",
      "On-stage mentions throughout the event",
      "Social media promotion (10 dedicated posts)",
      "Logo on event t-shirts (large size)",
      "Banner placement at main stage"
    ]
  },
  {
    id: 2,
    level: "Silver",
    price: "$2,500",
    benefits: [
      "Logo placement on select event materials",
      "VIP area access for 5 guests",
      "Booth space (10' x 10')",
      "Limited on-stage mentions",
      "Social media promotion (5 dedicated posts)",
      "Logo on event t-shirts (medium size)"
    ]
  },
  {
    id: 3,
    level: "Bronze",
    price: "$1,000",
    benefits: [
      "Logo placement on website and program",
      "VIP area access for 2 guests",
      "Shared booth space",
      "Social media mentions (2 dedicated posts)",
      "Logo on event t-shirts (small size)"
    ]
  }
];

// Vendor info
const vendorInfo = {
  price: "$250",
  details: [
    "10' x 10' booth space",
    "1 table and 2 chairs provided",
    "Access to electricity (upon request)",
    "Listing in event program",
    "2 vendor passes included"
  ]
};

export default function SponsorsPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="w-full red-bg py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SPONSORS & VENDORS
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Support Iowa's biggest music festival and connect with our engaged audience
            </p>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="w-full bg-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-2 text-center">OUR SPONSORS</h2>
          <p className="text-lg text-center mb-10">
            These amazing organizations help make Iowa Summer Jam possible
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="bg-white rounded-lg overflow-hidden shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    width={180}
                    height={100}
                    className="h-20 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">{sponsor.name}</h3>
                <span className={`my-2 px-3 py-1 rounded-full text-sm text-white ${
                  sponsor.level === "Gold" ? "bg-yellow-500" :
                  sponsor.level === "Silver" ? "bg-gray-400" :
                  "bg-amber-700"
                }`}>
                  {sponsor.level} Sponsor
                </span>
                <p className="mt-2 text-gray-600">{sponsor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="w-full bg-gray-100 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">BECOME A SPONSOR</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Partnering with Iowa Summer Jam connects your brand with music lovers across Iowa and surrounding states
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`bg-white rounded-lg overflow-hidden shadow-lg ${
                pkg.level === "Gold" ? "border-t-8 border-yellow-500" :
                pkg.level === "Silver" ? "border-t-8 border-gray-400" :
                "border-t-8 border-amber-700"
              }`}>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.level} Package</h3>
                  <p className="text-3xl font-bold mb-4">{pkg.price}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-iowa">
              REQUEST SPONSORSHIP INFO
            </Link>
          </div>
        </div>
      </section>

      {/* Vendor Information */}
      <section className="w-full yellow-bg py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">VENDOR OPPORTUNITIES</h2>
              <p className="text-lg mb-6">
                Iowa Summer Jam is the perfect place to showcase your products to our audience of music enthusiasts. Limited vendor spaces are available.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Vendor Package: {vendorInfo.price}</h3>
                <ul className="space-y-2 mb-6">
                  {vendorInfo.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="btn-iowa inline-block">
                  APPLY AS VENDOR
                </Link>
              </div>
            </div>

            <div className="md:w-1/2">
              <Image
                src="https://ext.same-assets.com/2486445613/1546838901.jpeg"
                alt="Vendor Booths"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
