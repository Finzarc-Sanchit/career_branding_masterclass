
import React from 'react';
import { AnimatedTestimonials } from './ui/animated-testimonials';

const PainPoints: React.FC = () => {
  const painSignals = [
    "You've been in the same role for 3+ years with only 'inflation' hikes.",
    "You're doing the work of two people, but your manager doesn't see your potential.",
    "You see peers with less technical skill getting promoted over you."
  ];

  const testimonials = [
    {
      quote: "I used to think my work would speak for itself. It did—but only to my desk. Sakshi taught me how to make it speak to the Boardroom.",
      name: "Vikram S.",
      designation: "VP of Operations, 14+ Yrs Exp",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      result: "Result: ₹18L hike in 4 months"
    },
    {
      quote: "I restructured my positioning. I stopped applying for jobs and started being 'poached'. My income jumped from 32L to 52L in 6 months.",
      name: "Nidhi S.",
      designation: "Director of Engineering",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      result: "Result: ₹20L hike in 6 months"
    },
    {
      quote: "The 5 Capitals Framework changed everything. I went from being invisible to being the go-to person for strategic initiatives.",
      name: "Rajesh K.",
      designation: "Senior VP, Technology",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop",
      result: "Result: ₹25L hike in 8 months"
    },
    {
      quote: "Sakshi helped me understand that my value wasn't in my skills alone—it was in how I positioned them. Game changer.",
      name: "Priya M.",
      designation: "VP of Product, 12+ Yrs Exp",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1974&auto=format&fit=crop",
      result: "Result: ₹22L hike in 5 months"
    }
  ];

  return (
    <section className="py-32 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - The Realization */}
        <div className="reveal">
          <span className="text-accent font-bold uppercase tracking-widest text-sm">The Invisible Barrier</span>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-8 leading-tight">
            Does your paycheck reflect <br />
            <span className="text-accent underline decoration-accent/20">your true value?</span>
          </h2>
          <p className="text-lg text-body mb-12 leading-relaxed">
            Most professionals are trapped in the "Performance Paradox." They work harder, expecting visibility to follow. It doesn't.
          </p>

          <div className="space-y-6">
            {painSignals.map((signal, idx) => (
              <div key={idx} className="reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <p className="text-charcoal/80 font-medium leading-relaxed pl-6 border-l-2 border-charcoal/10">
                  {signal}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - The Proof with Animated Testimonials */}
        <div className="relative reveal">
          {/* Soft gradient background shape - matching Transformation section style */}
          <div className="absolute -bottom-10 -right-10 w-full h-full bg-primary-gradient rounded-[2.5rem] -z-10 rotate-3"></div>

          {/* Premium testimonial card - matching site's card style */}
          <div className="bg-white p-12 rounded-[2.5rem] relative z-10 shadow-2xl">
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
