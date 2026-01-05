import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  result?: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  return (
    <div className={cn("relative", className)}>
      {/* Content Section - Fixed height container to prevent resizing */}
      <div className="relative min-h-[400px] flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="absolute inset-0 flex flex-col"
          >
            {/* Quote - Fixed height area */}
            <div className="min-h-[180px] flex items-start mb-8">
              <p className="text-3xl font-serif italic text-charcoal leading-relaxed">
                "{testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}"
              </p>
            </div>

            {/* Author - Fixed position */}
            <div className="flex items-center gap-4 border-t border-charcoal/5 pt-8 h-[80px]">
              <motion.img
                src={testimonials[active].src}
                className="w-14 h-14 rounded-full border-2 border-accent object-cover flex-shrink-0"
                alt={testimonials[active].name}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              />
              <div className="min-w-0">
                <p className="text-charcoal font-bold text-lg truncate">{testimonials[active].name}</p>
                <p className="text-charcoal/60 text-sm truncate">{testimonials[active].designation}</p>
              </div>
            </div>

            {/* Result badge - Fixed position */}
            <div className="h-[60px] flex items-start pt-4">
              {testimonials[active].result ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg"
                >
                  <span className="text-accent font-bold text-sm">{testimonials[active].result}</span>
                </motion.div>
              ) : (
                <div className="h-[36px]"></div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons - Fixed at bottom-right */}
        <div className="absolute bottom-0 right-0 flex gap-2 z-20">
          <button
            onClick={handlePrev}
            className="h-10 w-10 rounded-full bg-charcoal/5 hover:bg-charcoal/10 flex items-center justify-center group/button transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-charcoal group-hover/button:translate-x-[-2px] transition-transform duration-300" />
          </button>
          <button
            onClick={handleNext}
            className="h-10 w-10 rounded-full bg-charcoal/5 hover:bg-charcoal/10 flex items-center justify-center group/button transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-charcoal group-hover/button:translate-x-[2px] transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

