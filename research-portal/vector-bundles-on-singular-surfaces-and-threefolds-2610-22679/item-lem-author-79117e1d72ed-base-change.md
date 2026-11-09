---
title: Projective bundle closure and naturality of the actual decomposition
status: draft
research_item: lem-author-79117e1d72ed-base-change
dependency_level: 12
---

PDF p. 2: Motivic projective bundle property; PDF p. 8: Orientation for the splitting principle

## Prerequisites

- [math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme)
- [lem-author-79117e1d72ed-dual-conventions](item-lem-author-79117e1d72ed-dual-conventions)
- [lem-author-79117e1d72ed-bigraded-ring](item-lem-author-79117e1d72ed-bigraded-ring)
- [lem-author-79117e1d72ed-additive-c1](item-lem-author-79117e1d72ed-additive-c1)
- [lem-author-79117e1d72ed-all-bidegrees](item-lem-author-79117e1d72ed-all-bidegrees)
- [def-bigraded-oriented-theory](item-def-bigraded-oriented-theory)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice. The category of qcqs $k$-schemes is closed under the positive-constant-rank projective bundles and their base changes required by the bigraded projective bundle contract. For every finite locally free $E$ of constant rank $r>0$, the decomposition isomorphisms in every integer bidegree $(a,b)$, given by $(x_m)_m\mapsto\sum_{m=0}^{r-1}\pi^*(x_m)c_1(\mathcal O(1))^m$, are natural under base change $f:Y\to X$, using $f^*E$ and the induced map $\bar f:Q_Y(f^*E)\to Q_X(E)$.

## Statement references
[def-bigraded-oriented-theory](item-def-bigraded-oriented-theory)

[lem-author-79117e1d72ed-all-bidegrees](item-lem-author-79117e1d72ed-all-bidegrees)

## Facts & Assumptions
[A1] Assume the Axiom of Choice, as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). It discharges the projective-bundle construction and dual-convention hypotheses in step 1.1, and the all-bidegrees decomposition hypothesis in step 2.1.

[F1] [math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme) gives local projective-space charts and arbitrary base change. [lem-author-79117e1d72ed-dual-conventions](item-lem-author-79117e1d72ed-dual-conventions) identifies their tautological quotient with the source convention.

[F2] [lem-author-79117e1d72ed-bigraded-ring](item-lem-author-79117e1d72ed-bigraded-ring) gives natural ring pullbacks; [lem-author-79117e1d72ed-additive-c1](item-lem-author-79117e1d72ed-additive-c1) gives naturality of $c_1$; [lem-author-79117e1d72ed-all-bidegrees](item-lem-author-79117e1d72ed-all-bidegrees) gives the decomposition.

## Proof
**Given:** $X,Y,f,E$ as stated, and AC.

**Goal:** Check the scheme-category hypotheses and map-level naturality.

1.1 Choose a finite affine cover of $X$ trivializing $E$, possible by quasi-compactness, refining finite affine trivializations. Above each member the projective bundle has finitely many standard affine charts. Hence its total space is quasi-compact. For intersections of two such charts, cover the quasi-compact intersection of their base affines by finitely many affine opens. On each, the intersection is a homogeneous principal chart $D_+(l_1l_2)$ in a relative projective space, hence affine: $l_1,l_2$ are the linear coordinates for the two trivializations. Thus chart intersections are quasi-compact, proving quasi-separatedness. The same argument applies to $Y$ and $f^*E$. [A1, F1, given]

2.1 Under [A1], the decomposition of [F2] applies to both $X$ and $Y$. By base change, $\bar f^*\mathcal O_Q(1)=\mathcal O_{Q_Y(f^*E)}(1)$ and the projection square commutes. Therefore $\bar f^*\xi_X=\xi_Y$ by [F2]. For each summand, $\bar f^*(\pi_X^*x\,\xi_X^m)=\pi_Y^*(f^*x)\,\xi_Y^m$ by functoriality and multiplicativity. Summing proves the decomposition square commutes; it also holds on the zero negative-weight pieces. [A1, F1, F2, step 1.1] ∎
