import { Dumbbell, Users, Clock, Wifi, ShowerHead, HeartPulse } from "lucide-react"

const benefits = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description:
      "Train with the latest fitness technology and premium equipment from top brands.",
  },
  {
    icon: Users,
    title: "Professional Trainers",
    description:
      "Our certified trainers provide personalized guidance to help you reach your goals faster.",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description:
      "Work out on your schedule with round-the-clock access to all our facilities.",
  },
  {
    icon: HeartPulse,
    title: "Flexible Plans",
    description:
      "Choose from a variety of membership options designed to fit your lifestyle and budget.",
  },
  {
    icon: ShowerHead,
    title: "Premium Amenities",
    description:
      "Enjoy clean locker rooms, showers, saunas, and a comfortable lounge area.",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description:
      "Stay connected with complimentary high-speed internet throughout the gym.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-balance">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted-foreground text-pretty">
            We provide all the tools, support, and motivation you need to achieve 
            your fitness goals and maintain a healthy lifestyle.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
