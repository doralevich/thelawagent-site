// Content shared across pages. The home page shows a subset; /how-it-works and /faq
// show the whole thing. Keeping it here means the two never drift apart.
//
// The capability and FAQ copy tracks what apolloclaw.ai/ai-agents/legal already says, on
// purpose: the same product should not describe itself two different ways depending on which
// domain somebody landed on.

export const CAPABILITIES = [
  {
    title: "Drafting From Your Templates",
    body: "First versions drafted from your own template library and standard positions, so a new NDA or MSA starts from your language rather than a blank page.",
  },
  {
    title: "Redlining the Other Side's Paper",
    body: "Incoming agreements read against your playbook, with the off-market terms flagged and a redline drafted before it reaches your desk.",
  },
  {
    title: "Plain-English Summaries",
    body: "Any document summarized in language a business owner can follow: what each side is agreeing to, what it costs, and what they are risking.",
  },
  {
    title: "Dates, Renewals and Notice Windows",
    body: "Every deadline tracked across every agreement, with the date you need to act rather than the date it expires. Nothing lapses or renews by surprise.",
  },
  {
    title: "Research Memos",
    body: "A question answered conclusion first, with what it turns on and how settled the authority is. Nothing cited that was not read.",
  },
  {
    title: "Your Clause Library, Reused",
    body: "Approved clauses and templates kept in one place and actually reused, so everyone drafts from the same current language instead of the last deal they can find.",
  },
];

export const PROCESS = [
  {
    phase: "15 min",
    num: "01",
    title: "You Load Your Playbook",
    body: "Your templates, your standard positions, and the terms you hold firm on. Connect the tools your documents already live in, and set the line an attorney must always cross before anything moves. That is the questionnaire, and your agent is built from it and running in about fifteen minutes.",
  },
  {
    phase: "Week 1",
    num: "02",
    title: "Your Agent Goes to Work",
    body: "First drafts come back in your language. Incoming contracts arrive summarized and redlined against your playbook. Renewal dates start showing up before they matter instead of after.",
  },
  {
    phase: "Month 1+",
    num: "03",
    title: "It Learns Your Positions",
    body: "The agent picks up your preferred phrasing and the terms you always push back on. Routine agreements start moving in hours instead of sitting in an inbox for a week.",
  },
];

export const TESTIMONIALS = [
  {
    industry: "Professional Services",
    quote:
      "Every NDA used to start from scratch and then sit in my inbox for days. Now the agent drafts it from our template the moment we need one, and I review instead of retype. Turnaround went from a week to the same afternoon.",
    name: "General Counsel",
    detail: "Professional services firm, 140 staff",
  },
  {
    industry: "SaaS",
    quote:
      "We sign a lot of vendor and customer agreements and I could never keep the renewals straight. The Law Agent tracks every obligation and notice window and tells me before anything auto-renews. That alone paid for it.",
    name: "COO",
    detail: "B2B software company, Series B",
  },
  {
    industry: "Commercial Real Estate",
    quote:
      "It reads an incoming lease and hands me a plain-English summary plus a redline against our standard positions. I still make the calls, but I am starting from something instead of a fifty-page PDF.",
    name: "Principal",
    detail: "Commercial property group",
  },
  {
    industry: "Law Firm",
    quote:
      "For routine, low-risk documents it drafts the first pass and flags anything unusual for an attorney to look at. Our associates spend their time on the judgment calls instead of producing boilerplate.",
    name: "Managing Partner",
    detail: "Business law firm, 11 attorneys",
  },
  {
    industry: "Manufacturing",
    quote:
      "Our supply agreements all have different notice periods and I was tracking them in a spreadsheet nobody updated. The agent pulls the dates out of the documents themselves. We stopped renewing things we meant to cancel.",
    name: "Head of Procurement",
    detail: "Industrial manufacturer, $60M revenue",
  },
  {
    industry: "Healthcare",
    quote:
      "We have a compliance layer on everything and no lawyer in the building. Having something that summarizes an agreement honestly, flags what it cannot answer, and tells us when to call counsel has changed how quickly we can move.",
    name: "Director of Operations",
    detail: "Multi-site medical group",
  },
];

export const FAQS = [
  {
    q: "Is the Law Agent a substitute for a lawyer?",
    a: "No, and it is built not to be. It drafts, reviews, summarizes and tracks. A licensed attorney decides. During setup you tell it exactly where a person must always take over, and that line is enforced rather than suggested.",
  },
  {
    q: "What tools does it work with?",
    a: "It works where your documents already live: Microsoft Word, Google Docs, DocuSign, common CLM platforms, and your file storage in SharePoint, OneDrive, Google Drive, or Box. Every engagement is scoped individually.",
  },
  {
    q: "Can it draft from our own templates and playbook?",
    a: "Yes, and it should. The agent works from your template library and standard positions, so first drafts and redlines start from your language rather than a generic form. A clause you have negotiated a hundred times carries knowledge a fresh draft cannot reconstruct.",
  },
  {
    q: "How does it handle privilege and confidentiality?",
    a: "We use least-privilege access throughout and honor the confidentiality rules you set, including keeping privileged material off shared systems. Your data does not pass through servers we do not control.",
  },
  {
    q: "Will it invent case law?",
    a: "It is instructed never to produce a citation it did not read, and to mark anything it could not verify as unverified. That failure has happened to real firms in front of real judges, so it is written into the agent's own instructions rather than left to chance. You should still check citations, exactly as you would an associate's.",
  },
  {
    q: "How long does it take to get up and running?",
    a: "About fifteen minutes. The questionnaire is the configuration: your templates, your standard positions, and what it drafts, reviews and escalates. Your agent is built from it and running as soon as you connect your tools. Hands-on onboarding and 30 days of training are available as an add-on, and come with every custom deployment.",
  },
  {
    q: "Does it work for our practice area?",
    a: "Setup asks which areas you actually work in and then asks about each one specifically: litigation is not corporate, patent prosecution is not trademark enforcement, and plaintiff-side is not defense. The agent is configured for the practice you have rather than for law in general.",
  },
  {
    q: "What does it cost?",
    a: "You can build your agent online and see the price before you pay anything. For a deployment scoped to your systems, document volume and how much you want the agent to own, book a consultation and we will give you a number.",
  },
];
