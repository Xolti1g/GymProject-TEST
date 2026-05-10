import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const programs = [
  {
    title: "Weight Training",
    description: "Build strength and muscle with our comprehensive weight training programs.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Cardio Classes",
    description: "Boost your endurance and burn calories with high-energy cardio sessions.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Yoga & Pilates",
    description: "Improve flexibility, balance, and mental clarity through mindful movement.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Personal Training",
    description: "Get one-on-one attention and customized workouts from certified trainers.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
  },
]

export function ProgramsSection() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-balance">
            Find Your Perfect Workout
          </h2>
          <p className="text-muted-foreground text-pretty">
            From intense strength training to relaxing yoga sessions, we offer 
            diverse programs to match your fitness goals and preferences.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <Link
              key={program.title}
              href="/plans"
              className="group relative aspect-[3/4] rounded-xl overflow-hidden"
            >
              {/* Image */}
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {program.description}
                </p>
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
