import type { Metadata } from "next";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pricing-optimization.space"),
  title: {
    template: "%s | Pricing Optimization",
    default: "Pricing Optimization Software for B2B SaaS",
  },
  description:
    "Pricing Optimization and AI Pricing Optimization software for B2B SaaS. Scan competitors, model price elasticity, connect Stripe, run A/B pricing tests, and get segment-level recommendations.",
  keywords: [
    "Pricing Optimization",
    "AI Pricing Optimization",
    "Pricing optimization tools",
    "Pricing optimization machine learning",
    "Price optimization software",
    "Dynamic pricing",
  ],
  robots: { index: true, follow: true },
  icons: { icon: "/site-icon.svg" },
  openGraph: {
    title: "Pricing Optimization Software for B2B SaaS",
    description:
      "Find the highest price your buyers will actually pay with competitor scans, Stripe metrics, elasticity analysis, and A/B pricing tests.",
    url: "https://pricing-optimization.space",
    siteName: "Pricing Optimization",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pricing Optimization SaaS dashboard",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Optimization Software for B2B SaaS",
    description: "AI pricing optimization for competitor scans, price elasticity, Stripe metrics, and A/B tests.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://pricing-optimization.space" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
