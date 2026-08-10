---
id: thm-real-analytic-functions-closed-under-algebra-quotients-and-composition
kind: theorem
title: "Real-analytic functions are closed under sums, products and compositions, and under quotients where the denominator is nonzero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-analytic-function, lem-cauchy-product-of-real-power-series, lem-local-composition-of-real-power-series, lem-local-reciprocal-of-a-real-power-series]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Analytic function, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Analytic_function"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "E. Randles, Supplementary Notes for Real Analysis"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
    - title: "Northwestern Math 320-2 lecture notes"
      url: "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
pipeline_run: null
---

## Statement

On open real domains, sums and products of real-analytic functions are real analytic. If $g$ is nonzero throughout the domain, then $f/g$ is real analytic. If $g:U\to V$ and $f:V\to\mathbb R$ are real analytic, then $f\circ g$ is real analytic on $U$.

## Facts & Assumptions

**Given:** Real-analytic functions with compatible domains as in the statement.

[L1] Each function has a convergent local power-series representation at every point ([[def-real-analytic-function]]).

[L2] Products are represented by Cauchy products, local reciprocals exist when the constant term is nonzero, and local compositions have convergent expansions ([[lem-cauchy-product-of-real-power-series]], [[lem-local-reciprocal-of-a-real-power-series]], [[lem-local-composition-of-real-power-series]]).

## Proof

**Proof technique:** cases.

1.1 For sums and products, fix a point and choose local series for the functions by [L1]. Termwise addition gives a convergent series for the sum, while [L2] gives one for the product. [assume-case algebra, L1, L2]

1.2 For a quotient, the denominator is nonzero at the point, so its local series has nonzero constant term. By [L2] it has a local reciprocal series, whose Cauchy product with the numerator series represents the quotient. [assume-case quotient, L1, L2]

1.3 For a composition, centre the outer series at the inner value. The inner series then has zero constant term, and absolute convergence lets one shrink the radius until the sum of the absolute values of its nonconstant terms is smaller than the outer radius. The composition lemma in [L2] then supplies a local series. [assume-case composition, L1, L2]

2.1 The cases in steps 1.1--1.3 are precisely the operations in the statement. Each construction works at every point of the relevant open domain, so the definition [L1] proves all assertions. [step 1.1, step 1.2, step 1.3, L1, cases-exhaustive] ∎
