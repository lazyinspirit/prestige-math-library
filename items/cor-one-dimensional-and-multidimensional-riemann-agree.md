---
id: cor-one-dimensional-and-multidimensional-riemann-agree
kind: corollary
title: "At $m=1$, nondegenerate multidimensional rectangles, grid sums and the integral are exactly the published one-dimensional notions"
status: published
origin: session
deps: [thm-multidimensional-darboux-equals-riemann, def-multidimensional-rectangle-and-volume, def-multidimensional-grid-partition, def-multidimensional-darboux-sums, def-multidimensional-darboux-integral, def-multidimensional-tagged-partition-and-riemann-sum, def-darboux-integral, def-tagged-partition-and-riemann-sum, thm-darboux-equals-riemann, lem-metrics-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics]
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

Under $\mathbb R^1\cong\mathbb R$, nondegenerate multidimensional rectangles,
grids, Darboux sums, tagged sums, integrability, and integral values are exactly
the published one-dimensional notions on intervals $[a,b]$ with $a<b$.

## Facts & Assumptions

**Given:** The standard isometry $\mathbb R^1\cong\mathbb R$ ([[lem-metrics-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

[L1] The one-dimensional notions are [[def-darboux-integral]], [[def-tagged-partition-and-riemann-sum]], and [[thm-darboux-equals-riemann]].

[L2] A multidimensional rectangle is a finite coordinate product with product volume; a grid is a coordinatewise partition whose cells split that volume; and the Darboux and tagged notions are the cited cell sums and their extrema or mesh limits ([[def-multidimensional-rectangle-and-volume]], [[def-multidimensional-grid-partition]], [[def-multidimensional-darboux-sums]], [[def-multidimensional-darboux-integral]], [[def-multidimensional-tagged-partition-and-riemann-sum]], [[thm-multidimensional-darboux-equals-riemann]]).

## Proof

**Proof technique:** direct.

1.1 With one coordinate, nondegeneracy says $a<b$. A grid is one ordinary partition of $[a,b]$, its cells are its subintervals, and their volumes are their lengths. The iterated cell sum has one index and is the ordinary finite sum.  [given, L1, L2]

2.1 Therefore the lower, upper, and tagged sums agree term for term; taking extrema or mesh limits gives identical integrability classes and values.  [step 1.1, L1, L2] ∎
