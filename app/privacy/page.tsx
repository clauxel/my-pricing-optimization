import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Pricing Optimization.",
  alternates: { canonical: "https://pricing-optimization.space/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#071019] py-16 md:py-20">
      <article className="mx-auto max-w-3xl px-4 text-slate-300 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Privacy</p>
        <h1 className="mt-4 text-4xl font-black text-white">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-500">Effective date: May 11, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7">
          <section>
            <h2 className="text-xl font-black text-white">1. Scope</h2>
            <p className="mt-3">
              This policy explains how Pricing Optimization collects, uses, and protects information when visitors use
              pricing-optimization.space, request checkout, or connect business data for pricing analysis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">2. Information We Process</h2>
            <p className="mt-3">
              We may process contact details, account information, product usage, payment status, first-party analytics,
              competitor URLs submitted by users, and revenue metrics such as MRR, ARPU, churn, upgrades, downgrades, and
              plan history. Payment details are processed by Creem and are not stored by us as full card numbers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">3. How Information Is Used</h2>
            <p className="mt-3">
              Information is used to provide the service, create pricing recommendations, operate checkout, prevent
              abuse, improve conversion and product quality, respond to support requests, comply with law, and enforce
              agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">4. Sharing</h2>
            <p className="mt-3">
              We share information only with service providers needed to operate the site, payments, hosting, analytics,
              security, and support, or when required by law. We do not sell personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">5. Security and Retention</h2>
            <p className="mt-3">
              We use reasonable technical and organizational safeguards. No internet service can be guaranteed perfectly
              secure. We retain information only as long as needed for service, legal, security, and business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">6. Your Choices</h2>
            <p className="mt-3">
              You may request access, correction, deletion, or export where applicable by contacting
              support@aigeamy.com. Some information may be retained when required for security, billing, dispute
              resolution, or legal compliance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">7. Contact</h2>
            <p className="mt-3">Questions about privacy can be sent to support@aigeamy.com.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
