import type { Metadata } from "next";
import PricingSection from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description:
    "Pricing Optimization plans for B2B SaaS teams. Single Product at $299/month and Multi Product at $699/month, with annual billing selected by default at 50% off.",
  alternates: { canonical: "https://pricing-optimization.space/pricing" },
};

export default function PricingPage() {
  return (
    <main className="bg-[#071019]">
      <section className="border-b border-white/10 bg-[#091622] py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Plans</p>
          <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">Pricing optimization plans</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Start with the product line where a better price can change the year. Annual billing is selected first and
            saves 50%.
          </p>
        </div>
      </section>
      <PricingSection />
    </main>
  );
}
