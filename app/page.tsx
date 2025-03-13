import HeaderAuth from "@/components/header-auth";
import HeroSection from "@/components/hero-section";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
        <ThemeSwitcher />
      </footer>
    </>
  );
}
