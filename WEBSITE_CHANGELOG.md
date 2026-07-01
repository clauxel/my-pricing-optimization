# Website Changelog

## 2026-06-09 18:28 CST - Webmaster Mail Redirect Loop Repair

Scope: fixed the live directory-route redirect loop found from recent Search Console indexing feedback.

Touched files:
  - worker/index.js

Verification: pending build and post-deploy live checks for /pricing/ plus sitemap-listed public routes.

Deploy/Git status: pending commit, push, and Cloudflare Worker deploy.

Follow-ups: re-check Search Console/Bing only after the next crawl window; no webmaster account mutation was performed in this code repair.

## 2026-06-08 16:06:51 CST - SEO/GEO + Build Checklist Repair

Scope: repaired P0/P1 checklist issues for pricing-optimization.space.

Touched files:
  - pricing-optimization/out/index.html
  - pricing-optimization/out/pricing/index.html

Verification: ran the shared SEO/GEO patrol fixer from the latest all-sites checklist input; 9router build also passed after shared route guard changes.

Deploy/Git status: pending commit, push, deploy, and post-deploy checklist rerun.

Follow-ups: re-run the all-sites SEO/GEO + build checklist after production deployment and keep any DNS/account-only blockers in the issue ledger.

## 2026-07-01 - MiroFish contextual reference

- Added one contextual related-resource link to MiroFish AI Simulator with UTM tracking for pricing-optimization.space.
- Placement rule: secondary Resources/Source context when available, otherwise the homepage tail; no hero, nav, pricing, checkout, or primary CTA links were changed.
- SEO safety: brand anchor only, one link per canonical site surface, visible editorial context, and no keyword-stuffed footer/sitewide block.
- Verification pending: run the site build/deploy workflow and live link checks after all portfolio edits are applied.
