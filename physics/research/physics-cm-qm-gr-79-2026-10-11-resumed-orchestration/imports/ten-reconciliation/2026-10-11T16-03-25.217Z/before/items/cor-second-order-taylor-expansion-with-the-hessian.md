---
id: cor-second-order-taylor-expansion-with-the-hessian
kind: corollary
title: "Second-order Taylor expansion $f(a+h)=f(a)+\\nabla f(a)\\cdot h+\\tfrac12h^TH_f(a)h+o(\\|h\\|^2)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-multivariable-taylor-formula-with-peano-remainder, def-hessian-and-euclidean-critical-point, def-euclidean-inner-product]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
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

## Proof

**Proof technique:** direct.

1.1 Expand the degree-one and degree-two multi-index sums in [L1]. [L1, algebra]

2.1 The degree-one sum is $\nabla f(a)\cdot h$, while symmetry of the repeated second derivatives identifies the degree-two sum with $\tfrac12\langle H_f(a)h,h\rangle$. [step 1.1, L2, algebra] ∎
