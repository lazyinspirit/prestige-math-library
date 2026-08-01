---
id: cor-one-dimensional-null-and-content-zero-agree
kind: corollary
title: "At $m=1$, cube-nullity and cube-content-zero are exactly the published interval-cover notions"
status: published
origin: session
deps: [def-null-and-content-zero-in-rn, def-measure-zero-and-content-zero, def-multidimensional-rectangle-and-volume, lem-metrics-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Statement

Under $\mathbb R^1\cong\mathbb R$, nullity and content zero from cube covers are exactly the published interval-cover notions.

## Facts & Assumptions

**Given:** The standard identification ([[lem-metrics-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

[L1] A one-dimensional closed cube is a closed interval and its volume is its length ([[def-multidimensional-rectangle-and-volume]]).

[L2] The definitions are [[def-null-and-content-zero-in-rn]] and [[def-measure-zero-and-content-zero]].

## Proof

**Proof technique:** direct.

1.1 Under the identification, countable cube covers and their volume-series bounds are word for word the countable interval-cover conditions.  [given, L1, L2]

1.2 The same is true for finite covers and finite sums.  [given, L1, L2]

2.1 Hence both implications hold for nullity and for content zero.  [step 1.1, step 1.2] ∎
