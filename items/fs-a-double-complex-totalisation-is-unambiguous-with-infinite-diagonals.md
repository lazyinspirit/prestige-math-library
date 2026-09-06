---
id: fs-a-double-complex-totalisation-is-unambiguous-with-infinite-diagonals
kind: false-statement
title: "FALSE: double-complex totalisation is unambiguous with infinite diagonals"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-direct-sum-total-complex-on-finite-diagonals]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

FALSE: double-complex totalisation is unambiguous with infinite diagonals

## Facts & Assumptions

**Given:** The zero-differential double complex $K^{p,q}=\mathbb Z$ when $p+q=0$ and $K^{p,q}=0$ otherwise, indexed over all $p,q\in\mathbb Z$.

## Refutation

**Proof technique:** direct.

1.1 Its degree-zero diagonal has one copy of $\mathbb Z$ for every $p\in\mathbb Z$. The direct-sum totalisation has $\operatorname{Tot}^0_\oplus=\bigoplus_{p\in\mathbb Z}\mathbb Z$, whose elements have finite support. [given, algebra]

2.1 The product totalisation instead has $\operatorname{Tot}^0_{\prod}=\prod_{p\in\mathbb Z}\mathbb Z$, which contains the all-ones family and is strictly larger. Hence infinite diagonals leave a genuine sum/product choice; first-quadrant finite diagonals are what remove it. [step 1.1, algebra] ∎
