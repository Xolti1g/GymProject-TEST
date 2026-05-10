import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const trainers = [
  {
    name: "Marcus Johnson",
    role: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop",
    social: { instagram: "#", twitter: "#" },
  },
  {
    name: "Sarah Chen",
    role: "Yoga & Pilates",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
    social: { instagram: "#", twitter: "#" },
  },
  {
    name: "David Miller",
    role: "HIIT & Cardio",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=1972&auto=format&fit=crop",
    social: { instagram: "#", twitter: "#" },
  },
]

export function TrainersPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Expert Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-balance">
              Meet Our Trainers
            </h2>
          </div>
          <Button asChild variant="outline" className="font-semibold group self-start sm:self-auto">
            <Link href="/trainers">
              View All Trainers
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Trainers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay with Social Links */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={trainer.social.instagram}
                    className="p-3 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition-colors"
                    aria-label={`${trainer.name}'s Instagram`}
                  >
                    <Instagram className="h-5 w-5 text-primary-foreground" />
                  </a>
                  <a
                    href={trainer.social.twitter}
                    className="p-3 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition-colors"
                    aria-label={`${trainer.name}'s Twitter`}
                  >
                    <Twitter className="h-5 w-5 text-primary-foreground" />
                  </a>
                </div>
              </div>
              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="font-semibold text-lg">{trainer.name}</h3>
                <p className="text-primary text-sm">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
