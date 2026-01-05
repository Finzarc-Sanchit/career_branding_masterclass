
import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const Qualification: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Is This For You?</h2>
          <p className="text-body">Building authority requires seriousness. Let's see if we're a match.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-emerald-50/50 p-10 rounded-[2.5rem] border border-emerald-100 reveal">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900">This is for you if...</h3>
            </div>
            <ul className="space-y-5">
              {[
                "You have 5-15+ years of experience.",
                "You feel invisible despite being high-performing.",
                "You are ready to unlearn traditional career advice.",
                "You want to build a long-term personal brand.",
                "You value clarity and calm over hustle."
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 text-emerald-800 font-medium">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50/50 p-10 rounded-[2.5rem] border border-red-100 reveal">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-900">This is NOT if...</h3>
            </div>
            <ul className="space-y-5">
              {[
                "You are looking for resume 'hacks' or shortcuts.",
                "You aren't willing to put in the work for growth.",
                "You believe work alone should be enough.",
                "You are a fresh graduate (this is for experience).",
                "You are happy with 5% annual increments."
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 text-red-800 font-medium opacity-70">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
