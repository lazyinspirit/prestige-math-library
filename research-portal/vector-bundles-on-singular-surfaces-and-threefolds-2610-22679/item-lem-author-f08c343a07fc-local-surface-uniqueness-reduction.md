---
title: Surface uniqueness from the cylinder and cancellation
status: published
research_item: lem-author-f08c343a07fc-local-surface-uniqueness-reduction
dependency_level: 14
---

## Prerequisites

- [lem-author-f08c343a07fc-local-chern-interface](item-lem-author-f08c343a07fc-local-chern-interface)
- [lem-author-f08c343a07fc-local-cylinder-geometry](item-lem-author-f08c343a07fc-local-cylinder-geometry)
- [lem-author-f08c343a07fc-local-stabilized-chern](item-lem-author-f08c343a07fc-local-stabilized-chern)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume AC. Let $k$ be an algebraically closed field, let $X$ be a smooth affine finite-type $k$-scheme of pure dimension two, and put $Y=X\times_k\mathbb A^1_k$. Suppose rank-three bundles on $Y$ with equal ordinary Chow Chern triples are isomorphic. If rank-two bundles on $X$ cancel a common trivial line, then rank-two bundles on $X$ with the same first two Chern classes are isomorphic.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[F1] The cylinder is a smooth affine threefold and its zero section retracts projection. [lem-author-f08c343a07fc-local-cylinder-geometry](item-lem-author-f08c343a07fc-local-cylinder-geometry)

[F2] Stabilization and pullback preserve the relevant Chern data, with third class zero. Both schemes are smooth equidimensional and finite type over $k$, and projection and the zero section are $k$-morphisms, as required by this supplier. [lem-author-f08c343a07fc-local-stabilized-chern](item-lem-author-f08c343a07fc-local-stabilized-chern)

[F3] The maps use the ordinary Chow classes, with equality interpreted coefficientwise. [lem-author-f08c343a07fc-local-chern-interface](item-lem-author-f08c343a07fc-local-chern-interface)

## Proof

1.1 Let $E,F$ have equal first two classes. By [F2], $p^*(E\oplus\mathcal O_X)$ and $p^*(F\oplus\mathcal O_X)$ have identical Chern triples. The assumed rank-three uniqueness on $Y$ gives an isomorphism between them. [F1, F2, F3, given]

2.1 Pull back along $s$ and use $s^*p^*=\operatorname{id}$ to obtain $E\oplus\mathcal O_X\cong F\oplus\mathcal O_X$. The assumed cancellation of a common trivial line yields $E\cong F$. [F1, given, step 1.1] ∎
