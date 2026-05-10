import Image from "next/image"
import Link from "next/link"
import { Instagram, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Our Trainers | Let'sGoGym",
  description: "Meet our team of certified fitness professionals dedicated to helping you achieve your goals.",
}

const trainers = [
  {
    name: "Marcus Johnson",
    role: "Strength & Conditioning Coach",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop",
    bio: "With 10+ years of experience in strength training, Marcus has helped hundreds of clients build muscle and increase their overall fitness. He specializes in powerlifting and functional training.",
    certifications: ["NSCA-CSCS", "ACE-CPT", "Precision Nutrition L1"],
    social: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Sarah Chen",
    role: "Yoga & Pilates Instructor",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
    bio: "Sarah brings a holistic approach to fitness, combining traditional yoga practices with modern pilates techniques. Her classes focus on flexibility, core strength, and mindfulness.",
    certifications: ["RYT-500", "Comprehensive Pilates", "Mindfulness Coach"],
    social: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "David Miller",
    role: "HIIT & Cardio Specialist",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=1972&auto=format&fit=crop",
    bio: "David's high-energy classes are designed to torch calories and boost cardiovascular health. His innovative workout programs keep members motivated and coming back for more.",
    certifications: ["ACE-GFI", "TRX Certified", "Spinning Instructor"],
    social: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Emily Rodriguez",
    role: "Nutrition & Wellness Coach",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop",
    bio: "Emily combines her knowledge of nutrition science with practical coaching to help clients develop sustainable eating habits that support their fitness goals.",
    certifications: ["PN Level 2", "ACE Health Coach", "Sports Nutritionist"],
    social: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "James Wilson",
    role: "Boxing & MMA Trainer",
    image: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?q=80&w=1913&auto=format&fit=crop",
    bio: "Former amateur boxer James brings authentic combat sports training to the gym floor. His classes improve coordination, agility, and provide an incredible full-body workout.",
    certifications: ["USA Boxing Coach", "Krav Maga L2", "First Aid Certified"],
    social: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Lisa Thompson",
    role: "Senior Fitness Specialist",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    bio: "Lisa specializes in working with adults 50+ to improve mobility, balance, and quality of life. Her gentle yet effective approach makes fitness accessible to everyone.",
    certifications: ["ACE Senior Fitness", "Silver Sneakers", "Fall Prevention"],
    social: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Michael Chang",
    role: "CrossFit & Functional Training",
    image: "https://images.unsplash.com/photo-1597347316205-36f6c451902a?q=80&w=2070&auto=format&fit=crop",
    bio: "Michael's CrossFit classes push limits while maintaining safety. He emphasizes proper form and progressive overload to help athletes of all levels achieve peak performance.",
    certifications: ["CrossFit L2", "Weightlifting Coach", "Mobility Specialist"],
    social: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Amanda Foster",
    role: "Dance Fitness Instructor",
    image: "https://images.unsplash.com/photo-1518310952931-b1de897abd40?q=80&w=1974&auto=format&fit=crop",
    bio: "Amanda makes fitness fun with her energetic dance classes that blend Zumba, hip-hop, and Latin rhythms. Her sessions prove that working out doesn't have to feel like work.",
    certifications: ["Zumba Instructor", "AFAA-GFI", "Barre Certified"],
    social: { instagram: "#", twitter: "#", linkedin: "#" },
  },
]

export default function TrainersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 text-balance">
              Meet Our <span className="text-gradient">Expert Trainers</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Our certified fitness professionals are dedicated to helping you achieve your goals. 
              With diverse specializations and years of experience, they&apos;ll guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trainers.map((trainer) => (
              <div
                key={trainer.name}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
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
                    <a
                      href={trainer.social.linkedin}
                      className="p-3 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition-colors"
                      aria-label={`${trainer.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5 text-primary-foreground" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{trainer.name}</h3>
                  <p className="text-primary text-sm mb-3">{trainer.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {trainer.bio}
                  </p>
                  {/* Certifications */}
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.certifications.slice(0, 2).map((cert) => (
                      <span
                        key={cert}
                        className="px-2 py-1 bg-secondary text-xs rounded-md text-muted-foreground"
                      >
                        {cert}
                      </span>
                    ))}
                    {trainer.certifications.length > 2 && (
                      <span className="px-2 py-1 bg-secondary text-xs rounded-md text-muted-foreground">
                        +{trainer.certifications.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Want to Join Our Team?
            </h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              We&apos;re always looking for passionate fitness professionals to join our growing team. 
              If you&apos;re certified and share our commitment to transforming lives, we&apos;d love to hear from you.
            </p>
            <Button asChild size="lg" className="font-semibold">
              <Link href="/contact">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Book a Session CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to Train with the Best?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            Book a session with one of our expert trainers and take the first step 
            towards achieving your fitness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
            >
              <Link href="/plans">View Membership Plans</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-semibold"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
