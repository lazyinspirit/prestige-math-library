---
title: First Chern class factors through determinant
status: published
research_item: prop-first-chern-determinant
dependency_level: 23
---

PDF p. 8: Proposition3.2, perfect-complex first class and determinant

## Prerequisites

- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [prop-motivic-weight-one](item-prop-motivic-weight-one)
- [lem-author-ec13f1db88a5-perfect-determinant](item-lem-author-ec13f1db88a5-perfect-determinant)
- [lem-author-ec13f1db88a5-all-perfect-factorization](item-lem-author-ec13f1db88a5-all-perfect-factorization)
- [lem-author-ec13f1db88a5-bundle-comparison](item-lem-author-ec13f1db88a5-bundle-comparison)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the fixed compatible site-size and universe bounds required by the supplied perfect K-theory, derived-section and weight-one constructions. Let $k$ be any field and $X$ any qcqs $k$-scheme. For the specified perfect-complex spectral $K_0(X)$, the first motivic Chern class is the actual rank-reduced first-layer map constructed by rank reduction, and it factors naturally as
$$K_0(X)\xrightarrow{\det_X}\operatorname{Pic}(X)\xrightarrow{\gamma_X\,\sim}H^{2,1}_{\rm mot}(X,\mathbb Z).$$
The first arrow is the extended perfect-complex determinant and the second is the actual EM weight-one orientation. For a line-filtered bundle its determinant is the tensor product of the line factors and the first classes add. On actual and virtual vector-bundle classes this agrees with their supplied projective-relation and total-series first coefficients. No global equality of vector-bundle K zero with perfect K zero is assumed.

## Statement references
[lem-author-ec13f1db88a5-all-perfect-factorization](item-lem-author-ec13f1db88a5-all-perfect-factorization)

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible site-size and universe bounds in the Statement. They are inherited through the all-perfect first-layer construction in [F2] at step 1.1 and its determinant and bundle comparisons in [F1]–[F3] at steps 1.1–2.1.

[F1] [lem-author-ec13f1db88a5-perfect-determinant](item-lem-author-ec13f1db88a5-perfect-determinant) constructs the natural determinant on exactly the specified perfect $K_0$.

[F2] [lem-author-ec13f1db88a5-all-perfect-factorization](item-lem-author-ec13f1db88a5-all-perfect-factorization) supplies the actual first-layer class on every perfect class and the displayed factorization. [prop-motivic-weight-one](item-prop-motivic-weight-one) identifies its second arrow as a natural isomorphism.

[F3] [lem-author-ec13f1db88a5-bundle-comparison](item-lem-author-ec13f1db88a5-bundle-comparison) identifies the existing bundle and virtual first classes and proves the line-factor formula.

## Proof
**Given:** $k,X$ and perfect class as stated.

**Goal:** Establish the full qcqs arbitrary-field proposition and its existing-class compatibility.

1.1 Use [F1] for the first arrow and the canonical orientation of [F2] for the second. By [F2] their composite is exactly $c_1^{\rm perf}$ defined from the actual first EM layer, on every class of the specified $K_0$. This proves the full factorization, including perfect complexes lacking global bounded vector-bundle representatives. [F1, F2, A1]

2.1 Apply [F3] to actual/virtual bundle classes and line filtrations. Their first classes and determinant tensor products are the same classes in the composite of step 1.1. Both arrows are natural by [F1]–[F2], so this is a natural factorization on all qcqs schemes over every field, as asserted. [F1, F2, F3, step 1.1, A1] ∎
