import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStrip from "@/components/BrandStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import PlacementJourney from "@/components/PlacementJourney";
import Brands from "@/components/Brands";
import Quotes from "@/components/Quotes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { EnquiryProvider } from "@/components/EnquiryContext";

export default function HomePage() {
  return (
    <EnquiryProvider>
      <div style={{ background: "var(--bg-soft)" }}>
        <Header />
        <Hero />
      </div>
      <main>
        <BrandStrip />
        <About />
        <Services />
        <PlacementJourney />
        <Brands />
        <Quotes />
        <Contact />
      </main>
      <Footer />
    </EnquiryProvider>
  );
}
