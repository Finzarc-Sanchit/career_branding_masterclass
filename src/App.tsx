
import React, { useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Users,
  Target,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  Menu,
  X,
  Star,
  Zap,
  Award,
  Calendar
} from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import PainPoints from './components/PainPoints';
import ProblemReframing from './components/ProblemReframing';
import Framework from './components/Framework';
import Transformation from './components/Transformation';
import LearningOutcomes from './components/LearningOutcomes';
import Qualification from './components/Qualification';
import AboutCoach from './components/AboutCoach';
import LeadGenerationForm from './components/LeadGenerationForm';
import CTAOffer from './components/CTAOffer';
import Footer from './components/Footer';
import { FormDialogProvider, useFormDialog } from './contexts/FormDialogContext';

function AppContent() {
  const { isOpen, closeDialog } = useFormDialog();

  // Simple scroll reveal effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <PainPoints />
        <ProblemReframing />
        <Framework />
        <Transformation />
        <LearningOutcomes />
        <Qualification />
        <AboutCoach />
        <CTAOffer />
      </main>
      <Footer />
      <LeadGenerationForm isOpen={isOpen} onClose={closeDialog} />
    </div>
  );
}

function App() {
  return (
    <FormDialogProvider>
      <AppContent />
    </FormDialogProvider>
  );
}

export default App;
