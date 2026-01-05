
import React from 'react';
import { Feature197 } from './ui/accordion-feature-section';

const LearningOutcomes: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "The Invisibility Audit",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      description: "Identify exactly why your current efforts are being ignored by leadership. Learn the hidden patterns that keep high performers invisible and discover the exact signals that make decision-makers take notice."
    },
    {
      id: 2,
      title: "Hiring Psychology",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
      description: "How high-ticket roles are actually filled (hint: it's not through portals). Understand the psychology behind executive hiring decisions and learn how to position yourself as the obvious choice."
    },
    {
      id: 3,
      title: "The 5 Capitals Map",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      description: "Step-by-step framework to transition from execution to authority. Master the five critical capitals that separate top earners from the rest: Human, Social, Cultural, Symbolic, and Economic Capital."
    },
    {
      id: 4,
      title: "Premium Positioning",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      description: "How to articulate your value so companies see you as an investment, not a cost. Transform your narrative from 'what you do' to 'what you're worth' and command the compensation you deserve."
    }
  ];

  return (
    <section className="py-32 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
          <div className="max-w-2xl">
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Inside the Masterclass</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-4">
              A Strategic Roadmap for the <br /><span className="font-serif italic font-normal">Top 1% Professional</span>
            </h2>
          </div>
          <p className="text-body text-lg max-w-sm">
            We don't do hacks. We do frameworks that have worked for over 2,500 professionals.
          </p>
        </div>

        <div className="reveal">
          <Feature197 features={features} />
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;
