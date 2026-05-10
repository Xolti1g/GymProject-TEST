import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { BenefitsSection } from "@/components/home/benefits-section"
import { ProgramsSection } from "@/components/home/programs-section"
import { TrainersPreview } from "@/components/home/trainers-preview"
import { PlansPreview } from "@/components/home/plans-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ProgramsSection />
      <TrainersPreview />
      <PlansPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
