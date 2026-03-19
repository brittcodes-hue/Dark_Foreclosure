// Route paths
export const ROUTE_PATHS = {
  HOME: '/',
  RESOURCES: '/foreclosure-resources',
  FAQ: '/faq',
} as const;

// Contact info
export const PHONE = '720.663.7346';
export const PHONE_HREF = 'tel:7206637346';
export const EMAIL_SUBMISSION = 'skyler@gmash.co';
export const REVIEWS_URL = 'https://gmash.co/Reviews';
export const DEBT_HELP_URL = 'https://gmash.co/foreclosuresupport';

// Trust stats
export const TRUST_STATS = [
  { icon: 'Home', label: 'Hundreds of Homes Helped' },
  { icon: 'Phone', label: 'Free Consultations' },
  { icon: 'Shield', label: 'Verified Resources' },
  { icon: 'Star', label: '5-Star Rated Service' },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "I was 3 months behind on my mortgage and had no idea what to do. End My Foreclosure connected me with resources that saved my home. I'm forever grateful.",
    name: 'Maria T.',
    location: 'Denver, CO',
  },
  {
    id: 2,
    quote:
      "The free consultation gave me clarity I desperately needed. Within weeks, I had a plan to reduce my debt and keep my family in our home.",
    name: 'James R.',
    location: 'Aurora, CO',
  },
  {
    id: 3,
    quote:
      "I thought I'd lost everything. The team here pointed me to HUD-approved counselors who negotiated with my lender. Now I'm back on track.",
    name: 'Sandra L.',
    location: 'Lakewood, CO',
  },
];

