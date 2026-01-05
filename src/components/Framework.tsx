
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Framework: React.FC = () => {
  const capitals = [
    {
      title: "Intellectual Capital",
      desc: "Moving beyond 'tasks' to 'solving problems' at scale.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    },
    {
      title: "Social Capital",
      desc: "Building a network that works for you while you sleep.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop"
    },
    {
      title: "Reputational Capital",
      desc: "How you are talked about when you aren't in the room.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      title: "Emotional Capital",
      desc: "The resilience and confidence that allows you to negotiate.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop"
    },
    {
      title: "Economic Capital",
      desc: "The actual conversion of value into high-yield assets.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="framework" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Section - Introduction */}
          <div className="reveal relative">
            {/* Orange gradient wave background */}
            <div 
              className="absolute inset-0 -z-10 opacity-30"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 154, 128, 0.1) 0%, rgba(255, 209, 193, 0.15) 100%)',
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
              }}
            ></div>
            
            <div className="relative z-10">
              <span className="text-accent font-bold uppercase tracking-widest text-xs md:text-sm">
                EXCLUSIVE METHODOLOGY
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-8 leading-tight">
                <span className="text-charcoal">The 5 Capitals</span>{' '}
                <span className="text-accent">Framework</span>
              </h2>
              <p className="text-lg md:text-xl text-body mb-8 leading-relaxed">
                Most career advice focuses on 1 Capital: Intellectual (learning skills). 
                The top 1% focuses on the 4 other Capitals that actually drive income.
              </p>
              
              <div className="space-y-4 mb-12">
                <div className="flex items-center gap-3 text-charcoal font-semibold">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span>Used by CEOs & VP-level professionals</span>
                </div>
                <div className="flex items-center gap-3 text-charcoal font-semibold">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span>Built for the Indian corporate ecosystem</span>
                </div>
                <div className="flex items-center gap-3 text-charcoal font-semibold">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span>Zero fluff, all actionable strategy</span>
                </div>
              </div>
              
              <a 
                href="#cta" 
                className="inline-flex items-center gap-2 text-accent font-bold text-lg hover:gap-4 transition-all group"
              >
                Learn how to apply this{' '}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Section - 5 Capitals Cards */}
          <div className="space-y-4">
            {capitals.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 reveal group"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex gap-4 p-5 md:p-6">
                  {/* Image */}
                  <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Framework;