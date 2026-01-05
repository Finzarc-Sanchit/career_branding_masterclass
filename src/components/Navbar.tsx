
import React, { useState, useEffect } from 'react';
import { useFormDialog } from '../contexts/FormDialogContext';

const Navbar: React.FC = () => {
  const { openDialog } = useFormDialog();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">SC</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-charcoal">SAKSHI CHANDRAAKAR</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#framework" className="text-sm font-medium text-charcoal/70 hover:text-accent transition-colors">The Framework</a>
          <a href="#about" className="text-sm font-medium text-charcoal/70 hover:text-accent transition-colors">About</a>
          <button 
            onClick={openDialog}
            className="bg-charcoal text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-charcoal/90 transition-all active:scale-95 shadow-lg shadow-charcoal/10"
          >
            Join Masterclass
          </button>
        </div>

        <button className="md:hidden text-charcoal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
