import HeroSection from "@/components/hero-section";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Features from "@/components/features-1";
import ContentSection from "@/components/content-1";
import FAQs from "@/components/faqs";
import Testimonials from "@/components/testimonials";
export default async function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <ContentSection />
      <Testimonials />
      <FAQs />
      <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
        <ThemeSwitcher />
      </footer>
    </>
  );
}
