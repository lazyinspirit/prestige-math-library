---
id: thm-multivariable-second-derivative-test
kind: theorem
title: "The multivariable second-derivative test by definiteness of the Hessian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-second-order-taylor-expansion-with-the-hessian, lem-definite-quadratic-forms-have-a-uniform-sphere-bound, def-euclidean-local-extrema-and-critical-points]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Analysis, Convexity, and Optimization"
      url: "https://www.math.columbia.edu/department/pinkham/Optimizationbook.pdf"
pipeline_run: null
---

## Statement

Let $a$ be a critical point of a $C^2$ scalar field. A positive definite Hessian gives a strict local minimum, a negative definite Hessian gives a strict local maximum, and an indefinite Hessian gives neither. If the Hessian is semidefinite but not definite, the Hessian test gives no conclusion in general.

## Facts & Assumptions
**Given:** A $C^2$ scalar field and a critical point $a$.

[L1] The second-order Taylor expansion has quadratic term $\tfrac12\langle H_f(a)h,h\rangle$ and remainder $o(\|h\|^2)$ ([[cor-second-order-taylor-expansion-with-the-hessian]]).

[L2] A definite quadratic form has a uniform signed bound on the unit sphere ([[lem-definite-quadratic-forms-have-a-uniform-sphere-bound]]).

## Proof

**Proof technique:** direct.

1.1 At a critical point the linear term in [L1] vanishes. [L1, given]

2.1 Write $h=ru$ with $r=\|h\|_2$ and $\|u\|_2=1$ when $h\ne0$. The sign bound in [L2] dominates the $o(r^2)$ remainder for sufficiently small $r$. [step 1.1, L2, algebra]

3.1 This gives the strict minimum and maximum conclusions in the definite cases; two unit directions of opposite quadratic sign give neither extremum in the indefinite case. [step 2.1, algebra]

4.1 For a semidefinite Hessian which is not definite, its quadratic form has a nonzero null direction, so step 2.1 supplies no signed quadratic bound. No universal conclusion is possible: at $0$ the one-variable functions $x^4$, $-x^4$, and $x^3$ all have zero Hessian, but respectively have a strict local minimum, a strict local maximum, and neither. [step 2.1, algebra] ∎
