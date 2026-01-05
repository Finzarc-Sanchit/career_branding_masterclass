
import React from 'react';

const ProblemReframing: React.FC = () => {
  const insights = [
    {
      number: "01",
      title: "The Talent Trap",
      description: "If you're the best at your job, companies optimize you for output—not advancement.",
      boldWords: ["job"]
    },
    {
      number: "02",
      title: "Branding = Premium",
      description: "The product stays the same. Positioning changes how much people are willing to pay.",
      boldWords: ["Positioning"]
    },
    {
      number: "03",
      title: "Future Proofing",
      description: "Skills get automated. Authority and trust do not.",
      boldWords: ["Authority"]
    }
  ];

  const formatDescription = (text: string, boldWords: string[]) => {
    let result: (string | React.ReactElement)[] = [text];
    boldWords.forEach(word => {
      const newResult: (string | React.ReactElement)[] = [];
      result.forEach((part, partIndex) => {
        if (typeof part === 'string') {
          const regex = new RegExp(`\\b(${word})\\b`, 'gi');
          const segments = part.split(regex);
          segments.forEach((segment, i) => {
            if (i % 2 === 1) {
              newResult.push(<strong key={`${partIndex}-${i}`}>{segment}</strong>);
            } else if (segment) {
              newResult.push(segment);
            }
          });
        } else {
          newResult.push(part);
        }
      });
      result = newResult;
    });
    return result;
  };

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="text-4xl md:text-6xl font-bold text-charcoal mb-8">
            The Hard Truth About <br /><span className="font-serif italic font-normal">Career Growth</span>
          </h2>
          <p className="text-xl text-body leading-relaxed mb-6">
            In the top 1% of earners, skill is a <span className="text-charcoal font-bold">commodity</span>.
            Positioning is the <span className="text-accent font-bold">differentiator</span>.
          </p>
          <p className="text-lg text-charcoal/60 italic">
            This is what actually happens when you rely on skill alone:
          </p>
        </div>

        {/* Vertical Reason Stack */}
        <div className="space-y-0 mb-0">
          {insights.map((insight, index) => (
            <div key={index} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="py-6">
                <div className="flex items-start gap-6">
                  {/* Large accent number */}
                  <div className="flex-shrink-0">
                    <span className="text-5xl md:text-6xl font-bold text-accent leading-none">
                      {insight.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">
                      {insight.title}
                    </h3>
                    <p className="text-lg text-body leading-relaxed">
                      {formatDescription(insight.description, insight.boldWords).map((part, i) => (
                        <React.Fragment key={i}>{part}</React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              </div>

              {/* Thin divider line (except for last item) */}
              {index < insights.length - 1 && (
                <div className="h-px bg-charcoal/10"></div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Real Problem Statement Section */}
      <div className="pt-20 pb-12 -mx-6 md:-mx-8 px-6 md:px-8 mt-0">
        <div className="max-w-[900px] mx-auto reveal">
          {/* Label with Divider */}
          <div className="relative mb-12">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-charcoal/10"></div>
            <div className="relative flex justify-center">
              <div className="bg-white px-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal/50">
                  THE REAL PROBLEM
                </p>
              </div>
            </div>
          </div>

          {/* Main Statement Card */}
          <div className="rounded-[2.5rem] p-10 md:p-12 text-center shadow-2xl bg-charcoal relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>

            <div className="relative z-10">
              {/* Quote */}
              <p className="text-2xl md:text-3xl lg:text-4xl text-white font-medium max-w-4xl mx-auto leading-relaxed mb-4">
                "You're not underpaid because you lack skills.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-medium italic font-serif max-w-4xl mx-auto leading-relaxed text-accent">
                You're underpaid because companies don't see your value."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemReframing;
