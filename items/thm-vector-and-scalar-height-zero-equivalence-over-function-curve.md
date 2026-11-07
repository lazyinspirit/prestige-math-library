---
id: thm-vector-and-scalar-height-zero-equivalence-over-function-curve
kind: theorem
title: "Vector and scalar canonical heights have the same zero set"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-adelic-metrized-line-bundle-over-function-curve
  - def-vector-valued-height-over-finitely-generated-field
  - thm-function-field-admissible-canonical-metric-existence
  - thm-function-field-adelic-intersection-product-exists
  - thm-vector-valued-adelic-intersection-theory
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields"
      url: "https://arxiv.org/pdf/1810.06342v2"
      locator: "§2.4, Definition 2.11"
    - title: "Alexander Carney, Heights and arithmetic dynamics over finitely generated fields"
      url: "https://arxiv.org/pdf/2010.07200v1"
      locator: "§1.2, Definition 1.2 and the base-$k$ case for a one-variable extension"
verification: {}
proof_strategy: direct
---

## Statement

Let $K=\mathbb F_q(B)$ be a global function field with finite full constant field, let $X/K$ be projective, and let $(X,f,L,d)$ be polarized. For every $P\in X(\overline K)$, let $h_f^{\mathrm{vec}}(P)$ be the vector-valued canonical height class on the projective model of $K/\mathbb F_q$, and let $h_f^{\mathrm{sc}}(P)$ be the real-valued height obtained by taking its arithmetic degree. Then
$$
h_f^{\mathrm{vec}}(P)\equiv0\quad\Longleftrightarrow\quad h_f^{\mathrm{sc}}(P)=0,
$$
where $\equiv0$ means numerical triviality, namely zero intersection against every nef test class on the base curve.

## Statement references

[[def-adelic-metrized-line-bundle-over-function-curve]]

[[def-vector-valued-height-over-finitely-generated-field]]

[[thm-function-field-admissible-canonical-metric-existence]]

[[thm-vector-valued-adelic-intersection-theory]]

## Facts & Assumptions

**Given:** A global function field $K=\mathbb F_q(B)$; a projective variety $X/K$; a polarization $(f,L,d)$; and an algebraic point $P$.

[F1] In transcendence degree one over the finite constant field, the vector-valued point height is the completed divisor-class intersection on the base curve, and applying arithmetic degree gives the usual scalar function-field canonical height. ([[def-vector-valued-height-over-finitely-generated-field]], [[def-adelic-metrized-line-bundle-over-function-curve]], [[thm-function-field-admissible-canonical-metric-existence]], [[thm-vector-valued-adelic-intersection-theory]])

[F2] For a projective integral curve, a divisor class is numerically trivial exactly when it has degree zero: the only one-dimensional cycle to test is the curve itself, so the numerical pairing is its degree. ([[def-adelic-metrized-line-bundle-over-function-curve]])

## Proof

1.1 By [F1], the scalar height is the arithmetic degree of the vector-valued height class. [given, F1]

2.1 By [F2], that class is numerically trivial exactly when its arithmetic degree is zero. Substituting the identification in step 1.1 gives the asserted equivalence. [given, F2, step 1.1, algebra] ∎
