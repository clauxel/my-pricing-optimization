import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Pricing Optimization.",
  alternates: { canonical: "https://pricing-optimization.space/terms" },
};

export default function TermsPage() {
  return (
    <main className="bg-[#071019] py-16 md:py-20">
      <article className="mx-auto max-w-3xl px-4 text-slate-300 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Terms</p>
        <h1 className="mt-4 text-4xl font-black text-white">Terms of Service</h1>
        <p className="mt-4 text-sm text-slate-500">Effective date: May 11, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7">
          <section>
            <h2 className="text-xl font-black text-white">1. Acceptance</h2>
            <p className="mt-3">
              By accessing or using Pricing Optimization, you agree to these Terms. If you use the service for an
              organization, you represent that you have authority to bind that organization.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">2. Service</h2>
            <p className="mt-3">
              Pricing Optimization provides software-generated pricing analysis, competitor scans, Stripe-based revenue
              summaries, A/B pricing workflow support, and recommendation reports. Outputs are business decision support,
              not legal, tax, accounting, financial, or investment advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">3. Customer Responsibility</h2>
            <p className="mt-3">
              You are responsible for validating recommendations, complying with applicable laws, honoring customer
              contracts, configuring billing correctly, and deciding whether to implement any price, package, discount,
              or experiment. You must not upload data you lack the right to use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">4. Subscriptions and Payment</h2>
            <p className="mt-3">
              Paid plans are billed through Creem or another payment processor. Annual billing may be discounted compared
              with monthly billing. Fees are non-refundable except where required by law or expressly agreed in writing.
              You authorize recurring charges for the selected plan until cancellation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">5. Acceptable Use</h2>
            <p className="mt-3">
              You may not misuse the service, interfere with security, reverse engineer non-public systems, attempt
              unauthorized access, submit unlawful data, scrape the service, or use outputs to violate contracts, laws, or
              platform rules.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">6. Disclaimers</h2>
            <p className="mt-3">
              The service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the maximum extent permitted by law, we
              disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose,
              non-infringement, accuracy, uninterrupted operation, and error-free performance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">7. Limitation of Liability</h2>
            <p className="mt-3">
              To the maximum extent permitted by law, Pricing Optimization and its operators will not be liable for
              indirect, incidental, special, consequential, exemplary, punitive, or lost-profit damages. Our total
              liability for any claim is limited to the amount you paid for the service in the three months before the
              event giving rise to the claim, or USD $100 if no amount was paid.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">8. Indemnity</h2>
            <p className="mt-3">
              You agree to defend, indemnify, and hold harmless Pricing Optimization and its operators from claims,
              losses, liabilities, damages, costs, and expenses arising from your data, your pricing decisions, your use
              of the service, your violation of these Terms, or your violation of law or third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">9. Disputes</h2>
            <p className="mt-3">
              To the maximum extent permitted by law, disputes will be resolved by binding individual arbitration under
              the Federal Arbitration Act. Class actions, class arbitration, representative actions, and jury trials are
              waived to the fullest extent permitted by law. If any part of this section is unenforceable, the remainder
              remains effective.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">10. Contact</h2>
            <p className="mt-3">Questions about these Terms can be sent to support@aigeamy.com.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
