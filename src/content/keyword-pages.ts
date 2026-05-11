export type KeywordPage = {
  slug: string;
  path: string;
  keyword: string;
  title: string;
  description: string;
  intro: string;
  thesis: string;
  sections: Array<{
    heading: string;
    body: string;
    bullets: string[];
  }>;
  playbook: string[];
  checklist: string[];
};

export const keywordPages: KeywordPage[] = [
  {
    slug: "pricing-optimization-tools",
    path: "/pricing-optimization-tools",
    keyword: "Pricing optimization tools",
    title: "Pricing Optimization Tools for SaaS Teams",
    description:
      "A practical guide to pricing optimization tools for B2B SaaS teams, including competitor scans, elasticity modeling, Stripe metrics, and A/B test workflow.",
    intro:
      "Pricing optimization tools should not be a dashboard that only reports historical revenue. The useful tool shows where the current price is leaking money, which buyers tolerate a higher price, and how to test a change without damaging expansion.",
    thesis:
      "The best tool combines market evidence, customer behavior, and experiment execution in one loop.",
    sections: [
      {
        heading: "What to expect from a serious tool",
        body: "A pricing tool is valuable when it reduces the number of pricing meetings that depend on opinions. It should turn Stripe history, competitor pages, churn, upgrades, and package structure into a clear price range by segment.",
        bullets: [
          "Competitor pricing extraction with source links and plan normalization.",
          "Elasticity analysis based on churn, upgrades, downgrades, and discounting.",
          "Segment recommendations for SMB, mid-market, and enterprise motion.",
          "A/B testing handoff for pricing pages and sales-assisted packaging.",
        ],
      },
      {
        heading: "Tool categories",
        body: "Most teams need four categories: data ingestion, price modeling, experiment control, and decision reporting. A tool that misses one of those forces revenue teams back into spreadsheets.",
        bullets: [
          "Ingestion connects Stripe, CRM, product usage, and competitor URLs.",
          "Modeling estimates willingness to pay and the churn risk of each price move.",
          "Experiment control shows different pricing pages to the right audience.",
          "Reporting gives executives a decision, not a pile of charts.",
        ],
      },
    ],
    playbook: [
      "Connect Stripe and group customers by plan, tenure, acquisition channel, and usage level.",
      "Scan three to eight competitors and convert public pages into comparable package attributes.",
      "Model price changes by cohort before changing the public page.",
      "Ship one controlled price test for new visitors before migrating existing customers.",
    ],
    checklist: [
      "The tool can explain why a price was recommended.",
      "It separates gross churn from downgrade behavior.",
      "It handles annual versus monthly billing differently.",
      "It exports a pricing recommendation that sales and finance can both read.",
    ],
  },
  {
    slug: "pricing-optimization-machine-learning",
    path: "/pricing-optimization-machine-learning",
    keyword: "Pricing optimization machine learning",
    title: "Pricing Optimization Machine Learning for SaaS Pricing",
    description:
      "How machine learning improves pricing optimization by estimating price elasticity, segment response, upgrade probability, and churn risk.",
    intro:
      "Pricing optimization machine learning is useful when it turns messy customer behavior into a smaller set of price moves that can be tested. It is not magic. It needs clean revenue data, meaningful segments, and business constraints.",
    thesis:
      "Machine learning should rank pricing options by expected revenue lift and downside risk.",
    sections: [
      {
        heading: "Signals that matter",
        body: "The model should not rely on price alone. SaaS willingness to pay is shaped by usage, company size, contract length, support expectations, compliance needs, and the alternatives a buyer is comparing.",
        bullets: [
          "MRR, ARPU, expansion, contraction, and churn from Stripe.",
          "Usage depth and activation milestones from product analytics.",
          "Competitor package attributes and public price anchors.",
          "Discount history, sales cycle length, and plan migration friction.",
        ],
      },
      {
        heading: "Useful model outputs",
        body: "The output should be operational. A revenue team needs to know which plan can move, which segment should see a new page, and which customer cohort should stay untouched.",
        bullets: [
          "Price elasticity ranges with confidence by segment.",
          "Upgrade probability for tier packaging changes.",
          "Churn risk when a cohort sees a higher price.",
          "Recommended test size and guardrail metrics.",
        ],
      },
    ],
    playbook: [
      "Train on historical plan changes, discount outcomes, and cohort churn.",
      "Use competitor data as context, not as the price-setting authority.",
      "Hold out recent cohorts to test whether the model generalizes.",
      "Review recommendations with finance before exposing them to buyers.",
    ],
    checklist: [
      "The model treats annual contracts separately from monthly subscribers.",
      "It distinguishes low usage from low willingness to pay.",
      "It flags cohorts with too little data for confident recommendations.",
      "It shows the estimated downside, not only expected lift.",
    ],
  },
  {
    slug: "pricing-optimization-strategy",
    path: "/pricing-optimization-strategy",
    keyword: "Pricing optimization strategy",
    title: "Pricing Optimization Strategy for B2B SaaS",
    description:
      "A revenue-focused pricing optimization strategy for SaaS companies that need better packaging, higher ARPU, and lower churn risk.",
    intro:
      "A pricing optimization strategy is the operating system for changing price without guessing. The strategy decides what evidence matters, which segment moves first, and what success looks like before the page changes.",
    thesis:
      "Strong strategy balances buyer psychology, competitive anchors, and measurable revenue impact.",
    sections: [
      {
        heading: "Start with the revenue leak",
        body: "Most SaaS pricing problems look like growth problems. The leak might be low entry price, unlimited usage in a cheap plan, weak annual incentives, or a feature bundle that hides enterprise value.",
        bullets: [
          "Compare ARPU by segment and acquisition channel.",
          "Find plans where usage grows faster than price.",
          "Measure discounting patterns before raising list prices.",
          "Separate willingness to pay from inability to activate.",
        ],
      },
      {
        heading: "Choose the first move",
        body: "The safest first move is rarely a blanket increase. Better options include new packaging, annual incentives, add-ons, or changing the public page only for new visitors.",
        bullets: [
          "Lift the value metric where customers already see ROI.",
          "Use annual billing to reduce churn noise during the test.",
          "Protect existing customers until the new motion is proven.",
          "Write rollback rules before the experiment starts.",
        ],
      },
    ],
    playbook: [
      "Define a target: ARPU lift, expansion, conversion, or churn reduction.",
      "Pick one segment with enough traffic and clean historical data.",
      "Generate a price range from elasticity, competitor anchors, and usage value.",
      "Run the smallest test that can change the decision.",
    ],
    checklist: [
      "The strategy has a segment owner.",
      "Finance agrees on the revenue metric.",
      "Sales knows how to explain the new package.",
      "Support has messaging for confused customers.",
    ],
  },
  {
    slug: "price-optimization-techniques",
    path: "/price-optimization-techniques",
    keyword: "Price optimization techniques",
    title: "Price Optimization Techniques That SaaS Teams Can Test",
    description:
      "Practical price optimization techniques for SaaS: elasticity analysis, value metrics, competitor anchors, annual discounts, segmentation, and A/B tests.",
    intro:
      "Price optimization techniques are only useful when they can be tested with real buyers. The point is to move from one big pricing opinion to a controlled set of smaller decisions.",
    thesis:
      "The strongest technique is the one that improves revenue without adding churn risk the business cannot absorb.",
    sections: [
      {
        heading: "Technique stack",
        body: "A good pricing workflow uses several techniques together. Competitor anchors show the market, elasticity shows customer response, and A/B tests show whether the page can convert.",
        bullets: [
          "Price elasticity analysis from churn and upgrade data.",
          "Value-metric pricing tied to seats, usage, revenue, or workflow volume.",
          "Annual discount modeling to reduce monthly churn volatility.",
          "Packaging tests that move features between tiers.",
        ],
      },
      {
        heading: "When to use each technique",
        body: "Early products need simple packaging and strong value anchors. Mature products need segmentation, migration rules, and guardrails because a pricing mistake has a larger installed-base cost.",
        bullets: [
          "Use competitor scans when your category has clear public anchors.",
          "Use elasticity when you have enough churn and upgrade history.",
          "Use dynamic pricing when inventory, demand, or usage changes quickly.",
          "Use sales-assisted tests when enterprise deals have negotiated terms.",
        ],
      },
    ],
    playbook: [
      "Write the hypothesis in one sentence before changing the price.",
      "Pick a guardrail: conversion, churn, CAC payback, or sales cycle length.",
      "Show the new price to a controlled segment first.",
      "Keep the reporting window long enough to include refunds and downgrades.",
    ],
    checklist: [
      "Every test has a rollback threshold.",
      "The price page and sales deck match.",
      "The team has separated new-customer pricing from existing-customer migration.",
      "The test can be measured without manual spreadsheet cleanup.",
    ],
  },
  {
    slug: "price-optimization-example",
    path: "/price-optimization-example",
    keyword: "Price optimization example",
    title: "Price Optimization Example for a B2B SaaS Product",
    description:
      "A concrete price optimization example showing how a SaaS team can move from $99 to a higher recommended price using churn, usage, and competitor data.",
    intro:
      "A price optimization example is easier to trust when it shows the tradeoffs. Here is a realistic SaaS case: a workflow product at $99 per month with strong activation, low expansion, and competitors priced higher.",
    thesis:
      "The right answer is not always the highest price. It is the price that improves revenue while keeping conversion and churn inside the guardrails.",
    sections: [
      {
        heading: "Baseline",
        body: "The product has 420 active customers, 4.8% monthly churn, and a public price of $99. Competitors sit between $129 and $199, but the current plan includes features that competitors reserve for higher tiers.",
        bullets: [
          "Current MRR: about $41,580 before discounts.",
          "Annual conversion is low because the discount is weak.",
          "High-usage accounts expand slowly because packaging is flat.",
          "Support load is concentrated in customers paying below median usage value.",
        ],
      },
      {
        heading: "Recommendation",
        body: "The model recommends testing $129 per month for new growth-segment visitors, with annual billing at 50% effective monthly discount for the first decision window.",
        bullets: [
          "Expected MRR lift range: 18% to 31% if conversion holds.",
          "Guardrail: stop if qualified signup-to-paid conversion drops more than 9%.",
          "Secondary move: move advanced reporting into the higher package.",
          "Existing customers remain untouched until the new price is proven.",
        ],
      },
    ],
    playbook: [
      "Run the $129 page for new visitors from paid search and category pages.",
      "Keep the $99 control visible to a statistically meaningful sample.",
      "Measure conversion, annual selection, refund requests, and activation.",
      "Use the result to decide whether to migrate the public page or test $149 next.",
    ],
    checklist: [
      "The example includes competitor anchors.",
      "The recommendation protects existing revenue.",
      "The test has a clear stop rule.",
      "The next action is obvious even if the test is flat.",
    ],
  },
  {
    slug: "price-optimization-software",
    path: "/price-optimization-software",
    keyword: "Price optimization software",
    title: "Price Optimization Software for SaaS Revenue Teams",
    description:
      "What SaaS teams should look for in price optimization software, from Stripe data and machine learning to pricing reports and payment-safe A/B tests.",
    intro:
      "Price optimization software should be built around decisions, not decorative charts. The output should help the revenue team change packaging, pick a price range, and test it with buyers.",
    thesis:
      "The software earns its place when it makes a pricing change faster, safer, and easier to explain.",
    sections: [
      {
        heading: "Core software capabilities",
        body: "The core product should connect the data that pricing decisions need and keep the workflow close to deployment. Otherwise the team will still need analysts, spreadsheets, and manual page experiments.",
        bullets: [
          "Stripe import for MRR, ARPU, churn, upgrades, and plan history.",
          "Competitor pricing scans with normalized feature comparisons.",
          "Machine learning recommendations with confidence bands.",
          "Pricing page A/B testing and segment controls.",
        ],
      },
      {
        heading: "Buying criteria",
        body: "The right buyer is usually a founder, head of growth, product marketer, RevOps leader, or finance partner. Each needs a different view of the same pricing decision.",
        bullets: [
          "Founders need the next price move and the risk.",
          "Growth teams need conversion impact and test setup.",
          "Finance needs revenue sensitivity and billing treatment.",
          "Sales needs talk tracks and packaging boundaries.",
        ],
      },
    ],
    playbook: [
      "Start with one product line and one buyer segment.",
      "Import twelve months of Stripe data if available.",
      "Compare recommendations against three public competitors.",
      "Export a one-page decision memo before changing the live page.",
    ],
    checklist: [
      "The software can run without a data warehouse on day one.",
      "It gives explainable recommendations.",
      "It supports annual and monthly price logic.",
      "It records experiments for later pricing reviews.",
    ],
  },
  {
    slug: "dynamic-pricing",
    path: "/dynamic-pricing",
    keyword: "Dynamic pricing",
    title: "Dynamic Pricing for SaaS: When It Helps and When It Hurts",
    description:
      "A clear SaaS guide to dynamic pricing, including when to use it, where it can hurt trust, and how to test it safely.",
    intro:
      "Dynamic pricing changes price based on context. In SaaS, it can work when usage, demand, or buyer value differs sharply, but it can damage trust if buyers feel the price is arbitrary.",
    thesis:
      "For SaaS, dynamic pricing should usually mean dynamic packaging and segmentation, not random price swings.",
    sections: [
      {
        heading: "Good use cases",
        body: "Dynamic pricing is strongest when the customer value changes in a measurable way. Usage-based products, AI compute, marketplaces, and seasonal demand patterns can justify variable pricing.",
        bullets: [
          "Usage-based costs or customer value increase with volume.",
          "Enterprise buyers need compliance, support, or SLA packaging.",
          "Demand changes by time, geography, or availability.",
          "The buyer understands why the price changes.",
        ],
      },
      {
        heading: "Trust risks",
        body: "B2B buyers dislike feeling tricked. If two similar customers see different prices with no clear reason, sales friction and support tickets can erase the revenue lift.",
        bullets: [
          "Use transparent segments such as plan, usage, or support level.",
          "Avoid changing renewal price without clear notice.",
          "Keep sales-approved discount rules consistent.",
          "Measure complaint rate and refund rate as guardrails.",
        ],
      },
    ],
    playbook: [
      "Start with dynamic packaging before fully dynamic prices.",
      "Publish the value metric so buyers can predict cost.",
      "Test new pricing with new visitors before renewals.",
      "Use annual billing to reduce short-term volatility.",
    ],
    checklist: [
      "The reason for price variation is explainable.",
      "The billing system can enforce the rule cleanly.",
      "Support has a clear answer for price questions.",
      "The experiment has a trust metric, not only revenue.",
    ],
  },
  {
    slug: "optimization-meaning",
    path: "/optimization-meaning",
    keyword: "Optimization meaning",
    title: "Optimization Meaning in Pricing and Revenue Work",
    description:
      "A plain-English explanation of optimization meaning in pricing: choosing the best price under real constraints, not simply maximizing one number.",
    intro:
      "Optimization means choosing the best available option under constraints. In pricing, that means finding a price that improves revenue while respecting conversion, churn, customer trust, and operational limits.",
    thesis:
      "The practical meaning of optimization is better decisions with fewer costly guesses.",
    sections: [
      {
        heading: "Optimization is constrained",
        body: "A price can maximize short-term revenue and still be wrong if it increases churn, lengthens sales cycles, or damages trust. Good optimization includes the constraints that matter to the business.",
        bullets: [
          "Revenue lift is balanced against churn risk.",
          "Conversion is measured by segment, not only in aggregate.",
          "Support and sales capacity are treated as constraints.",
          "Existing customer migration is handled separately from new buyers.",
        ],
      },
      {
        heading: "Optimization in SaaS pricing",
        body: "For SaaS, optimization usually combines competitor anchors, customer behavior, packaging, annual billing, and controlled experiments. The result is a recommended price range, not a single magic number.",
        bullets: [
          "Use data to narrow the range.",
          "Use experiments to choose the final move.",
          "Use reporting to explain the decision.",
          "Use monitoring to catch unwanted churn early.",
        ],
      },
    ],
    playbook: [
      "Define the objective and guardrails.",
      "Collect evidence from customers, competitors, and billing data.",
      "Generate a short list of price moves.",
      "Test, measure, and update the recommendation.",
    ],
    checklist: [
      "The objective is explicit.",
      "The constraints are measurable.",
      "The recommendation can be explained to a buyer.",
      "The decision improves after new data arrives.",
    ],
  },
];

export const keywordPageMap = new Map(keywordPages.map((page) => [page.slug, page]));
