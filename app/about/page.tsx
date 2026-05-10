import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Eye, Heart, Award, Users, Clock, Dumbbell, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Us | Let'sGoGym",
  description: "Learn about Let'sGoGym's mission, vision, and the team behind your fitness transformation.",
}

const stats = [
  { icon: Users, value: "500+", label: "Active Members" },
  { icon: Award, value: "15+", label: "Expert Trainers" },
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Dumbbell, value: "200+", label: "Equipment Pieces" },
]

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower individuals to achieve their fitness goals through expert guidance, state-of-the-art facilities, and a supportive community that celebrates every victory.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading fitness destination where everyone feels welcome, inspired, and equipped to transform their health and unlock their full potential.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "We believe in integrity, inclusivity, and continuous improvement. Every member is family, and their success is our greatest achievement.",
  },
]

const whyChooseUs = [
  "State-of-the-art equipment from premium brands",
  "Certified and experienced personal trainers",
  "Clean, spacious, and well-maintained facilities",
  "Diverse range of classes for all fitness levels",
  "Flexible membership plans to suit your needs",
  "24/7 access for ultimate convenience",
  "Supportive and motivating community",
  "Regular events and fitness challenges",
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 text-balance">
              Our Story of <span className="text-gradient">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Founded with a passion for fitness and a commitment to transforming lives, 
              Let&apos;sGoGym has grown from a small local gym to a premier fitness destination.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                      alt="Gym equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop"
                      alt="Gym interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=2071&auto=format&fit=crop"
                      alt="Personal training session"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop"
                      alt="Group fitness class"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-primary rounded-xl -z-10" />
            </div>

            {/* Content */}
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-balance">
                Building a Community of Champions
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  What started as a small neighborhood gym in 2014 has evolved into one of the 
                  most respected fitness centers in the region. Our founder, a former professional 
                  athlete, envisioned a place where everyone could train like a champion, 
                  regardless of their fitness level.
                </p>
                <p>
                  Over the years, we&apos;ve invested in cutting-edge equipment, recruited the 
                  best trainers in the industry, and created an environment that inspires 
                  transformation. But what truly sets us apart is our community — a diverse 
                  group of individuals united by their commitment to better health.
                </p>
                <p>
                  Today, Let&apos;sGoGym stands as a testament to what&apos;s possible when passion 
                  meets purpose. We&apos;ve helped thousands of members achieve their goals, from 
                  weight loss and muscle gain to improved mental health and increased confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="p-8 bg-secondary rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-balance">
                The Let&apos;sGoGym Difference
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We&apos;re not just a gym — we&apos;re your partner in transformation. Here&apos;s what 
                makes us the preferred choice for fitness enthusiasts:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="font-semibold group">
                <Link href="/plans">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?q=80&w=2072&auto=format&fit=crop"
                  alt="Modern gym facility"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-2xl">
                <p className="text-4xl font-bold">98%</p>
                <p className="text-sm opacity-90">Member Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to Join the Family?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            Take the first step towards a healthier, stronger you. Our team is ready to welcome 
            you and help you achieve your fitness goals.
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
              <Link href="/contact">Schedule a Tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