// FAQ data
export const FAQ_ITEMS = [
  {
    id: 1,
    question: 'What is foreclosure and how does it work in Colorado?',
    answer:
      'Foreclosure is the legal process by which a lender repossesses a property when a homeowner fails to make mortgage payments. Colorado primarily uses a non-judicial foreclosure process through the Public Trustee, which can take 110–125 days from the filing of a Notice of Election and Demand. Understanding this timeline is critical for taking timely action.',
    source: {
      label: 'Colorado DRE – Foreclosure Protection Act',
      url: 'https://dre.colorado.gov/division-notifications/understanding-the-colorado-foreclosure-protection-act-0',
    },
  },
  {
    id: 2,
    question: 'What should I do first if I am behind on my mortgage?',
    answer:
      'Contact your lender or loan servicer immediately. Lenders often have loss mitigation options such as forbearance, repayment plans, or loan modifications. Also reach out to a HUD-approved housing counselor for free guidance on your specific situation—early action gives you the most options.',
    source: {
      label: 'HUD – Avoiding Foreclosure',
      url: 'https://www.hud.gov/helping-americans/avoiding-foreclosure',
    },
  },
  {
    id: 3,
    question: 'What is a loan modification and can I qualify?',
    answer:
      'A loan modification permanently changes one or more terms of your mortgage, such as the interest rate, loan term, or principal balance, to make payments more manageable. Qualification depends on your financial hardship, loan type, and lender guidelines. A HUD-approved counselor can help you apply at no cost.',
    source: {
      label: 'CFPB – Resources to Help Avoid Foreclosure',
      url: 'https://www.consumerfinance.gov/about-us/blog/we-have-resources-help-avoid-foreclosure/',
    },
  },
  {
    id: 4,
    question: 'What is forbearance and how can it help me?',
    answer:
      'Forbearance is a temporary pause or reduction in your mortgage payments, agreed upon by you and your lender. It does not eliminate what you owe—you must repay the paused amounts—but it gives you breathing room during a financial hardship. After the forbearance period, you can often enter a repayment plan or request a loan modification.',
    source: {
      label: 'USA.gov – Avoid Foreclosure',
      url: 'https://www.usa.gov/avoid-foreclosure',
    },
  },
  {
    id: 5,
    question: 'What is the Colorado Foreclosure Hotline?',
    answer:
      'The Colorado Foreclosure Hotline (1-877-601-HOPE) connects homeowners in distress to free, HUD-approved housing counselors across the state. Counselors can review your financial situation, explain your options, and help you communicate with your lender—all at no cost to you.',
    source: {
      label: 'CHFA – Foreclosure Prevention',
      url: 'https://www.chfainfo.com/homeownership/foreclosure-prevention',
    },
  },
  {
    id: 6,
    question: 'Are HUD-approved housing counselors really free?',
    answer:
      'Yes. HUD-approved housing counseling agencies provide foreclosure prevention services at no cost to homeowners. They are funded through federal grants and can assist with reviewing your finances, negotiating with lenders, and creating a personalized action plan. Be cautious of anyone charging upfront fees for these services.',
    source: {
      label: 'HUD Exchange – Foreclosure Prevention Counseling',
      url: 'https://www.hudexchange.info/programs/housing-counseling/foreclosure-prevention/',
    },
  },
  {
    id: 7,
    question: 'What is a short sale and when does it make sense?',
    answer:
      "A short sale occurs when you sell your home for less than the amount owed on the mortgage, with lender approval. It may be a viable option if your home's value has declined and you cannot afford the payments. While it affects your credit, it is generally less damaging than a completed foreclosure.",
    source: {
      label: 'Nolo – Ten Steps to Prevent Foreclosure',
      url: 'https://www.nolo.com/legal-encyclopedia/ten-steps-you-can-take-prevent-foreclosure.html',
    },
  },
  {
    id: 8,
    question: 'What is a deed in lieu of foreclosure?',
    answer:
      'A deed in lieu of foreclosure means you voluntarily transfer ownership of your property to your lender in exchange for being released from your mortgage debt. It avoids the formal foreclosure process and may have less impact on your credit than a completed foreclosure, but lender approval is required.',
    source: {
      label: 'LawInfo – Tips for Avoiding Foreclosure',
      url: 'https://www.lawinfo.com/resources/foreclosure/ten-tips-for-avoiding-foreclosure.html',
    },
  },
  {
    id: 9,
    question: 'Can bankruptcy stop foreclosure?',
    answer:
      'Filing for bankruptcy triggers an "automatic stay" that temporarily halts foreclosure proceedings. Chapter 13 bankruptcy allows you to catch up on missed mortgage payments over 3–5 years while keeping your home. Chapter 7 may delay foreclosure but typically does not stop it permanently. Consult a bankruptcy attorney to understand your specific options.',
    source: {
      label: 'Nolo – Ten Steps to Prevent Foreclosure',
      url: 'https://www.nolo.com/legal-encyclopedia/ten-steps-you-can-take-prevent-foreclosure.html',
    },
  },
  {
    id: 10,
    question: 'What is the Colorado Foreclosure Protection Act?',
    answer:
      "Colorado's Foreclosure Protection Act (C.R.S. 6-1-1101) provides specific consumer protections for homeowners facing foreclosure, including the right to cancel certain contracts with foreclosure consultants within 5 business days and restrictions on what consultants may charge or promise. Know your rights before signing any agreement.",
    source: {
      label: 'Colorado DRE – Foreclosure Protection Act',
      url: 'https://dre.colorado.gov/division-notifications/understanding-the-colorado-foreclosure-protection-act-0',
    },
  },
  {
    id: 11,
    question: 'How long does foreclosure take in Colorado?',
    answer:
      "Colorado's non-judicial foreclosure process through the Public Trustee typically takes 110 to 125 days from the filing of a Notice of Election and Demand (NED). However, you may have additional time if you pursue loss mitigation options. Acting early - ideally before a NED is filed - gives you the most time and options.",
    source: {
      label: 'Colorado Housing Connects – Foreclosure Help',
      url: 'https://coloradohousingconnects.org/homeowners-i-need-help-avoiding-foreclosure/',
    },
  },
  {
    id: 12,
    question: 'What documents should I gather before calling a counselor?',
    answer:
      'Before meeting with a HUD-approved counselor, gather: recent mortgage statements, a list of all monthly income and expenses, recent bank statements, your most recent tax returns, a hardship letter explaining your situation, and any correspondence from your lender. Being prepared helps counselors provide more effective assistance.',
    source: {
      label: 'Denver Foreclosure Booklet (PDF)',
      url: 'https://denvergov.org/files/assets/public/v/1/housing-stability/documents/a.-foreclosure-booklet-english.pdf',
    },
  },
  {
    id: 13,
    question: 'How does foreclosure affect my credit score?',
    answer:
      'A completed foreclosure can lower your credit score by 100–160 points or more and stays on your credit report for 7 years. It can also make it difficult to obtain new credit, rent housing, or even certain employment. Taking proactive steps to avoid foreclosure—like a loan modification or short sale—generally has a less severe, shorter-lasting impact.',
    source: {
      label: 'CFPB – Resources to Help Avoid Foreclosure',
      url: 'https://www.consumerfinance.gov/about-us/blog/we-have-resources-help-avoid-foreclosure/',
    },
  },
  {
    id: 14,
    question: 'What are foreclosure rescue scams and how do I avoid them?',
    answer:
      "Foreclosure rescue scams prey on desperate homeowners. Red flags include: upfront fees for help, guarantees to stop foreclosure, requests to sign over your deed, or instructions not to contact your lender. Always work with HUD-approved counselors (who are free) and verify any consultant through Colorado's DRE before paying for services.",
    source: {
      label: 'CFPB – Avoid Foreclosure Resources',
      url: 'https://www.consumerfinance.gov/about-us/blog/we-have-resources-help-avoid-foreclosure/',
    },
  },
  {
    id: 15,
    question: 'What assistance is available through the Colorado Department of Housing?',
    answer:
      'The Colorado Department of Public Health and Environment (CDPHE) provides information on foreclosures, evictions, and legal help. Colorado also administers the Homeowner Assistance Fund (HAF), which may provide financial assistance to eligible homeowners for mortgage payments, taxes, insurance, and utilities.',
    source: {
      label: 'Colorado DOH – Foreclosures & Legal Help',
      url: 'https://doh.colorado.gov/foreclosures-evictions-and-legal-help',
    },
  },
  {
    id: 16,
    question: 'What is Colorado Housing Connects?',
    answer:
      'Colorado Housing Connects (1-844-926-6632) is a statewide housing resource hotline that connects homeowners and renters to local housing counseling agencies, legal aid, and emergency assistance programs. Their HUD-approved counselors can help you navigate foreclosure prevention options.',
    source: {
      label: 'Colorado Housing Connects',
      url: 'https://coloradohousingconnects.org/homeowners-i-need-help-avoiding-foreclosure/',
    },
  },
  {
    id: 17,
    question: 'Can the City of Aurora help with foreclosure prevention?',
    answer:
      'Yes. The City of Aurora offers free foreclosure prevention counseling through its Community Development Department, serving residents of the Denver metro area. Counselors can help you understand your options, prepare documents, and communicate with your lender.',
    source: {
      label: 'City of Aurora – Foreclosure Assistance',
      url: 'https://www.auroragov.org/residents/community_development/foreclosure_assistance',
    },
  },
  {
    id: 18,
    question: 'What is a reinstatement and can I use it to stop foreclosure?',
    answer:
      'Reinstatement means paying all overdue amounts—missed payments, late fees, and lender costs—in a lump sum to bring your loan current. In Colorado, you have the right to reinstate your loan up to 15 days before the scheduled foreclosure sale. If you can access funds through savings, family, or a personal loan, reinstatement stops the foreclosure immediately.',
    source: {
      label: 'Nolo – Ten Steps to Prevent Foreclosure',
      url: 'https://www.nolo.com/legal-encyclopedia/ten-steps-you-can-take-prevent-foreclosure.html',
    },
  },
  {
    id: 19,
    question: 'What is a repayment plan and is it an option for me?',
    answer:
      'A repayment plan allows you to catch up on missed payments by adding a portion of the overdue amount to your regular monthly payment over a set period (typically 3–12 months). It keeps you in your home and avoids foreclosure as long as you stay current going forward. Contact your loan servicer or a HUD counselor to discuss eligibility.',
    source: {
      label: 'HUD – Avoiding Foreclosure',
      url: 'https://www.hud.gov/helping-americans/avoiding-foreclosure',
    },
  },
  {
    id: 20,
    question: 'How can End My Foreclosure help me?',
    answer:
      'End My Foreclosure provides verified educational resources, connects you with HUD-approved counselors, and offers free consultations to help you understand your options. We help hundreds of Colorado homeowners navigate foreclosure prevention with dignity and support. Call us at 720.663.7346 or complete our contact form for a free consultation.',
    source: null,
  },
];

