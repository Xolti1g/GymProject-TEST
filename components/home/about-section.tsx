import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "State-of-the-art equipment",
  "Certified professional trainers",
  "Clean and spacious facilities",
  "Supportive fitness community",
]

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                alt="Gym interior with modern equipment"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-primary text-primary-foreground p-6 rounded-xl shadow-2xl">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm opacity-90">Years of Excellence</p>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-balance">
              Where Fitness Meets Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Let&apos;sGoGym, we believe that fitness is not just about building muscle — 
              it&apos;s about building confidence, discipline, and a healthier lifestyle. Since 
              our founding, we&apos;ve helped thousands of members achieve their fitness goals 
              in a welcoming and motivating environment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our facility features the latest equipment, diverse workout programs, and a 
              team of passionate trainers dedicated to your success. Whether you&apos;re a 
              beginner or a seasoned athlete, you&apos;ll find everything you need to push 
              your limits and transform your life.
            </p>

            {/* Highlights */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="font-semibold group">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
