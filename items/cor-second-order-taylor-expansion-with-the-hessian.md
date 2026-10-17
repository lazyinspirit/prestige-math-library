---
id: cor-second-order-taylor-expansion-with-the-hessian
kind: corollary
title: "Second-order Taylor expansion $f(a+h)=f(a)+\\nabla f(a)\\cdot h+\\tfrac12h^TH_f(a)h+o(\\|h\\|^2)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-clairaut-schwarz-mixed-partials, cor-multivariable-taylor-formula-with-peano-remainder, def-hessian-and-euclidean-critical-point, def-euclidean-inner-product]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  repair: research/numerical-optimization-dynamics-2026-10-16-owner-step2-preclaimed-published-receipts-CONTINUED-ROOT-1035-v1/cor-second-order-taylor-expansion-with-the-hessian.repair.json
sources:
  scraped: []
  references:
    - title: "MAT237 notes: Taylor's theorem in several variables"
      url: "https://www.math.toronto.edu/courses/mat237y1/20199/notes/Chapter2/S2.6.html"
pipeline_run: null
---

## Statement

For a $C^2$ scalar field near $a$,

$$f(a+h)=f(a)+\nabla f(a)\cdot h+\frac12\langle H_f(a)h,h\rangle+o(\|h\|^2).$$

## Facts & Assumptions

**Given:** A $C^2$ scalar field near $a$.

[L1] The degree-two multi-index Taylor formula has a Peano remainder ([[cor-multivariable-taylor-formula-with-peano-remainder]]).

[L2] Gradient, Hessian, and Euclidean inner-product notation are defined in [[def-hessian-and-euclidean-critical-point]] and [[def-euclidean-inner-product]].

[L3] A $C^2$ scalar field on an open neighborhood has equal mixed second partial derivatives: $\partial_i\partial_j f=\partial_j\partial_i f$ ([[thm-clairaut-schwarz-mixed-partials]]).

## Proof

**Proof technique:** direct.

1.1 Expand the degree-one and degree-two multi-index sums in [L1]. [L1, algebra]

2.1 The degree-one sum is $\nabla f(a)\cdot h$, while symmetry of the repeated second derivatives identifies the degree-two sum with $\tfrac12\langle H_f(a)h,h\rangle$. [step 1.1, L2, L3, algebra] ∎
