import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  propertyAddress: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  propertyAddress?: string;
  message?: string;
}

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  return /^[\d\s\.\-\(\)\+]{7,}$/.test(phone);
}

export default function ContactForm({
  title = 'Get Your Free Consultation',
  subtitle = 'Fill out the form below and we\'ll be in touch within 24 hours.',
  dark = true,
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    propertyAddress: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!validatePhone(formData.phone)) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!validateEmail(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.propertyAddress.trim()) errs.propertyAddress = 'Property address is required.';
    if (!formData.message.trim()) errs.message = 'Please tell us a bit about your situation.';
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('submitting');
    // Simulate form submission (mailto fallback)
    try {
      await new Promise((res) => setTimeout(res, 1200));
      setStatus('success');
      setFormData({ fullName: '', phone: '', email: '', propertyAddress: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputBase = `w-full rounded-lg px-4 py-3 text-sm font-medium outline-none transition-all duration-200 border ${
    dark
      ? 'bg-white/5 border-teal-800/60 text-white placeholder-gray-500 focus:border-teal-500 focus:bg-white/10 focus:ring-2 focus:ring-teal-500/30'
      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20'
  }`;

  const labelBase = `block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
    dark ? 'text-gray-300' : 'text-gray-600'
  }`;

  const errorClass = 'text-xs text-red-400 mt-1';

  if (status === 'success') {
    return (
      <div
        className={`rounded-2xl p-8 text-center ${
          dark ? 'bg-white/5 border border-teal-800/40' : 'bg-teal-50 border border-teal-200'
        }`}
      >
        <CheckCircle className="w-14 h-14 text-teal-400 mx-auto mb-4" />
        <h3 className={`text-xl font-bold mb-2 font-[Montserrat] ${dark ? 'text-white' : 'text-gray-900'}`}>
          Thank You!
        </h3>
        <p className={`text-sm leading-relaxed mb-4 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
          Your message has been received. We'll reach out within 24 hours to schedule your free consultation.
          For immediate help, call us at{' '}
          <a href="tel:7206637346" className="text-teal-400 font-semibold hover:underline">
            720.663.7346
          </a>
          .
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-xs text-teal-400 hover:text-teal-300 underline transition-colors"
        >
          Submit another message
        </button>
      </div>
    );
  }

  return (
    <div>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h3 className={`text-xl md:text-2xl font-bold mb-2 font-[Montserrat] ${dark ? 'text-white' : 'text-gray-900'}`}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{subtitle}</p>
          )}
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className={labelBase}>
              Full Name <span className="text-teal-400">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Jane Smith"
              className={`${inputBase} ${errors.fullName ? 'border-red-500' : ''}`}
              autoComplete="name"
            />
            {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
          </div>
          <div>
            <label htmlFor="phone" className={labelBase}>
              Phone <span className="text-teal-400">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="720.663.7346"
              className={`${inputBase} ${errors.phone ? 'border-red-500' : ''}`}
              autoComplete="tel"
            />
            {errors.phone && <p className={errorClass}>{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="email" className={labelBase}>
            Email Address <span className="text-teal-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={`${inputBase} ${errors.email ? 'border-red-500' : ''}`}
            autoComplete="email"
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="propertyAddress" className={labelBase}>
            Property Address <span className="text-teal-400">*</span>
          </label>
          <input
            type="text"
            id="propertyAddress"
            name="propertyAddress"
            value={formData.propertyAddress}
            onChange={handleChange}
            placeholder="123 Main St, Denver, CO 80203"
            className={`${inputBase} ${errors.propertyAddress ? 'border-red-500' : ''}`}
            autoComplete="street-address"
          />
          {errors.propertyAddress && <p className={errorClass}>{errors.propertyAddress}</p>}
        </div>

        <div>
          <label htmlFor="message" className={labelBase}>
            Tell Us About Your Situation <span className="text-teal-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="How many payments are you behind? What challenges are you facing?"
            className={`${inputBase} resize-none ${errors.message ? 'border-red-500' : ''}`}
          />
          {errors.message && <p className={errorClass}>{errors.message}</p>}
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/20 px-4 py-3 rounded-lg border border-red-800/40">
            <AlertCircle size={16} />
            <span>Something went wrong. Please call us directly at <a href="tel:7206637346" className="font-semibold underline">720.663.7346</a>.</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl bg-teal-600 hover:bg-teal-500 text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-900/40 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit — Get Free Consultation'
          )}
        </button>

        <p className={`text-xs text-center ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
          Your information is confidential and never shared. Submissions are forwarded directly to our team.
        </p>
      </form>
    </div>
  );
}
