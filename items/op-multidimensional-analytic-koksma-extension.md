---
id: op-multidimensional-analytic-koksma-extension
kind: open-problem
title: Analytic-function extension of the multidimensional Koksma theorem
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-scattered-sequence
  - def-jointly-scattered-sequences
  - def-uniform-distribution-mod-one-in-k-dimensions
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves
      url: https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf
      locator: "Conjecture 1.11, §1, printed p. 5; Theorem 1.10 hypotheses are retained with polynomials replaced by analytic functions"
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves (arXiv v2 author preprint)
      url: https://arxiv.org/pdf/2509.06909v2
      locator: "arXiv:2509.06909v2, Conjecture 1.11, §1, printed p. 5; Theorem 1.10 hypotheses are retained with polynomials replaced by analytic functions; full relevant passage inspected"
---

## Open problem

Let $k\ge1$, let $g:\mathbb R\to(1,\infty)$ be nonconstant and real analytic, let $b(n)$ be a scattered real sequence indexed by $n\ge1$ with $b(n)\to+\infty$, let $f_1,\ldots,f_k:\mathbb R\to\mathbb R$ be nonconstant and real analytic, and let $a_1(n),\ldots,a_k(n)$ be scattered real sequences indexed by $n\ge1$. Suppose either (i) the sequences are jointly scattered, meaning every nonzero real linear combination is scattered, or (ii) $1,f_1,\ldots,f_k$ are linearly independent over $\mathbb R$. Is

$$\bigl(g(x)^{b(n)},a_1(n)f_1(x),\ldots,a_k(n)f_k(x)\bigr)_{n\ge1}$$

uniformly distributed in $\mathbb T^{k+1}$ for Lebesgue-almost every $x\in\mathbb R$?

Here real analytic means locally represented by a convergent power series, scatteredness means the logarithmic pair-sum bound for every $0<\delta\le1$, jointly scattered means every nonzero real linear combination is scattered, $\mathbb T^{k+1}=(\mathbb R/\mathbb Z)^{k+1}$, and uniform distribution means convergence of every half-open box frequency to its product volume.
## Open problem references

[Bergelson–Moreira, Conjecture 1.11](https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf)

[Bergelson–Moreira, arXiv:2509.06909v2](https://arxiv.org/pdf/2509.06909v2)

## Status

The version of record published on 15 September 2026 labels this analytic replacement of Theorem 1.10 as Conjecture 1.11. Targeted exact-title, conjecture, and DOI searches through 28 October 2026 found no later primary resolution; this status report records the bounded search scope rather than claiming an exhaustive absence result.
