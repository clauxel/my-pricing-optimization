import Link from "next/link";
import PricingHero from "@/components/PricingHero";
import PricingSection from "@/components/PricingSection";

const capabilities = [
  [
    "Competitor pricing scan",
    "Input competitor websites and let the AI extract plan names, price points, packaging limits, annual discounts, and feature gates.",
  ],
  [
    "Price elasticity analysis",
    "Use churn, upgrades, downgrades, usage, and discount history to estimate where price lifts create revenue instead of avoidable churn.",
  ],
  [
    "A/B pricing framework",
    "Show different pricing pages to different visitor segments and keep a clean read on signup, activation, annual selection, and refunds.",
  ],
  [
    "Recommendation report",
    "Get a decision-ready price range by segment with executive notes, risk flags, and the next experiment to run.",
  ],
  [
    "Stripe data connection",
    "Pull MRR, ARPU, churn, plan history, and annual billing data so pricing decisions start from real revenue behavior.",
  ],
  [
    "AI pricing optimization",
    "Blend market anchors with customer behavior so the team can move from opinions to testable price changes.",
  ],
];

const workflow = [
  ["Connect", "Stripe data and competitor URLs create the first revenue map."],
  ["Model", "Machine learning estimates willingness to pay and churn risk by segment."],
  ["Decide", "The report recommends price ranges, packaging moves, and guardrails."],
  ["Test", "A/B pricing experiments validate the move before broad rollout."],
];

const testimonials = [
  [
    "We had been debating a price increase for three quarters. The report made the first test obvious and kept finance comfortable.",
    "Maya Chen",
    "VP Growth, Series B SaaS",
  ],
  [
    "The competitor scan alone saved days, but the real value was seeing which segments could tolerate a higher annual price.",
    "Evan Brooks",
    "Founder, DevTools SaaS",
  ],
  [
    "Sales stopped arguing from anecdotes. We had a pricing range, a rollout plan, and a rollback rule.",
    "Priya Nair",
    "RevOps Lead, B2B Platform",
  ],
];

const faq = [
  [
    "Is this for SaaS only?",
    "The product is built first for B2B SaaS because Stripe, recurring revenue, churn, upgrades, and plan packaging give the model clean pricing signals.",
  ],
  [
    "Does it automatically change my prices?",
    "No. Pricing Optimization recommends a price range and test plan. Your team controls which page, segment, and plan changes go live.",
  ],
  [
    "Why annual billing by default?",
    "Annual pricing reduces monthly churn noise, improves cash collection, and makes the economics of a pricing test easier to read.",
  ],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pricing Optimization",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://pricing-optimization.space",
  description:
    "AI pricing optimization software for B2B SaaS competitor scans, price elasticity analysis, Stripe metrics, A/B tests, and pricing recommendation reports.",
  offers: [
    { "@type": "Offer", name: "Single Product", price: "299", priceCurrency: "USD" },
    { "@type": "Offer", name: "Multi Product", price: "699", priceCurrency: "USD" },
  ],
};

export default function HomePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <PricingHero />

      <section id="model" className="border-t border-white/10 bg-[#091622] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lime-200">Revenue model</p>
              <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
                Stop pricing from the loudest anecdote in the room
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-400">
                The workflow gives growth, finance, product, and sales the same evidence: what competitors charge, what
                customers tolerate, and which price move has the best upside-risk balance.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {capabilities.map(([title, description]) => (
                <article key={title} className="rounded-lg border border-white/10 bg-[#071019] p-6">
                  <div className="mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r from-cyan-300 via-lime-300 to-amber-300" />
                  <h3 className="text-base font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#071019] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Workflow</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
              From raw billing data to a live pricing test
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {workflow.map(([title, text], index) => (
              <article key={title} className="rounded-lg border border-white/10 bg-[#091622] p-6">
                <div className="mb-5 grid h-10 w-10 place-items-center rounded-md bg-cyan-300 text-sm font-black text-slate-950">
                  {index + 1}
                </div>
                <h3 className="text-lg font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#091622] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(9,22,34,0.96)_52%,rgba(250,204,21,0.08))] p-8 md:p-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lime-200">Decision confidence</p>
              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                A pricing report that tells the team what to do next
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Each report gives a recommended range, segment logic, revenue sensitivity, competitor context, and the
                smallest test that can validate the move.
              </p>
              <Link
                href="/pricing-optimization-tools"
                className="mt-7 inline-flex rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white hover:border-cyan-200 hover:bg-white/5"
              >
                Compare tool workflow
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["$299/mo", "Single-product pricing engine"],
                ["$699/mo", "Multi-product default plan"],
                ["50% off", "Annual billing selected first"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-lg border border-white/10 bg-black/20 p-5">
                  <div className="text-3xl font-black text-white">{value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PricingSection />

      <section className="border-t border-white/10 bg-[#091622] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Revenue teams</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
              Built for the pricing conversation that actually happens
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map(([quote, name, role]) => (
              <article key={name} className="rounded-lg border border-white/10 bg-[#071019] p-7">
                <div className="mb-5 text-amber-300" aria-label="5 out of 5 rating">
                  *****
                </div>
                <p className="text-sm leading-7 text-slate-300">&ldquo;{quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="text-sm font-bold text-white">{name}</p>
                  <p className="text-xs text-slate-500">{role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#071019] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black text-white">Questions before the first pricing test</h2>
          </div>
          <div className="space-y-4">
            {faq.map(([question, answer]) => (
              <article key={question} className="rounded-lg border border-white/10 bg-[#091622] p-6">
                <h3 className="mb-2 text-sm font-bold text-white">{question}</h3>
                <p className="text-sm leading-6 text-slate-400">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
