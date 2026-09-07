// The four audience pages. Same shape, different argument.
//
// The split is WHO THE AGENT WORKS FOR, not what kind of law it reads, because that is the
// distinction that changes the product. A firm's agent writes for clients and bills its time; an
// in-house agent writes for colleagues and has no billable hour to protect; a business with no
// lawyer needs it to be conspicuously careful about where it stops; and a contracts team is
// running a queue rather than a practice. Practice area matters too, but it is configured during
// setup rather than sold on separate pages - a patent prosecutor and a PI firm both land here.

export type Audience = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  problem: { heading: string; body: string[] };
  benefits: { title: string; body: string }[];
  closing: { heading: string; body: string };
};

export const AUDIENCE_PAGES: Audience[] = [
  {
    slug: "for-law-firms",
    label: "For Law Firms",
    eyebrow: "For Law Firms",
    title: "Your Associates Are Producing Boilerplate.",
    intro:
      "The work that requires a licence is the work worth billing. The Law Agent takes the first pass at everything that does not, so the people who went to law school stop retyping documents they have produced a hundred times.",
    metaTitle: "AI for Law Firms | Contract Drafting and Review",
    metaDescription:
      "A private AI agent for law firms. Drafts from your own templates, redlines against your standard positions, and tracks every deadline, so attorneys spend their time on judgment instead of production.",
    keywords: [
      "AI for law firms",
      "legal AI drafting",
      "contract review automation",
      "AI paralegal",
      "law firm automation software",
    ],
    problem: {
      heading: "The Bottleneck Is Production, Not Judgment",
      body: [
        "A partner's value is in knowing which fight is worth having. An associate's value is supposed to be in learning that. Neither is served by a third year producing the same NDA for the ninth time this quarter because it is faster than explaining the template to someone else.",
        "The routine documents still have to be right, and they still have to go out. So they get done by expensive people at the end of long days, which is where the mistakes come from and why the interesting work always slips.",
      ],
    },
    benefits: [
      {
        title: "First Drafts in Your Own Language",
        body: "Documents drafted from your template library and your standard positions, not from a generic form that somebody then has to reverse-engineer back into house style.",
      },
      {
        title: "Redlines That Rank the Issues",
        body: "Incoming paper read against your playbook, with the three things that matter at the top instead of forty variances sorted by page number.",
      },
      {
        title: "Deadlines That Chase Themselves",
        body: "Every date in every matter tracked, with the date to act rather than the date it expires, and the usual failure points in your process flagged early.",
      },
      {
        title: "Intake That Asks the Right Questions",
        body: "New work scoped on arrival, with the conflicts question raised and the ambiguous scope flagged before anybody has spent an hour on it.",
      },
      {
        title: "Configured for Your Practice",
        body: "Setup asks what you actually do and then asks about each area specifically. Prosecution is not enforcement, and plaintiff-side is not defense.",
      },
      {
        title: "The Handoff Line Is Yours",
        body: "You say what an attorney must always touch. The agent drafts up to it and stops. That is enforced, not encouraged.",
      },
    ],
    closing: {
      heading: "Keep the Judgment. Hand Over the Production.",
      body: "The agent does not practise law and is built not to. It gets your people to a reviewable draft faster, which is the part of the day nobody went to law school for.",
    },
  },
  {
    slug: "for-in-house",
    label: "For In-House Teams",
    eyebrow: "For In-House Legal Teams",
    title: "You Are Two People and the Whole Company Is a Client.",
    intro:
      "Sales wants the MSA back today. Procurement signed something last year nobody can find. The Law Agent handles the volume so the legal function is not the thing everyone waits on.",
    metaTitle: "AI for In-House Legal Teams | Contract Review and Tracking",
    metaDescription:
      "A private AI agent for in-house counsel. Reviews incoming contracts against your positions, summarizes agreements for the business, and tracks every renewal and obligation.",
    keywords: [
      "AI for in-house counsel",
      "legal operations AI",
      "contract review software",
      "in-house legal automation",
      "AI contract management",
    ],
    problem: {
      heading: "The Queue Is the Job, and the Queue Never Empties",
      body: [
        "In-house legal is measured on being unblocked, not on billable hours. Every day the MSA sits with you is a day the deal does not close, and everyone in the building knows exactly whose desk it is on.",
        "So the department becomes a queue. The strategic work - the policy nobody has written, the supplier terms nobody has renegotiated since 2021, the renewal calendar nobody maintains - waits for a quiet week that does not arrive.",
      ],
    },
    benefits: [
      {
        title: "The Queue Moves Without You",
        body: "Routine agreements come back reviewed and redlined against your positions. You spend your attention on the ones that are actually unusual.",
      },
      {
        title: "The Business Gets a Straight Answer",
        body: "Plain-English summaries written for the person who has to decide, not for another lawyer. What we are agreeing to, what it costs, what we are risking.",
      },
      {
        title: "Nothing Auto-Renews by Accident",
        body: "Notice windows tracked across every agreement, surfaced 90 days out. Auto-renewal is the most expensive clause in commercial contracting and nobody has ever missed one deliberately.",
      },
      {
        title: "One Set of Positions, Actually Used",
        body: "Your playbook applied consistently, so the answer does not depend on who reviewed it or how late in the week it arrived.",
      },
      {
        title: "You Stop Being the Bottleneck",
        body: "The parts of the queue that never needed you stop reaching you, and the parts that do arrive already summarized.",
      },
      {
        title: "Privilege Handled as a Rule",
        body: "You set the confidentiality rules at setup. Matter content does not get summarized into shared channels because it was convenient.",
      },
    ],
    closing: {
      heading: "Be the Team That Unblocks, Not the One That Holds Things Up",
      body: "The volume is not going down and the headcount is not going up. This is the part of the workload that does not need a lawyer to produce, only a lawyer to approve.",
    },
  },
  {
    slug: "for-businesses",
    label: "For Businesses Without Counsel",
    eyebrow: "For Businesses With No Lawyer on Staff",
    title: "You Signed It Because You Needed the Deal.",
    intro:
      "Most companies sign contracts they have not fully read, because the alternative is paying someone $600 an hour to read a mutual NDA. The Law Agent gives you a straight answer about what is in the document, and tells you when to actually call a lawyer.",
    metaTitle: "AI Contract Review for Small Business | The Law Agent",
    metaDescription:
      "A private AI agent for businesses with no lawyer on staff. Explains contracts in plain English, flags the terms that matter, tracks renewals, and says clearly when you need real counsel.",
    keywords: [
      "AI contract review for small business",
      "understand a contract without a lawyer",
      "small business legal AI",
      "contract summary tool",
      "AI legal assistant for business owners",
    ],
    problem: {
      heading: "The Choice Is Usually Between Expensive and Blind",
      body: [
        "A forty-page vendor agreement lands on a Thursday and the deal is supposed to close Monday. Sending it to outside counsel costs more than the contract is worth and takes longer than you have. So it gets skimmed and signed.",
        "The terms that hurt are rarely the ones anyone skims for. Automatic renewal, uncapped indemnity, a notice period measured from a date nobody diarised. None of them look like anything on a first read, and all of them are found later.",
      ],
    },
    benefits: [
      {
        title: "Know What You Are Signing",
        body: "A plain-English summary before you sign: your obligations, their obligations, what it costs, how it ends, and what survives after.",
      },
      {
        title: "The Three Things Worth Noticing",
        body: "Named as risks in your own terms, without pretending a summary is advice. Uncapped exposure and anything automatic come first.",
      },
      {
        title: "It Tells You When to Call a Lawyer",
        body: "This is the point. It is built to say clearly when something is beyond it, rather than producing a confident answer that costs you later.",
      },
      {
        title: "Renewals Stop Sneaking Up",
        body: "Every notice window tracked, surfaced with the date you need to act on it, not the date it closes.",
      },
      {
        title: "Standard Documents, Drafted",
        body: "The routine paper you keep paying for: NDAs, service terms, contractor agreements, privacy policies, ready for counsel to check.",
      },
      {
        title: "It Never Pretends to Be Your Lawyer",
        body: "It drafts and it explains. It does not advise, it does not file, and it does not tell you that you would win.",
      },
    ],
    closing: {
      heading: "Read Everything. Sign Knowingly.",
      body: "You still need a lawyer for the things that need a lawyer. This is for the eighty percent where the real risk was that nobody read it at all.",
    },
  },
  {
    slug: "for-contracts-teams",
    label: "For Contracts & Compliance",
    eyebrow: "For Contracts and Compliance Teams",
    title: "The Paper Arrives Faster Than Anyone Can Read It.",
    intro:
      "Volume is the whole problem. The Law Agent takes the first pass on every incoming agreement against your playbook, so the exceptions reach a person and the routine does not.",
    metaTitle: "AI for Contracts and Compliance Teams | Contract Review at Volume",
    metaDescription:
      "A private AI agent for contracts and compliance teams. First-pass review at volume against your own playbook, consistent positions, and obligation tracking across every agreement.",
    keywords: [
      "contract review automation",
      "AI for compliance teams",
      "contract lifecycle AI",
      "obligation tracking software",
      "AI first-pass contract review",
    ],
    problem: {
      heading: "Consistency Is the Thing That Breaks First",
      body: [
        "At ten agreements a month the playbook holds. At two hundred it does not, and the same clause gets accepted on Tuesday and fought on Thursday depending on who had the queue and how close it was to quarter end.",
        "Nobody notices while it is happening. It shows up a year later as a portfolio nobody can characterise: obligations in different shapes, positions that contradict each other, and no way to answer what the company actually agreed to without opening every file.",
      ],
    },
    benefits: [
      {
        title: "Every Document Gets the Same First Pass",
        body: "The playbook applied identically at volume, regardless of who is on the queue or what day it is.",
      },
      {
        title: "Exceptions Rise, Routine Does Not",
        body: "Anything off-market is flagged and ranked by consequence. Everything within your positions moves without consuming a reviewer.",
      },
      {
        title: "Obligations Extracted, Not Remembered",
        body: "Dates, notice windows, caps and anything automatic pulled out of the documents themselves rather than into a spreadsheet somebody has to maintain.",
      },
      {
        title: "The Portfolio Becomes Answerable",
        body: "What did we agree to, and where, stops requiring somebody to open every file.",
      },
      {
        title: "Escalation Has a Rule",
        body: "You define what must reach a lawyer. The agent drafts to that line and stops, which is what makes the volume safe rather than merely fast.",
      },
      {
        title: "The Backlog Stops Growing",
        body: "First-pass throughput stops being a function of headcount, which is the only version of this problem that ever gets solved.",
      },
    ],
    closing: {
      heading: "Volume Without Drift",
      body: "The reason to automate the first pass is not speed. It is that a hundred documents reviewed the same way is worth more than a hundred reviewed well by six different people.",
    },
  },
];

/** One page by slug. Returns undefined for a slug that is not an audience, which is what lets
 *  each page file assert with `!` and fail loudly at build time rather than rendering blank. */
export function getAudience(slug: string): Audience | undefined {
  return AUDIENCE_PAGES.find((a) => a.slug === slug);
}
