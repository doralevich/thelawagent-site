import type { Metadata } from "next";
import LegalDoc, { type LegalSection } from "../components/LegalDoc";
import { CONTACT_EMAIL, PARENT_SITE, SITE_NAME, pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Terms of Use",
    description: `Terms for using the ${SITE_NAME} website.`,
    path: "/terms",
  }),
  robots: { index: true, follow: true },
};

// TERMS FOR THIS WEBSITE, and deliberately nothing more.
//
// This site sells nothing directly: every CTA hands off to Apollo Claw, where the purchase, the
// account and the service relationship live. So these terms cover reading these pages, and say
// plainly that buying an agent is a separate agreement made there. They are NOT a substitute for
// a customer agreement, and the "What you are agreeing to" section says so rather than implying
// this page governs the product.
//
// The no-advice section carries more weight on THIS site than on any of the others, and is
// deliberately blunter as a result. Everywhere else the risk of an over-read is a customer
// mistaking marketing for a guarantee. Here it is somebody believing a piece of software is
// their lawyer: unauthorized practice of law, no attorney-client relationship, no privilege.
// So it says all three plainly and it says them early, and it mirrors the boundary already
// enforced inside the product itself (the handoff line and review authority collected at
// setup, and the NOT_ADVICE rule written into every legal skill in apolloclaw2).
//
// Not reviewed by a lawyer, and governing law is asserted from the business address rather than
// on advice. Have counsel read this before relying on it.
const EFFECTIVE = "September 6, 2026";

const SECTIONS: LegalSection[] = [
  {
    heading: "Who these terms are with",
    blocks: [
      {
        kind: "prose",
        text: `This website is operated by Apollo Claw AI Consulting ("Apollo Claw", "we", "us"), 69 Roslyn Road, Roslyn Heights, NY 11577. By using this site you agree to what follows. If you do not agree, please do not use the site.`,
      },
    ],
  },
  {
    heading: "What you are agreeing to",
    blocks: [
      {
        kind: "prose",
        text: `These terms cover this website only: reading these pages and following the links on them. They are not the agreement for the product.`,
      },
      {
        kind: "prose",
        text: `Building, buying, and using ${SITE_NAME} happens on Apollo Claw at ${PARENT_SITE}. That is a separate relationship, governed by the terms and the order you agree to there at the time of purchase, together with any written agreement signed with Apollo Claw. Nothing on this page changes those, and nothing on this page creates a contract to supply an agent.`,
      },
    ],
  },
  {
    heading: "What is on this site",
    blocks: [
      {
        kind: "prose",
        text: "The pages here describe what the agent does and who it is for. They are marketing and information, written in good faith and kept current as the product changes.",
      },
      {
        kind: "bullets",
        items: [
          "Descriptions of capability describe what the agent is built to do, not a guarantee of any particular result in your business.",
          "Any figures, timeframes, or example outcomes are illustrative. Results depend on your market, your data, your systems, and how you use the agent.",
          "Pricing and features shown here can change. The price that binds is the one shown at checkout on Apollo Claw.",
        ],
      },
    ],
  },
  {
    heading: "Not professional advice",
    blocks: [
      {
        kind: "prose",
        text: "Nothing on this site is legal advice. Apollo Claw is not a law firm, we do not practise law, and nothing here creates an attorney-client relationship with you. Reading these pages, contacting us, or building an agent does not make us your lawyers and does not make anything you send us privileged.",
      },
      {
        kind: "prose",
        text: "The agent itself is a drafting and analysis tool, not a licensed attorney. It does not give legal advice, it does not file anything with any court or agency, it does not sign anything, and it does not represent anyone. Its output is a first draft for a qualified person to review, and it is configured at setup with the line beyond which a licensed attorney must always take over. Whether a document is right for your situation, in your jurisdiction, is a question for a lawyer admitted there.",
      },
    ],
  },
  {
    heading: "What belongs to us",
    blocks: [
      {
        kind: "prose",
        text: `The content, design, wording, logo, and artwork on this site belong to Apollo Claw or its licensors. You are welcome to read it, quote it with attribution, and link to it. You may not copy the site or its artwork to present as your own, or use ${SITE_NAME} branding in a way that suggests we endorse or are affiliated with you.`,
      },
    ],
  },
  {
    heading: "Acceptable use",
    blocks: [
      {
        kind: "prose",
        text: "Please do not attempt to break, overload, or gain unauthorized access to this site or the systems behind it, scrape it in a way that degrades it for other people, or use it to mislead anyone about who you are or who we are.",
      },
    ],
  },
  {
    heading: "Links to other services",
    blocks: [
      {
        kind: "prose",
        text: `This site links out to Apollo Claw and to Cal.com for booking a call, and may link to other third parties. Those services are run by other people under their own terms and privacy policies, and we are not responsible for their content or their handling of your information.`,
      },
    ],
  },
  {
    heading: "No warranty, and limits on liability",
    blocks: [
      {
        kind: "prose",
        text: "This site is provided as it is. We work to keep it accurate and available, but we do not warrant that it will be uninterrupted, error free, or that everything on it is complete or current at every moment.",
      },
      {
        kind: "prose",
        text: "To the extent the law allows, Apollo Claw is not liable for indirect or consequential loss arising from your use of this website, including lost profits or lost business. Nothing here limits liability that cannot be limited by law, including for fraud or for death or personal injury caused by negligence. Liability for the product itself is dealt with in the agreement you enter at the time of purchase, not here.",
      },
    ],
  },
  {
    heading: "Governing law",
    blocks: [
      {
        kind: "prose",
        text: "These terms are governed by the laws of the State of New York, and the state and federal courts sitting in Nassau County, New York have jurisdiction over any dispute about this website.",
      },
    ],
  },
  {
    heading: "Changes, and how to reach us",
    blocks: [
      {
        kind: "prose",
        text: `We may update these terms as the site changes. The effective date above will tell you when they last changed. Questions about anything here: ${CONTACT_EMAIL}.`,
      },
    ],
  },
];

export default function Page() {
  return (
    <LegalDoc
      title="Terms of Use"
      effective={EFFECTIVE}
      intro="These terms cover this website. Buying and using the agent itself happens on Apollo Claw and is governed by the agreement you make there."
      sections={SECTIONS}
    />
  );
}
