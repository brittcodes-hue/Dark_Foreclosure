import { useState } from 'react';
import { ChevronDown, ExternalLink, Phone, MessageSquare } from 'lucide-react';
import { IMAGES } from '@/assets/images';
import { PHONE, PHONE_HREF, FAQ_ITEMS } from '@/lib/index';
import ContactForm from '@/components/ContactForm';

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[50vh] md:min-h-[55vh] flex items-center justify-center text-center overflow-hidden"
        aria-label="FAQ page hero — Frequently Asked Questions about foreclosure"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.FAQ_HERO_1}
            alt="Professional housing counselors meeting to help homeowners with foreclosure prevention questions and answers"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f766e]/25 via-transparent to-[#28282b]/60" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-600/30 border border-teal-500/40 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-5">
            <MessageSquare size={13} />
            Common Questions
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-[Montserrat] leading-tight mb-4">
            Frequently Asked <span className="text-teal-400">Questions</span>
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed">
            Answers to the most common questions about foreclosure prevention, your rights as a
            Colorado homeowner, and how to get the help you need.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="bg-[#28282b] py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-[Montserrat] mb-2">
              Your Questions <span className="text-teal-400">Answered</span>
            </h2>
            <p className="text-gray-400 text-sm">
              {FAQ_ITEMS.length} questions about foreclosure prevention, debt relief, and Colorado homeowner rights.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={item.id}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  openId === item.id
                    ? 'border-teal-600/50 bg-[#1e1e21] shadow-lg shadow-teal-900/20'
                    : 'border-teal-900/30 bg-[#1e1e21]/60 hover:border-teal-800/50'
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-start gap-4 px-5 py-4 text-left transition-colors"
                  aria-expanded={openId === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-900/60 border border-teal-700/30 text-teal-400 text-xs font-bold flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  <span className="flex-1 text-sm font-semibold text-white leading-snug pr-2">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-teal-500 transition-transform duration-200 mt-0.5 ${
                      openId === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-5 pl-[3.75rem]">
                    <p className="text-sm text-gray-300 leading-relaxed mb-3">
                      {item.answer}
                    </p>
                    {item.source && (
                      <a
                        href={item.source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors group"
                        aria-label={`Source: ${item.source.label}`}
                      >
                        <ExternalLink size={12} className="group-hover:scale-110 transition-transform" />
                        Source: {item.source.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Have More Questions CTA */}
      <section
        className="relative py-14 md:py-18 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f4c45 0%, #0d3d38 60%, #28282b 100%)' }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="w-10 h-10 text-teal-400 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-[Montserrat] mb-3">
            Don't See Your Question?
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8">
            Every foreclosure situation is unique. Our team is available to provide always free consultations to
            answer your specific questions about debt relief, foreclosure prevention, and your
            options as a Colorado homeowner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-teal-600 hover:bg-teal-500 text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <Phone size={16} />
              Call {PHONE}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border-2 border-white/40 text-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <MessageSquare size={16} />
              Send a Message
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#28282b] py-16 md:py-20" id="contact">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-[Montserrat] mb-2">
              Want to Chat About It?
            </h2>
            <p className="text-gray-400 text-sm">
              Submit your question or request an always free consultation. We respond within 24 hours.
            </p>
          </div>
          <div className="bg-[#1e1e21] border border-teal-900/30 rounded-2xl p-6 md:p-8">
            <ContactForm dark />
          </div>
        </div>
      </section>
    </>
  );
}
