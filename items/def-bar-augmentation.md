---
id: def-bar-augmentation
kind: definition
title: "Bar augmentation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-unnormalized-homogeneous-bar-resolution, def-integral-group-ring-module-and-trivial-module-convention]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, §6.5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Definition

The augmentation $\varepsilon:B_0(G)\to\mathbb Z$ sends every vertex $(g_0)$ to $1$. It is $G$-linear for the trivial action and satisfies $\varepsilon d_1=0$.
