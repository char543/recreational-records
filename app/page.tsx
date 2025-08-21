import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ReleasesSection } from "@/components/releases-section"
import ArtistsSection from "@/components/artists-section"
import NewsSection from "@/components/news-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import FloatingPlayer from "@/components/floating-player"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ReleasesSection />
      <ArtistsSection />
      <NewsSection />
      <ContactSection />
      <Footer />
      <FloatingPlayer />
    </main>
  )
}
