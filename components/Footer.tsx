import Link from "next/link";
import { keywordPages } from "@/src/content/keyword-pages";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050a12]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-300 text-sm font-black text-slate-950">
              PO
            </span>
            <span className="text-base font-semibold text-white">Pricing Optimization</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
            AI pricing optimization software for B2B SaaS teams that need competitor scans, price elasticity, A/B tests,
            Stripe metrics, and segment-level price recommendations in one workflow.
          </p>
          <p className="mt-4 text-sm text-slate-300">
            Support:{" "}
            <a className="font-semibold text-cyan-200 hover:text-lime-200" href="mailto:support@aigeamy.com">
              support@aigeamy.com
            </a>
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Primary market: United States. Next markets: Europe and India.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Guides</h2>
          <div className="mt-4 grid gap-2">
            {keywordPages.slice(0, 4).map((page) => (
              <Link key={page.slug} href={page.path} className="text-sm text-slate-400 hover:text-cyan-200">
                {page.keyword}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Company</h2>
          <div className="mt-4 grid gap-2">
            <Link href="/pricing" className="text-sm text-slate-400 hover:text-cyan-200">
              Pricing
            </Link>
            <Link href="/privacy" className="text-sm text-slate-400 hover:text-cyan-200">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-slate-400 hover:text-cyan-200">
              Terms
            </Link>
            <a
              href="https://github.com/clauxel/my-pricing-optimization"
              className="text-sm text-slate-400 hover:text-cyan-200"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
        © 2026 Pricing Optimization. All rights reserved.
      </div>
    </footer>
  );
}
