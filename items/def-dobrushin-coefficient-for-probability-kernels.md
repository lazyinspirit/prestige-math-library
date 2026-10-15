---
id: def-dobrushin-coefficient-for-probability-kernels
kind: definition
title: "Dobrushin contraction coefficient for a probability kernel"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-measure-kernel-and-probability-kernel
  - def-total-variation-distance-for-probability-laws
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §3.3"
      url: "https://arxiv.org/pdf/math/0508594"
    - title: "Hans R. Künsch, Recursive Monte Carlo Filters: Algorithms and Theoretical Analysis, §4.3.1"
      url: "https://arxiv.org/pdf/math/0602211"
axiom_use: "No choice axiom is used; the coefficient is a supremum of distances between already specified kernel sections."
---

## Definition

Let $(S,\Sigma)$ and $(E,\mathcal E)$ be measurable spaces with $S\ne\varnothing$, and let $K:S\rightsquigarrow E$ be a probability kernel as in [[def-measure-kernel-and-probability-kernel]]. Its **Dobrushin contraction coefficient** is
$$\delta(K):=\sup_{x,x'\in S}\lVert K(x,\cdot)-K(x',\cdot)\rVert_{\mathrm{TV}},$$
where $\lVert\cdot\rVert_{\mathrm{TV}}$ is the event-supremum distance between probability laws in [[def-total-variation-distance-for-probability-laws]]. Thus $0\le\delta(K)\le1$. The coefficient measures the largest total-variation separation between two one-step output laws.
