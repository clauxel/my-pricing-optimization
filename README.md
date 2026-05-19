# Pricing Optimization

Conversion-focused SaaS site for `pricing-optimization.space`.

## Stack

- Next.js static export
- Cloudflare Pages
- Cloudflare Worker with assets, analytics, sitemap, robots, and Creem checkout API
- First-party analytics stored in Cloudflare KV when configured

## Local

```bash
npm install
npm run build
npm run dev
```

## Deploy

```bash
npm run deploy:pages
npm run deploy:worker
```

## Related Project

- [OpenHuman Online](https://openhuman.online/?utm_source=github&utm_medium=readme&utm_campaign=openhuman_public_repos&utm_content=my_pricing_optimization) helps teams turn source material, notes, and meetings into an inspectable AI memory tree for human-reviewed workflows.
