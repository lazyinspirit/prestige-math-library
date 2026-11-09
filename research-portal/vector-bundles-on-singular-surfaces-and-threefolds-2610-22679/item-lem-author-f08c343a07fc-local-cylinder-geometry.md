---
title: Cylinder and zero section of a smooth affine surface
status: published
research_item: lem-author-f08c343a07fc-local-cylinder-geometry
dependency_level: 0
---

## Prerequisites

- [math:thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring](https://alphabetamath.cc/item/thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring)
- [math:thm-smooth-morphisms-stable-base-change-composition](https://alphabetamath.cc/item/thm-smooth-morphisms-stable-base-change-composition)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:thm-jacobian-criterion-smooth-morphism](https://alphabetamath.cc/item/thm-jacobian-criterion-smooth-morphism)

## Statement
Assume AC. If $X=\operatorname{Spec}A$ is a nonempty smooth affine surface over a field $k$, then $Y=\operatorname{Spec}A[t]=X\times_k\mathbb A^1_k$ is a smooth affine threefold. Projection $p:Y\to X$ and the zero section $s:X\to Y$ satisfy $p s=\operatorname{id}_X$, and therefore $s^*p^*E\cong E$ for every vector bundle $E$.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[F1] A noetherian finite-dimensional ring gains exactly one dimension on adjoining a variable. [math:thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring](https://alphabetamath.cc/item/thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring)

[F2] Smooth morphisms are stable under base change and composition. [math:thm-smooth-morphisms-stable-base-change-composition](https://alphabetamath.cc/item/thm-smooth-morphisms-stable-base-change-composition)

[F3] The finite presentation $k[t]$ has one variable and no equations; its empty Jacobian minor is $1$. Under AC, the relative Jacobian criterion applied with this presentation proves that $\mathbb A^1_k\to\operatorname{Spec}k$ is smooth. [math:thm-jacobian-criterion-smooth-morphism](https://alphabetamath.cc/item/thm-jacobian-criterion-smooth-morphism) The meaning of smooth is fixed in [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes).

## Proof

1.1 The smooth finite-type coordinate ring $A$ is noetherian, and the surface has dimension two. By [F1], $A[t]$ has dimension three. Its finite type over $k$ is immediate from generators for $A$ and $t$. The map $p$ is a base change of the smooth affine line by [F3]; composition with the smooth map $X\to\operatorname{Spec}k$ makes $Y$ smooth by [F2]. [F1, F2, F3]

2.1 The homomorphisms $A\to A[t]$ and $A[t]\to A$, $t\mapsto0$, compose to the identity. Hence $p s=\operatorname{id}_X$. Pullback of sheaves is functorial up to its canonical isomorphism, so $s^*p^*E\cong E$. [construct, step 1.1] ∎
