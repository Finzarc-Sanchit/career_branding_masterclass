
import React from 'react';
import sakshiImage from '../assets/images/about.webp';

const AboutCoach: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="reveal">
            {/* Tag */}
            <span className="text-accent font-bold uppercase tracking-widest text-sm">About Sakshi</span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-8 leading-tight">
              Our mission stays the same.
            </h2>

            {/* Body Text */}
            <div className="space-y-6 text-lg text-body leading-relaxed mb-12">
              <p>
                I'm Sakshi Chandraakar, India's #1 Career Branding Coach And Founder Of Career Branding Hub & Happy Rich India Movement.
              </p>
              <p>
                From Burnout To Breakthrough, I've Trained 5700+ Professionals Find Purpose, Land Dream Roles At Companies Like Facebook, Rolls Royce, And Deloitte, And Build Lives Filled With Wealth, Clarity, And Joy.
              </p>
              <p>
                Through The Happy Rich India Mission, I'm Reviving The Lost Spirit Of Indian Prosperity — Helping People Create Generational Wealth While Staying Rooted In Who They Truly Are.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-charcoal mb-2">5700+</div>
                <p className="text-charcoal/60 font-medium text-sm">Professionals Trained</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-charcoal mb-2">₹100Cr+</div>
                <p className="text-charcoal/60 font-medium text-sm">Cumulative Salary Hikes</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-charcoal mb-2">2500+</div>
                <p className="text-charcoal/60 font-medium text-sm">Lives Transformed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-charcoal mb-2">12+</div>
                <p className="text-charcoal/60 font-medium text-sm">Years of Experience</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative reveal">
            <div className="relative rounded-[2.5rem] overflow-hidden max-w-md mx-auto">
              <img
                src={sakshiImage}
                alt="Sakshi Chandraakar"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCoach;
