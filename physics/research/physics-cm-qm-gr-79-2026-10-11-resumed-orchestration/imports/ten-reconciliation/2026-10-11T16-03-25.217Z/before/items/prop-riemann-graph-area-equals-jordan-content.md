---
id: prop-riemann-graph-area-equals-jordan-content
kind: proposition
title: "Riemann area between continuous graphs equals Jordan content"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-riemann-area-between-continuous-graphs, thm-fubini-over-a-region-between-continuous-graphs, thm-jordan-content-and-indicator-integrability]
justified_by: []
aliases: []
landmark: true
short: "Graph area equals Jordan content"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, Theorem 7.2.6"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_REAL_ANALYSIS.PDF"
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, Theorem 3.1.9"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Statement

Let $a<b$, let $\alpha,\beta:[a,b]\to\mathbb R$ be continuous with $\alpha\le\beta$, and set

$$K:=\{(x,y):a\le x\le b,\ \alpha(x)\le y\le\beta(x)\}.$$

Then $K$ is compact and Jordan measurable. Its Jordan content equals its Riemann area between continuous graphs ([[def-riemann-area-between-continuous-graphs]]):

$$\operatorname{cont}(K)=\int_a^b(\beta(x)-\alpha(x))\,dx.$$

## Facts & Assumptions

**Given:** Reals $a<b$ and continuous functions $\alpha\le\beta$ on $[a,b]$, with $K$ as in the Statement.

[L1] For this $K$, the region-between-graphs theorem states: $K$ is compact and Jordan measurable ([[thm-fubini-over-a-region-between-continuous-graphs]]).

[L2] For a continuous $H:K\to\mathbb R$, that theorem gives $\int_KH=\int_a^b\left(\int_{\alpha(x)}^{\beta(x)}H(x,y)\,dy\right)dx$ ([[thm-fubini-over-a-region-between-continuous-graphs]]).

[L3] If $E$ is Jordan measurable, then the integral of its indicator over a bounding rectangle equals $\operatorname{cont}(E)$ ([[thm-jordan-content-and-indicator-integrability]]).

[L4] The Riemann area between continuous graphs $\alpha\le\beta$ on $[a,b]$ is $\int_a^b(\beta(x)-\alpha(x))\,dx$ ([[def-riemann-area-between-continuous-graphs]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to the constant function $H=1$ on the compact Jordan set supplied by [L1]; by [L3], the left side is $\operatorname{cont}(K)$, while the right side is $\int_a^b\left(\int_{\alpha(x)}^{\beta(x)}1\,dy\right)dx$. [L1, L2, L3]

2.1 The inner integral is $\beta(x)-\alpha(x)$, including a zero contribution when the two graphs coincide, so step 1.1 is exactly [L4] and proves the formula. [step 1.1, L4] ∎
