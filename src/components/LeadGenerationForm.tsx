
import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

interface LeadGenerationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadGenerationForm: React.FC<LeadGenerationFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    yearsOfExperience: '',
    challenges: [] as string[]
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const challenges = [
    "Same role for years",
    "No clear growth path",
    "Not sure what's blocking your promotion",
    "Managers don't see your potential",
    "Feeling invisible in your company",
    "No salary growth despite years of loyalty",
    "Fear of layoffs / AI / being replaced",
    "Can't give family the lifestyle you want",
    "Lost confidence over time"
  ];

  const yearsOptions = ['0-2 years', '3-5 years', '6-10 years', '11-15 years', '16+ years'];

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.yearsOfExperience) {
      newErrors.yearsOfExperience = 'Years of experience is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Check if form is valid
  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.phone.trim() !== '' &&
      /^[0-9]{10}$/.test(formData.phone.replace(/\D/g, '')) &&
      formData.yearsOfExperience !== ''
    );
  };

  const handleCheckboxChange = (challenge: string) => {
    setFormData(prev => ({
      ...prev,
      challenges: prev.challenges.includes(challenge)
        ? prev.challenges.filter(c => c !== challenge)
        : [...prev.challenges, challenge]
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handlePhoneChange = (value: string) => {
    // Only allow numbers
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 10) {
      handleInputChange('phone', numbers);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log('Form submitted:', formData);
      // You can add API call here
      // Reset form and close dialog
      setFormData({
        name: '',
        email: '',
        phone: '',
        yearsOfExperience: '',
        challenges: []
      });
      setErrors({});
      onClose();
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative bg-white rounded-[3.5rem] shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-charcoal/10 hover:bg-charcoal/20 flex items-center justify-center transition-all z-10"
        >
          <X className="w-5 h-5 text-charcoal" />
        </button>

        <div className="p-8 md:p-12 flex flex-col flex-1 overflow-y-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Get Your Free Assessment</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-4 mb-4 leading-tight">
              Do You Also Feel These Challenges in Your Career Growth?
            </h2>
            <p className="text-base text-body leading-relaxed">
              If you're facing these struggles, check the boxes that apply to you!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 flex flex-col flex-1">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-charcoal mb-2 uppercase tracking-wider">
                  Your Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all text-charcoal font-medium ${errors.name ? 'border-red-400' : 'border-charcoal/10 focus:border-accent'
                    }`}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-charcoal mb-2 uppercase tracking-wider">
                  Your Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all text-charcoal font-medium ${errors.email ? 'border-red-400' : 'border-charcoal/10 focus:border-accent'
                    }`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Contact and Experience */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-charcoal mb-2 uppercase tracking-wider">
                  Phone Number <span className="text-accent">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all text-charcoal font-medium ${errors.phone ? 'border-red-400' : 'border-charcoal/10 focus:border-accent'
                    }`}
                  placeholder="10-digit phone number"
                  maxLength={10}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="yearsOfExperience" className="block text-xs font-bold text-charcoal mb-2 uppercase tracking-wider">
                  Years of Experience <span className="text-accent">*</span>
                </label>
                <select
                  id="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={(e) => handleInputChange('yearsOfExperience', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all text-charcoal font-medium ${errors.yearsOfExperience ? 'border-red-400' : 'border-charcoal/10 focus:border-accent'
                    }`}
                >
                  <option value="">Select experience</option>
                  {yearsOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.yearsOfExperience && <p className="text-red-500 text-xs mt-1">{errors.yearsOfExperience}</p>}
              </div>
            </div>

            {/* Challenges Checklist */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-charcoal mb-3 uppercase tracking-wider">
                Select Your Challenges (Optional)
              </label>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-64 overflow-y-auto">
                {challenges.map((challenge, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={formData.challenges.includes(challenge)}
                      onChange={() => handleCheckboxChange(challenge)}
                      className="w-5 h-5 rounded border-2 border-charcoal/30 text-accent focus:ring-2 focus:ring-accent focus:ring-offset-2 cursor-pointer flex-shrink-0"
                    />
                    <span className="text-charcoal font-medium leading-relaxed group-hover:text-charcoal/80 transition-colors text-sm">
                      {challenge}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 mt-auto">
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`group w-full px-8 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all ${isFormValid()
                  ? 'bg-charcoal text-white hover:bg-charcoal/90 hover:shadow-2xl hover:shadow-charcoal/20 active:scale-95'
                  : 'bg-charcoal/30 text-charcoal/50 cursor-not-allowed'
                  }`}
                style={isFormValid() ? { backgroundColor: '#1F1F1F' } : { backgroundColor: 'rgba(31, 31, 31, 0.3)' }}
              >
                Get My Free Career Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-charcoal/60 text-xs mt-3">
                We respect your privacy. Your information will never be shared.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadGenerationForm;
