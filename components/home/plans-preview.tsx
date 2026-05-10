import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Basic",
    price: 29,
    period: "month",
    features: ["Gym access (6AM - 10PM)", "Basic equipment", "Locker room access", "Free parking"],
    popular: false,
  },
  {
    name: "Standard",
    price: 49,
    period: "month",
    features: [
      "24/7 gym access",
      "All equipment",
      "Group classes",
      "Locker room & sauna",
      "1 PT session/month",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: 79,
    period: "month",
    features: [
      "24/7 gym access",
      "All equipment & classes",
      "Personal training (4x/month)",
      "Nutrition consultation",
      "Premium locker",
      "Guest passes",
    ],
    popular: false,
  },
]

export function PlansPreview() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Membership Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-balance">
            Choose Your Plan
          </h2>
          <p className="text-muted-foreground text-pretty">
            Flexible membership options designed to fit your lifestyle. 
            Start your fitness journey today with the plan that works for you.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-6 rounded-xl border transition-all duration-300 hover:shadow-lg",
                plan.popular
                  ? "bg-primary text-primary-foreground border-primary scale-105 shadow-xl shadow-primary/20"
                  : "bg-secondary border-border hover:border-primary/50"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-foreground text-primary text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6 pt-2">
                <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span
                    className={cn(
                      "text-sm",
                      plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}
                  >
                    /{plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      className={cn(
                        "h-5 w-5 shrink-0",
                        plan.popular ? "text-primary-foreground" : "text-primary"
                      )}
                    />
                    <span
                      className={cn(
                        plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className={cn(
                  "w-full font-semibold",
                  plan.popular
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : ""
                )}
                variant={plan.popular ? "default" : "outline"}
              >
                <Link href="/plans">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Button asChild variant="ghost" className="font-semibold group">
            <Link href="/plans">
              View All Plan Details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
