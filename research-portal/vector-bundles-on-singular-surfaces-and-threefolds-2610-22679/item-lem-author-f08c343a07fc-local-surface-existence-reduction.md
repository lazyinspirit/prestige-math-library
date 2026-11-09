---
title: Surface existence from rank-three existence on the cylinder
status: draft
research_item: lem-author-f08c343a07fc-local-surface-existence-reduction
dependency_level: 14
---

## Prerequisites

- [lem-author-f08c343a07fc-local-chern-interface](item-lem-author-f08c343a07fc-local-chern-interface)
- [lem-author-f08c343a07fc-local-cylinder-geometry](item-lem-author-f08c343a07fc-local-cylinder-geometry)
- [lem-author-f08c343a07fc-local-stabilized-chern](item-lem-author-f08c343a07fc-local-stabilized-chern)
- [thm-serre-affine-splitting](item-thm-serre-affine-splitting)
- [math:def-chern-classes-of-a-vector-bundle](https://alphabetamath.cc/item/def-chern-classes-of-a-vector-bundle)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume AC. Fix a field $k$, let $X$ be a smooth affine finite-type $k$-scheme of pure dimension two, and put $Y=X\times_k\mathbb A^1_k$. Suppose every triple in $\prod_{i=1}^3\mathrm{CH}^i(Y)$ is realized by a rank-three bundle. Then every $(a_1,a_2)\in\mathrm{CH}^1(X)\times\mathrm{CH}^2(X)$ is realized by a rank-two bundle on $X$.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[F1] The projection and zero section have $ps=\operatorname{id}$ and the cylinder is a smooth affine threefold. [lem-author-f08c343a07fc-local-cylinder-geometry](item-lem-author-f08c343a07fc-local-cylinder-geometry)

[F2] Chern classes are natural between smooth schemes. [math:def-chern-classes-of-a-vector-bundle](https://alphabetamath.cc/item/def-chern-classes-of-a-vector-bundle)

[F3] A rank-three bundle on a noetherian affine surface splits as a trivial line plus a rank-two bundle. [thm-serre-affine-splitting](item-thm-serre-affine-splitting)

[F4] Both $X$ and $Y$ are smooth equidimensional finite-type schemes over $k$, and projection and the zero section are $k$-morphisms. In this scope splitting off a trivial line does not change Chern coefficients. [lem-author-f08c343a07fc-local-stabilized-chern](item-lem-author-f08c343a07fc-local-stabilized-chern)

## Proof

1.1 Realize the triple $(p^*a_1,p^*a_2,0)$ by a rank-three bundle $G$ on $Y$, using the assumed existence. Naturality gives $c_i(s^*G)=s^*p^*a_i=a_i$ for $i=1,2$, since pullback is functorial and $ps=\operatorname{id}$. [F1, F2, given]

2.1 By [F3] write $s^*G\cong\mathcal O_X\oplus E$ with $E$ of rank two. By [F4], $c_i(E)=c_i(s^*G)=a_i$ for $i=1,2$. Thus $E$ realizes the prescribed pair. [F3, F4, step 1.1] ∎
