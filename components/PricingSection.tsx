"use client";

import { useEffect, useMemo, useState } from "react";
import PaymentModal, { openCheckoutShell } from "./PaymentModal";

type Billing = "monthly" | "annual";

const plans = [
  {
    key: "single",
    name: "Single Product",
    monthlyPrice: 299,
    scope: "1 SaaS product",
    description: "For founders testing the first serious pricing move on one product.",
    features: [
      "Competitor pricing page scan",
      "Stripe MRR, ARPU, churn import",
      "Elasticity model for one product",
      "Segment price range report",
      "Pricing page A/B test brief",
    ],
    cta: "Continue with Single",
    paid: true,
  },
  {
    key: "multi",
    name: "Multi Product",
    monthlyPrice: 699,
    scope: "Multiple products or tiers",
    description: "The default plan for SaaS teams with multiple products, packages, or buyer segments.",
    features: [
      "Everything in Single Product",
      "Multi-product line modeling",
      "Segmented willingness-to-pay curves",
      "Competitor monitoring refreshes",
      "A/B test framework by persona",
      "Executive pricing recommendation deck",
      "Priority support",
    ],
    cta: "Continue with Multi",
    paid: true,
    highlight: true,
  },
  {
    key: "enterprise",
    name: "Enterprise",
    monthlyPrice: 0,
    scope: "Custom deployment",
    description: "For teams that need private data handling, procurement, or deeper pricing science support.",
    features: [
      "Private deployment options",
      "Custom Stripe and warehouse mapping",
      "Advanced experiment governance",
      "Quarterly pricing strategy review",
      "Security and vendor paperwork",
    ],
    cta: "Talk to support",
    paid: false,
  },
];

function trackEvent(name: string, metadata: Record<string, string> = {}) {
  if (typeof window !== "undefined") window.pricingOptimizationTrack?.(name, metadata);
}

