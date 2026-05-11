import Link from "next/link";

const navItems = [
  { href: "/#pricing-audit", label: "Audit" },
  { href: "/#model", label: "Model" },
  { href: "/pricing", label: "Pricing" },
  { href: "/pricing-optimization-strategy", label: "Strategy" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#071019]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Pricing Optimization home">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan-300 text-sm font-black text-slate-950">
            PO
          </span>
          <span className="truncate text-sm font-semibold tracking-wide text-white sm:text-base">
            Pricing Optimization
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#pricing"
          className="rounded-md bg-cyan-300 px-4 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-lime-300"
        >
          Checkout Multi
        </Link>
      </div>
    </header>
  );
}
