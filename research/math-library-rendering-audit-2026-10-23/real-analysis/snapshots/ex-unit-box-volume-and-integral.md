---
id: ex-unit-box-volume-and-integral
kind: example
title: "The unit box in $\\mathbb{R}^m$ has volume $1$, and the integral of a constant $c$ over it is $c$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-multidimensional-rectangle-and-volume, def-multidimensional-grid-partition, def-multidimensional-darboux-sums, def-multidimensional-darboux-integral, lem-finite-sum-laws, def-finite-sum]
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
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
pipeline_run: null
---

## Example

For $Q=[0,1]^m$, $\operatorname{vol}(Q)=1$, and for every constant $c$, $\int_Qc=c$.

## Facts & Assumptions

**Given:** $m\ge1$ and constant $c$.

[L1] Rectangle volume is the finite product of side lengths ([[def-multidimensional-rectangle-and-volume]]).

[L2] Darboux sums and the integral are [[def-multidimensional-darboux-sums]] and [[def-multidimensional-darboux-integral]].

## Verification

**Proof technique:** direct.

1.1 Every side has length $1$, so the finite product volume is $1$.   [L1, given]

1.2 On every cell, both infimum and supremum of the constant function are $c$. Thus both sums are $c\sum_i\operatorname{vol}(Q_i)=c$.   [L2, given]

2.1 Lower and upper integrals therefore both equal $c$.  [step 1.2, L2] ∎
