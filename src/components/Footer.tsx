
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-charcoal">SAKSHI CHANDRAAKAR</span>
            </div>
            <p className="text-body max-w-xs mb-8">
              Helping high-performing professionals become high-value authorities using the 5 Capitals Framework.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#F8F8F8] rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#F8F8F8] rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#F8F8F8] rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#framework" className="text-body hover:text-accent transition-colors">Framework</a></li>
              <li><a href="#about" className="text-body hover:text-accent transition-colors">About Sakshi</a></li>
              <li><a href="#cta" className="text-body hover:text-accent transition-colors">Masterclass</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-body hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-body hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-body hover:text-accent transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted text-sm italic font-serif">
            Two paths lie ahead. One leads to safety. The other leads to growth.
          </p>
          <p className="text-muted text-sm font-medium">
            © 2024 Sakshi Chandraakar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