// Foreclosure resources
export const RESOURCE_CATEGORIES = [
  {
    title: 'Federal Government Resources',
    icon: 'Building',
    resources: [
      {
        title: 'USA.gov – Avoid Foreclosure',
        description: 'Overview of federal help, links to HUD housing counseling, and state Homeowner Assistance Fund programs.',
        url: 'https://www.usa.gov/avoid-foreclosure',
        badge: 'Federal',
      },
      {
        title: 'HUD – Avoiding Foreclosure',
        description: 'Official federal page on options like forbearance, loan modification, and how to find a free HUD-approved housing counselor.',
        url: 'https://www.hud.gov/helping-americans/avoiding-foreclosure',
        badge: 'Federal',
      },
      {
        title: 'HUD Exchange – Foreclosure Prevention Counseling',
        description: 'Details on what HUD-certified counselors do and links to additional homeowner resources.',
        url: 'https://www.hudexchange.info/programs/housing-counseling/foreclosure-prevention/',
        badge: 'Federal',
      },
      {
        title: 'CFPB – Resources to Help You Avoid Foreclosure',
        description: 'Federal guidance on working with your servicer, finding a counselor or lawyer, and avoiding scams.',
        url: 'https://www.consumerfinance.gov/about-us/blog/we-have-resources-help-avoid-foreclosure/',
        badge: 'Federal',
      },
    ],
  },
  {
    title: 'Legal Guidance & Education',
    icon: 'Scale',
    resources: [
      {
        title: 'Nolo – Ten Steps to Prevent Foreclosure',
        description: 'Practical step-by-step guide covering documents to gather, your rights, budgeting, mediation, and negotiation tips.',
        url: 'https://www.nolo.com/legal-encyclopedia/ten-steps-you-can-take-prevent-foreclosure.html',
        badge: 'Legal',
      },
      {
        title: 'LawInfo – 10 Tips for Avoiding Foreclosure',
        description: 'Plain-language tips on contacting your lender, loan modifications, and other foreclosure prevention options.',
        url: 'https://www.lawinfo.com/resources/foreclosure/ten-tips-for-avoiding-foreclosure.html',
        badge: 'Legal',
      },
    ],
  },
  {
    title: 'Colorado State Resources',
    icon: 'MapPin',
    resources: [
      {
        title: 'CHFA – Foreclosure Prevention',
        description: 'Connects Colorado homeowners with free HUD-approved foreclosure prevention counseling and the Colorado Foreclosure Hotline.',
        url: 'https://www.chfainfo.com/homeownership/foreclosure-prevention',
        badge: 'Colorado',
      },
      {
        title: 'Colorado Housing Connects – Foreclosure Help',
        description: 'Central hotline routing you to local, HUD-approved housing counselors. Call 1-844-926-6632.',
        url: 'https://coloradohousingconnects.org/homeowners-i-need-help-avoiding-foreclosure/',
        badge: 'Colorado',
      },
      {
        title: 'Colorado DRE – Foreclosure Protection Act',
        description: 'Know your rights under Colorado law, including consumer protections against foreclosure consultant fraud.',
        url: 'https://dre.colorado.gov/division-notifications/understanding-the-colorado-foreclosure-protection-act-0',
        badge: 'Colorado',
      },
      {
        title: 'Colorado DOH – Foreclosures, Evictions & Legal Help',
        description: 'State agency information on foreclosures, evictions, and accessing legal assistance in Colorado.',
        url: 'https://doh.colorado.gov/foreclosures-evictions-and-legal-help',
        badge: 'Colorado',
      },
    ],
  },
  {
    title: 'Denver & Local Resources',
    icon: 'Home',
    resources: [
      {
        title: 'City & County of Denver – Foreclosure Booklet (PDF)',
        description: 'Denver-specific booklet listing local HUD-approved counseling agencies and step-by-step guidance for homeowners.',
        url: 'https://denvergov.org/files/assets/public/v/1/housing-stability/documents/a.-foreclosure-booklet-english.pdf',
        badge: 'Local',
      },
      {
        title: 'City of Aurora – Foreclosure Prevention Counseling',
        description: 'Free counseling serving Denver metro residents, including negotiation help with lenders and program referrals.',
        url: 'https://www.auroragov.org/residents/community_development/foreclosure_assistance',
        badge: 'Local',
      },
    ],
  },
];
