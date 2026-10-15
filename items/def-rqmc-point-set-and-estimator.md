---
id: def-rqmc-point-set-and-estimator
kind: definition
title: "Randomized quasi-Monte Carlo point sets and estimators"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-star-discrepancy-and-digital-net
  - def-probability-measure
  - def-random-element-and-real-random-variable
  - def-integrable-real-and-complex-functions-and-their-integrals
justified_by: []
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
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.1"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Pierre L’Ecuyer and Christiane Lemieux, Recent Advances in Randomized Quasi-Monte Carlo Methods, §§1, 5"
      url: "https://www.math.uwaterloo.ca/~clemieux/papers/survey01.pdf"
---

## Definition

Let $d,n\ge1$ and let $X_1,\ldots,X_n$ be measurable random elements of
$[0,1)^d$. The array is **marginally uniform** if every $X_i$ has normalized
Lebesgue law on the cube; the points need not be independent. An
**RQMC design** consists of marginal uniformity together with a separately
stated low-discrepancy condition. For a family indexed by $n$, one such
condition is an almost-sure bound $D_n^*(X_1,\ldots,X_n)\le\delta_n$ with
deterministic $\delta_n\to0$, where $D_n^*$ is the star discrepancy of
[[def-star-discrepancy-and-digital-net]]. For a fixed $n$, an exact net-count
property may instead be declared; no star-discrepancy rate follows merely
from marginal uniformity.

For a Borel function $f$ integrable on the cube, set
$$I(f)=\int_{[0,1)^d}f(x)\,dx,\qquad \widehat I_n(f)=\frac1n\sum_{i=1}^n f(X_i).$$
An **independent full-set randomization** is an independent copy of the whole
vector $(X_1,\ldots,X_n)$. Independence is across copies, not among points
within one copy. The point count $n$ and number of independent
randomizations $R$ are separate parameters.
