import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TicketForm from "@/components/TicketForm";
import Image from "next/image";

export default function TicketsPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full red-bg py-12">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl text-white font-bold text-center mb-4">
              GET YOUR TICKETS
            </h1>
            <p className="text-center text-white text-lg max-w-2xl">
              Secure your spot at the biggest music event in Iowa. Early bird tickets available now!
            </p>
          </div>
        </div>
      </section>

      {/* Ticket Options */}
      <section className="w-full bg-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">TICKET OPTIONS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* General Admission */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="h-12 bg-[#e6d12d] -mt-6 -mx-6 mb-6 rounded-t-lg flex items-center justify-center">
                <h3 className="text-xl font-bold">GENERAL ADMISSION</h3>
              </div>
              <div className="flex justify-center mb-4">
                <span className="text-3xl font-bold">$25</span>
              </div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Festival entry from 4 PM
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Access to all performances
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Food & merchandise available for purchase
                </li>
              </ul>
            </div>

            {/* VIP */}
            <div className="bg-white border-2 border-[#d53f46] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform scale-105 -mt-4">
              <div className="h-12 bg-[#d53f46] -mt-6 -mx-6 mb-6 rounded-t-lg flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">VIP PACKAGE</h3>
              </div>
              <div className="flex justify-center mb-4">
                <span className="text-3xl font-bold">$50</span>
              </div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Early entry at 3 PM
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  VIP section near stage
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  1 free drink + Iowa Summer Jam t-shirt
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Meet & greet with select artists
                </li>
              </ul>
              <div className="absolute top-0 right-0 bg-[#d53f46] text-white text-xs px-3 py-1 -mt-2 mr-4 rounded-full">
                BEST VALUE
              </div>
            </div>

            {/* Group Package */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="h-12 bg-[#232127] -mt-6 -mx-6 mb-6 rounded-t-lg flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">GROUP PACKAGE</h3>
              </div>
              <div className="flex justify-center mb-4">
                <span className="text-3xl font-bold">$120</span>
              </div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  5 General Admission tickets
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Reserved seating area
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Discount on merchandise
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Form */}
      <section className="w-full bg-gray-100 py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">PURCHASE TICKETS</h2>
          <TicketForm />
        </div>
      </section>

      {/* Festival Information */}
      <section className="w-full yellow-bg py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">FESTIVAL INFORMATION</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">Location</h3>
                  <p>Wildwood Saloon, Iowa City, IA</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Date & Time</h3>
                  <p>Saturday, June 14, 2025 | 4:00 PM - Late</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Parking</h3>
                  <p>Free parking available on-site</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Age Restrictions</h3>
                  <p>All ages welcome. Under 18 must be accompanied by an adult.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11850.344120562526!2d-91.7223199883691!3d41.701203649172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e441e16a861aa7%3A0xd3be75e9f3d651ce!2sWildwood%20Smokehouse%20%26%20Saloon!5e0!3m2!1sen!2sus!4v1711333184830!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
