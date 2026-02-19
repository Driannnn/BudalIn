import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CatalogSection from "@/components/CatalogSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

/**
 * BudalIn Landing Page
 * --------------------
 * Semua section di-compose di sini secara berurutan.
 * Masing-masing section bersifat client component (karena Framer Motion),
 * sehingga page ini tetap bisa menjadi server component.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CatalogSection />
      <HowItWorksSection />
      <Footer />
    </>
  );
}
