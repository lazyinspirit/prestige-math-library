---
id: thm-restriction-corestriction-composite-is-multiplication-by-the-index
kind: theorem
title: "Corestriction after restriction multiplies by the index"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-restriction-and-corestriction-on-group-cohomology, lem-corestriction-is-independent-of-the-coset-representatives, cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Lemma 6.7.17"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

If $H\le G$ has finite index, then $\operatorname{cor}_H^G\operatorname{res}_H^G=[G:H]$ on $H^n(G;M)$ for all $n\ge0$.

## Proof

**Given:** A finite-index subgroup $H\le G$ and a left $G$-module $M$.

1.1 In degree zero, if $m\in M^G$, restriction regards $m$ as $H$-fixed and the norm sends it to $\sum_{xH\in G/H}xm=[G:H]m$. Thus $\operatorname{cor}_H^G\operatorname{res}_H^G$ and multiplication by $[G:H]$ have the same degree-zero component. [given]

2.1 Both are morphisms from the universal cohomological delta functor $H^*(G;-)$ to itself. By [[cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero]], equality in degree zero forces equality in every degree. Hence the composite is multiplication by $[G:H]$ on $H^n(G;M)$ for all $n\ge0$. [step 1.1] ∎
