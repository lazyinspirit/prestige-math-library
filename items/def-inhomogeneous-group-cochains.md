---
id: def-inhomogeneous-group-cochains
kind: definition
title: "Inhomogeneous group cochains"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integral-group-ring-module-and-trivial-module-convention]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Appendix 6.5.5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Definition

Let $G$ be a group and $M$ a left $G$-module. For $n\ge0$, set
$C^n(G,M)=\{f:G^n\to M\}$, with pointwise abelian-group operations. Its
coboundary is
$$df(g_1,\ldots,g_{n+1})=g_1f(g_2,\ldots,g_{n+1})+\sum_{i=1}^n(-1)^if(\ldots,g_ig_{i+1},\ldots)+(-1)^{n+1}f(g_1,\ldots,g_n).$$
