"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Jennifer Williams",
    role: "Member since 2022",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    quote:
      "Let'sGoGym completely transformed my life. The trainers are incredibly supportive, and the community keeps me motivated. I've lost 30 pounds and gained so much confidence!",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Member since 2021",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    quote:
      "Best gym I've ever been to. The equipment is top-notch, the facility is always clean, and the 24/7 access fits perfectly with my busy schedule. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Member since 2023",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    quote:
      "The yoga and pilates classes here are amazing. The instructors are knowledgeable and create such a welcoming atmosphere. I've improved my flexibility and reduced my stress significantly.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-balance">
            What Our Members Say
          </h2>
          <p className="text-muted-foreground text-pretty">
            Don&apos;t just take our word for it. Hear from our community of 
            fitness enthusiasts who have transformed their lives with us.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-0 md:left-8">
              <Quote className="h-16 w-16 text-primary/20" />
            </div>

            {/* Testimonial Content */}
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Avatar */}
                <div className="shrink-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-primary/20">
                    <Image
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-primary fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                    &quot;{testimonials[current].quote}&quot;
                  </p>

                  <div>
                    <p className="font-semibold">{testimonials[current].name}</p>
                    <p className="text-sm text-primary">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all",
                      current === index
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
