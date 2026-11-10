---
title: External perfect-field Tate cancellation
status: published
research_item: thm-author-59b1a831fe59-perfect-cancellation
dependency_level: 0
---

PDF p. 7: Lemma2.9: smooth-point supported purity

## Prerequisites

- [Vladimir Voevodsky, Cancellation Theorem, Documenta Mathematica Extra Volume Suslin(2010),671–685 · Corollary4.10 and complete printed proof, p684/PDF14; adjacent Corollary4.9 and its proof; introduction p671/PDF1.](https://www.math.ias.edu/Voevodsky/files/files-original/Dropbox/Published%20versions/cancellation_published.pdf)

## Statement
Let $k$ be perfect. For any $K,L\in DM^{\mathrm{eff}}_-(k)$, tensoring with $\mathbb Z(1)$ induces the natural bijection
$$\operatorname{Hom}(K,L)\xrightarrow{\sim}\operatorname{Hom}(K(1),L(1)).$$
The effective category and integral coefficients are the classical category used by the completed Gysin input. This is valid in every characteristic without a resolution-of-singularities hypothesis.

## Source contract
**Given:** A perfect field and objects of the stated effective motive category.

**Goal:** Import precisely the full-faithfulness needed for coefficient cancellation.

[F1] Voevodsky2010 Corollary4.10 supplies exactly this natural map and bijection.

## External input
Import [F1]. Its deep proof is not locally reconstructed. MVW Theorem16.25's printed proof assumes resolution of singularities, while Remark16.26 explicitly points to the perfect-field theorem; the present import uses the actual published perfect-field result rather than silently discarding the earlier hypothesis.