export default function PricingSection() {
  const [billing, setBilling] = useState<Billing>("annual");
  const [selectedPlan, setSelectedPlan] = useState("multi");
  const [checkout, setCheckout] = useState<{
    planId: string;
    planName: string;
    popup: Window | null;
  }>({ planId: "multi", planName: "Multi Product", popup: null });
  const [launchKey, setLaunchKey] = useState(0);
  const [planFlowOpen, setPlanFlowOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    function onChoosePlan(event: Event) {
      const detail = (event as CustomEvent<{ plan?: string; billing?: Billing; source?: string }>).detail || {};
      const planKey = plans.some((plan) => plan.key === detail.plan && plan.paid) ? detail.plan! : "multi";
      if (detail.billing) setBilling(detail.billing);
      setSelectedPlan(planKey);
      setPlanFlowOpen(true);
      trackEvent("plan_flow_opened", {
        source: detail.source || "site_cta",
        plan: planKey,
        billing: detail.billing || "annual",
      });
    }

    window.addEventListener("pricingoptimization:choose-plan", onChoosePlan);

    if (window.location.hash === "#choose-multi") {
      window.history.replaceState(null, "", window.location.pathname);
      window.setTimeout(() => {
        setBilling("annual");
        setSelectedPlan("multi");
        setPlanFlowOpen(true);
        trackEvent("plan_flow_opened", { source: "hash_cta", plan: "multi", billing: "annual" });
      }, 0);
    }

    return () => window.removeEventListener("pricingoptimization:choose-plan", onChoosePlan);
  }, []);

  const annualSavings = useMemo(() => {
    const multi = plans.find((plan) => plan.key === "multi")!;
    return multi.monthlyPrice * 12 - multi.monthlyPrice * 6;
  }, []);

  function effectiveMonthly(plan: (typeof plans)[number]) {
    if (!plan.monthlyPrice) return 0;
    return billing === "annual" ? plan.monthlyPrice * 0.5 : plan.monthlyPrice;
  }

  function handlePlanClick(plan: (typeof plans)[number]) {
    setSelectedPlan(plan.key);
    trackEvent("plan_selected", { plan: plan.key, billing });
    if (!plan.paid) {
      window.location.assign("mailto:support@aigeamy.com?subject=Pricing%20Optimization%20Enterprise");
      return;
    }
    setPlanFlowOpen(true);
  }

  function continueToPayment() {
    const plan = plans.find((item) => item.key === selectedPlan) || plans[1];
    if (!plan.paid) return;
    const popup = openCheckoutShell(plan.name);
    setCheckout({ planId: plan.key, planName: plan.name, popup });
    setPlanFlowOpen(false);
    setLaunchKey((value) => value + 1);
    setModalOpen(true);
    trackEvent("checkout_continue", { plan: plan.key, billing });
  }

  const activePlan = plans.find((plan) => plan.key === selectedPlan) || plans[1];
  const activeMonthly = effectiveMonthly(activePlan);
  const activeYearlyTotal = activeMonthly * 12;

  return (
    <section id="pricing" className="border-t border-white/10 bg-[#071019] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Pricing</p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
            Choose the pricing optimization engine that pays for itself
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-400">
            Annual billing is selected by default because most SaaS pricing changes need clean cohort reads. Annual plans
            are 50% cheaper than month-to-month.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="grid grid-cols-2 rounded-lg border border-white/10 bg-slate-950/70 p-1">
            {(["annual", "monthly"] as Billing[]).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setBilling(option);
                  trackEvent("billing_selected", { billing: option });
                }}
                className={`rounded-md px-5 py-2.5 text-sm font-bold transition ${
                  billing === option ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {option === "annual" ? "Annual - save 50%" : "Monthly"}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-lime-200">
          Multi Product annual saves ${annualSavings.toLocaleString("en-US")} in the first year.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => {
            const monthly = effectiveMonthly(plan);
            const yearlyTotal = monthly * 12;
            const active = selectedPlan === plan.key;
            return (
              <article
                key={plan.key}
                className={`relative rounded-lg border p-6 transition ${
                  plan.highlight
                    ? "border-cyan-200 bg-cyan-300/[0.08] shadow-2xl shadow-cyan-950/35"
                    : "border-white/10 bg-[#091622]"
                } ${active ? "ring-2 ring-lime-300/70" : ""}`}
              >
                {plan.highlight ? (
                  <div className="absolute -top-3 left-6 rounded-md bg-lime-300 px-3 py-1 text-xs font-black text-slate-950">
                    Default choice
                  </div>
                ) : null}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black text-white">{plan.name}</h3>
                    <p className="mt-1 text-sm text-slate-400">{plan.scope}</p>
                  </div>
                  <input
                    aria-label={`Select ${plan.name}`}
                    type="radio"
                    checked={active}
                    onChange={() => setSelectedPlan(plan.key)}
                    className="mt-1 h-5 w-5 accent-cyan-300"
                  />
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-300">{plan.description}</p>

                <div className="mt-6">
                  {plan.monthlyPrice ? (
                    <>
                      <div className="flex items-end gap-2">
                        <span className="text-5xl font-black text-white">${monthly.toLocaleString("en-US")}</span>
                        <span className="pb-2 text-sm text-slate-400">/mo</span>
                      </div>
                      <p className="mt-2 text-xs text-slate-500">
                        {billing === "annual"
                          ? `Billed $${yearlyTotal.toLocaleString("en-US")} yearly`
                          : "Billed monthly"}
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="text-5xl font-black text-white">Custom</div>
                      <p className="mt-2 text-xs text-slate-500">Procurement-ready scope</p>
                    </>
                  )}
                </div>

                <ul className="mt-6 grid gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => handlePlanClick(plan)}
                  className={`mt-7 w-full rounded-md px-5 py-3 text-sm font-black transition ${
                    plan.highlight
                      ? "bg-cyan-300 text-slate-950 hover:bg-lime-300"
                      : "border border-white/12 text-white hover:border-cyan-200 hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {planFlowOpen ? (
        <div
          className="checkout-blur fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[#020617]/70 px-4 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pricing-plan-flow-title"
          onClick={(event) => {
            if (event.currentTarget === event.target) setPlanFlowOpen(false);
          }}
        >
          <div className="relative w-full max-w-5xl rounded-lg border border-white/12 bg-[#091622] p-5 shadow-2xl shadow-black/40 md:p-7">
            <button
              type="button"
              onClick={() => setPlanFlowOpen(false)}
              className="absolute right-4 top-4 rounded-md border border-white/12 px-2.5 py-1.5 text-sm font-bold text-slate-300 hover:bg-white/5"
              aria-label="Close plan chooser"
            >
              x
            </button>
            <div className="max-w-3xl pr-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Choose your plan</p>
              <h2 id="pricing-plan-flow-title" className="mt-3 text-3xl font-black text-white md:text-5xl">
                Launch Pricing Optimization with the right model tier
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-400">
                Start pricing audit opens plan selection first. Annual billing keeps the same path and drops Multi
                Product to half price before secure checkout.
              </p>
            </div>

            <div className="mt-7 grid w-fit grid-cols-2 rounded-lg border border-white/10 bg-slate-950/70 p-1">
              {(["annual", "monthly"] as Billing[]).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setBilling(option);
                    trackEvent("billing_selected", { billing: option });
                  }}
                  className={`rounded-md px-5 py-2.5 text-sm font-bold transition ${
                    billing === option ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  {option === "annual" ? "Yearly 50% off" : "Monthly"}
                </button>
              ))}
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {plans
                .filter((plan) => plan.paid)
                .map((plan) => {
                  const monthly = effectiveMonthly(plan);
                  const yearlyTotal = monthly * 12;
                  const active = activePlan.key === plan.key;
                  return (
                    <button
                      key={plan.key}
                      type="button"
                      onClick={() => setSelectedPlan(plan.key)}
                      className={`rounded-lg border p-5 text-left transition ${
                        active
                          ? "border-cyan-200 bg-cyan-300/[0.08] ring-2 ring-lime-300/70"
                          : "border-white/10 bg-[#071019] hover:border-cyan-200/60"
                      }`}
                    >
                      <span className="text-sm font-semibold text-cyan-200">{plan.scope}</span>
                      <span className="mt-2 block text-xl font-black text-white">{plan.name}</span>
                      <span className="mt-3 block text-sm leading-6 text-slate-300">{plan.description}</span>
                      <span className="mt-5 flex items-end gap-2 text-white">
                        <strong className="text-4xl">${monthly.toLocaleString("en-US")}</strong>
                        <span className="pb-1 text-sm text-slate-400">/mo</span>
                      </span>
                      <span className="mt-1 block text-xs text-slate-500">
                        {billing === "annual" ? `Billed $${yearlyTotal.toLocaleString("en-US")} yearly` : "Billed monthly"}
                      </span>
                    </button>
                  );
                })}
            </div>

            <div className="mt-7 flex flex-col gap-4 rounded-lg border border-white/10 bg-[#071019] p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Selected plan</p>
                <h3 className="mt-1 text-xl font-black text-white">
                  {activePlan.name} · {billing === "annual" ? "Yearly" : "Monthly"}
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  {billing === "annual"
                    ? `Billed $${activeYearlyTotal.toLocaleString("en-US")} yearly. Equivalent to $${activeMonthly.toLocaleString("en-US")} per month.`
                    : `$${activeMonthly.toLocaleString("en-US")} charged monthly.`}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setPlanFlowOpen(false)}
                  className="rounded-md border border-white/12 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-white/5"
                >
                  Not now
                </button>
                <button
                  type="button"
                  onClick={continueToPayment}
                  className="rounded-md bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 hover:bg-lime-300"
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <PaymentModal
        isOpen={modalOpen}
        planId={checkout.planId}
        planName={checkout.planName}
        billing={billing}
        initialPopup={checkout.popup}
        launchKey={launchKey}
        closeModal={() => setModalOpen(false)}
      />
    </section>
  );
}
