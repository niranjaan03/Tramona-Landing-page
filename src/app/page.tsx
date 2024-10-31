import CardSection from "./components/CardSection";
import CityGallery from "./components/CityGallery";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fff]">
      <HeroSection />

      <div className="container mx-auto px-16 py-4">
        <PricingSection />
        <CardSection />
        <CityGallery />
        {/* <Footer /> */}
      </div>
      <Footer />
    </main>
  );
}
