import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArtistLineup from "@/components/ArtistLineup";
import VideoRecap from "@/components/VideoRecap";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ArtistLineup />
      <VideoRecap />
      <Sponsors />
      <Footer />
    </main>
  );
}
