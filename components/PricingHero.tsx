"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { MouseEvent } from "react";

const segments = {
  "Seed SaaS": { multiplier: 1.18, confidence: "Medium", note: "raise entry price, protect activation" },
  "Growth SaaS": { multiplier: 1.31, confidence: "High", note: "expand multi-product packaging" },
  "Enterprise SaaS": { multiplier: 1.42, confidence: "High", note: "separate compliance and support value" },
};

function trackEvent(name: string, metadata: Record<string, string | number> = {}) {
  if (typeof window !== "undefined") window.pricingOptimizationTrack?.(name, metadata);
}

export default function PricingHero() {
  const [currentPrice, setCurrentPrice] = useState(99);
  const [churn, setChurn] = useState(4.8);
  const [segment, setSegment] = useState<keyof typeof segments>("Growth SaaS");

  function choosePlan(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    trackEvent("cta_clicked", { location: "hero_primary" });
    window.dispatchEvent(
      new CustomEvent("pricingoptimization:choose-plan", {
        detail: { plan: "multi", billing: "annual", source: "hero" },
      }),
    );
  }

  const model = useMemo(() => {
    const segmentData = segments[segment];
    const suggested = Math.round(currentPrice * segmentData.multiplier);
    const currentMrr = currentPrice * 420;
    const suggestedMrr = suggested * Math.round(420 * Math.max(0.82, 1 - churn / 100 / 2));
    const lift = Math.round(((suggestedMrr - currentMrr) / currentMrr) * 100);
    return { suggested, lift: Math.max(lift, 7), ...segmentData };
  }, [currentPrice, churn, segment]);

  return (
    <section className="relative overflow-hidden bg-[#071019]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
        <div className="flex flex-col text-center lg:pt-1 lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 self-center rounded-md border border-cyan-200/25 bg-cyan-300/10 px-3 py-1.5 text-sm font-semibold text-cyan-50 lg:self-start">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
            AI Pricing Optimization for B2B SaaS
          </div>
          <h1 className="text-4xl font-black leading-[1.04] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Pricing Optimization that finds the price your buyers will actually pay
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-slate-300 sm:text-xl lg:mx-0">
            Your SaaS pricing may be leaving 30% on the table. Connect Stripe, scan competitors, model churn and upgrade
            behavior, then launch segmented price tests without guessing.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#pricing"
              onClick={choosePlan}
              className="rounded-md bg-cyan-300 px-7 py-4 text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01] hover:bg-lime-300"
            >
              Start pricing audit
            </a>
            <Link
              href="/price-optimization-example"
              onClick={() => trackEvent("cta_clicked", { location: "hero_example" })}
              className="rounded-md border border-white/15 px-7 py-4 text-base font-semibold text-slate-100 transition hover:border-cyan-100/50 hover:bg-white/5"
            >
              See example report
            </Link>
          </div>
          <div className="mt-7 grid grid-cols-3 gap-4 text-center lg:text-left">
            {[
              ["30%", "common underpricing gap"],
              ["14 days", "first experiment"],
              ["Stripe", "MRR, ARPU, churn"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="text-2xl font-black text-white md:text-3xl">{value}</div>
                <div className="mt-1 text-xs leading-5 text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div id="pricing-audit" className="relative">
          <div className="dashboard-shadow overflow-hidden rounded-lg border border-white/10 bg-[#091622]">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-lime-300" />
              </div>
              <div className="text-xs font-semibold text-cyan-100">Revenue ceiling model</div>
              <div className="text-xs text-slate-500">Live sample</div>
            </div>

            <div className="grid gap-5 p-4 md:p-5">
              <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
                <div className="rounded-lg border border-white/10 bg-slate-950/55 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Suggested price</p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-5xl font-black text-white">${model.suggested}</span>
                    <span className="pb-2 text-sm text-slate-400">per month</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-md border border-lime-300/20 bg-lime-300/10 p-3">
                      <div className="text-2xl font-black text-lime-200">+{model.lift}%</div>
                      <div className="text-xs text-slate-400">MRR lift range</div>
                    </div>
                    <div className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3">
                      <div className="text-2xl font-black text-cyan-100">{model.confidence}</div>
                      <div className="text-xs text-slate-400">confidence</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{model.note}</p>
                </div>

                <div className="relative min-h-[285px] overflow-hidden rounded-lg border border-white/10 bg-slate-950">
                  <Image
                    src="/assets/pricing-dashboard-hero.png"
                    alt="AI pricing optimization dashboard with revenue lift, competitor scan, and segment recommendations"
                    width={920}
                    height={620}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-4 rounded-lg border border-white/10 bg-slate-950/55 p-5 md:grid-cols-3">
                <label className="grid gap-3">
                  <span className="text-sm font-semibold text-white">Current price: ${currentPrice}</span>
                  <input
                    type="range"
                    min="19"
                    max="399"
                    value={currentPrice}
                    onChange={(event) => {
                      const value = Number(event.target.value);
                      setCurrentPrice(value);
                      trackEvent("calculator_changed", { field: "price", value });
                    }}
                  />
                </label>
                <label className="grid gap-3">
                  <span className="text-sm font-semibold text-white">Monthly churn: {churn.toFixed(1)}%</span>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="0.1"
                    value={churn}
                    onChange={(event) => {
                      const value = Number(event.target.value);
                      setChurn(value);
                      trackEvent("calculator_changed", { field: "churn", value });
                    }}
                  />
                </label>
                <label className="grid gap-3">
                  <span className="text-sm font-semibold text-white">Segment</span>
                  <select
                    className="h-10 rounded-md border border-white/10 bg-[#071019] px-3 text-sm text-white outline-none focus:border-cyan-200"
                    value={segment}
                    onChange={(event) => {
                      const value = event.target.value as keyof typeof segments;
                      setSegment(value);
                      trackEvent("calculator_changed", { field: "segment", value });
                    }}
                  >
                    {Object.keys(segments).map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
