import Link from "next/link"
import { Check, X, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Membership Plans | Let'sGoGym",
  description: "Choose the perfect membership plan for your fitness journey. Flexible options for every lifestyle and budget.",
}

const plans = [
  {
    name: "Basic",
    description: "Perfect for beginners starting their fitness journey",
    price: 29,
    period: "month",
    features: [
      { name: "Gym access (6AM - 10PM)", included: true },
      { name: "Basic cardio equipment", included: true },
      { name: "Basic weight machines", included: true },
      { name: "Locker room access", included: true },
      { name: "Free parking", included: true },
      { name: "Free Wi-Fi", included: true },
      { name: "Group classes", included: false },
      { name: "Personal training", included: false },
      { name: "Sauna & steam room", included: false },
      { name: "Nutrition consultation", included: false },
      { name: "Guest passes", included: false },
    ],
    popular: false,
    cta: "Start Basic",
  },
  {
    name: "Standard",
    description: "Our most popular plan with full gym access",
    price: 49,
    period: "month",
    features: [
      { name: "24/7 gym access", included: true },
      { name: "All cardio equipment", included: true },
      { name: "All weight equipment", included: true },
      { name: "Locker room access", included: true },
      { name: "Free parking", included: true },
      { name: "Free Wi-Fi", included: true },
      { name: "All group classes", included: true },
      { name: "1 PT session/month", included: true },
      { name: "Sauna & steam room", included: true },
      { name: "Nutrition consultation", included: false },
      { name: "Guest passes", included: false },
    ],
    popular: true,
    cta: "Start Standard",
  },
  {
    name: "Premium",
    description: "The ultimate fitness experience with all perks",
    price: 79,
    period: "month",
    features: [
      { name: "24/7 gym access", included: true },
      { name: "All cardio equipment", included: true },
      { name: "All weight equipment", included: true },
      { name: "Premium locker", included: true },
      { name: "Free parking", included: true },
      { name: "Free Wi-Fi", included: true },
      { name: "All group classes", included: true },
      { name: "4 PT sessions/month", included: true },
      { name: "Sauna & steam room", included: true },
      { name: "Nutrition consultation", included: true },
      { name: "2 guest passes/month", included: true },
    ],
    popular: false,
    cta: "Start Premium",
  },
  {
    name: "Elite",
    description: "For serious athletes demanding the best",
    price: 129,
    period: "month",
    features: [
      { name: "24/7 gym access", included: true },
      { name: "All cardio equipment", included: true },
      { name: "All weight equipment", included: true },
      { name: "VIP locker suite", included: true },
      { name: "Reserved parking", included: true },
      { name: "Free Wi-Fi", included: true },
      { name: "All group classes + priority", included: true },
      { name: "Unlimited PT sessions", included: true },
      { name: "Spa access included", included: true },
      { name: "Monthly nutrition plan", included: true },
      { name: "Unlimited guest passes", included: true },
    ],
    popular: false,
    cta: "Start Elite",
  },
]

const faqs = [
  {
    question: "Is there a joining fee?",
    answer: "No! We've eliminated joining fees to make fitness accessible to everyone. You only pay your monthly membership fee.",
  },
  {
    question: "Can I cancel my membership anytime?",
    answer: "Yes, all our memberships are month-to-month with no long-term contracts. You can cancel anytime with 30 days notice.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Absolutely! We offer a 7-day free trial for new members to experience our facilities and classes before committing.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your membership plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Are group classes included?",
    answer: "Group classes are included in Standard, Premium, and Elite plans. Basic members can purchase class passes separately.",
  },
  {
    question: "Do you offer corporate or family discounts?",
    answer: "Yes! We offer special rates for corporate groups (5+ employees) and family packages. Contact us for details.",
  },
]

export default function PlansPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Membership Plans
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 text-balance">
              Find Your <span className="text-gradient">Perfect Plan</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Flexible membership options designed to fit your lifestyle and budget. 
              No long-term contracts, no hidden fees — just results.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative flex flex-col p-6 rounded-xl border transition-all duration-300 hover:shadow-lg",
                  plan.popular
                    ? "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20 scale-[1.02]"
                    : "bg-card border-border hover:border-primary/50"
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-foreground text-primary text-xs font-bold rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6 pt-2">
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p
                    className={cn(
                      "text-sm mb-4",
                      plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}
                  >
                    {plan.description}
                  </p>
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
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-2 text-sm">
                      {feature.included ? (
                        <Check
                          className={cn(
                            "h-5 w-5 shrink-0",
                            plan.popular ? "text-primary-foreground" : "text-primary"
                          )}
                        />
                      ) : (
                        <X
                          className={cn(
                            "h-5 w-5 shrink-0",
                            plan.popular ? "text-primary-foreground/40" : "text-muted-foreground/50"
                          )}
                        />
                      )}
                      <span
                        className={cn(
                          feature.included
                            ? plan.popular
                              ? "text-primary-foreground/90"
                              : "text-foreground"
                            : plan.popular
                              ? "text-primary-foreground/40 line-through"
                              : "text-muted-foreground/50 line-through"
                        )}
                      >
                        {feature.name}
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
                  <Link href="/contact">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Annual Savings Note */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            💡 Save up to 20% with annual billing. <Link href="/contact" className="text-primary hover:underline">Contact us</Link> for details.
          </p>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Compare All Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              See exactly what&apos;s included in each plan to make the best choice for your fitness journey.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={cn(
                        "py-4 px-4 font-semibold text-center",
                        plan.popular && "text-primary"
                      )}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((_, featureIndex) => (
                  <tr key={featureIndex} className="border-b border-border/50">
                    <td className="py-3 px-4 text-sm text-muted-foreground">
                      {plans[0].features[featureIndex].name}
                    </td>
                    {plans.map((plan) => (
                      <td key={plan.name} className="py-3 px-4 text-center">
                        {plan.features[featureIndex].included ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/30 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, 
              feel free to contact us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            Join today and get your first week free. No commitment, no risk — just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
            >
              <Link href="/contact">Start Free Trial</Link>
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
