---
title: Finite clopen common rank strata
status: published
research_item: lem-author-ab0a6fc202cb-finite-common-rank-strata
dependency_level: 2
---

PDF p. 8: Computations after the splitting principle

## Prerequisites

- [lem-flag-tower-line-quotients](item-lem-flag-tower-line-quotients)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)
- [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)
- [math:thm-gluing-ringed-and-locally-ringed-spaces](https://alphabetamath.cc/item/thm-gluing-ringed-and-locally-ringed-spaces)


## Statement
Assume AC. Let $X$ be a quasi-compact quasi-separated scheme and $E_1,\ldots,E_m$ a finite family of finite locally free sheaves, with no fixed-rank assumption. The nonempty common rank loci $X_\alpha$, where $\alpha=(r_1,\ldots,r_m)$ and $\operatorname{rank}E_i=r_i$, form a finite partition by open-and-closed qcqs subschemes. Their disjoint union is canonically isomorphic to $X$. Each $E_i|_{X_\alpha}$ has constant rank $r_i$. The simultaneous flag towers $q_\alpha:Y_\alpha\to X_\alpha$ form a qcqs finite disjoint union $q:Y=\coprod_\alpha Y_\alpha\to X$. Rank-zero bundles have empty filtrations and require no projectivization; if every rank on a stratum is zero the tower is the identity there. The empty scheme has the empty partition and identity tower.

## Facts & Assumptions

**Given:** AC, the scheme $X$ and its finite family of bundles. A vector bundle means a finite locally free sheaf of $\mathcal O_X$-modules. Its rank at a point is the chart-independent finite free rank supplied by [F3]. Quasi-compact means that every open cover has a finite subcover. As in [F1], quasi-separated means that the intersection of any two quasi-compact open subsets is quasi-compact; qcqs means both properties. An open-and-closed subset is also called clopen.

**Goal:** Establish finiteness, category membership and the stated componentwise construction.

[F1] The flag construction gives finite projective towers for positive-constant-rank bundles, preserves qcqs, and uses the identity for rank zero. Its constant-rank simultaneous construction supplies locally split line-quotient filtrations for a finite family. Only that constant-rank part is used here. [lem-flag-tower-line-quotients](item-lem-flag-tower-line-quotients)

[F2] AC is retained for the choices used in the flag construction of [F1]; the finite rank partition itself needs no additional choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F3] Finite locally free sheaves have well-defined, locally constant finite rank functions: chart ranks agree at overlaps by invariant basis number for the nonzero local stalk rings. Restriction to an open subscheme preserves local freeness and this rank function. Rank zero means the zero sheaf. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[F4] A scheme is a locally ringed space locally isomorphic to affine schemes; the empty space is allowed. An open subscheme $U$ is $(U,\mathcal O_X|_U)$. A morphism of schemes is a morphism of locally ringed spaces. [math:def-scheme](https://alphabetamath.cc/item/def-scheme), [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme), [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[F5] Compatible locally ringed spaces glue along open overlaps. For pairwise empty overlaps this constructs their disjoint union with its componentwise structure sheaf. [math:thm-gluing-ringed-and-locally-ringed-spaces](https://alphabetamath.cc/item/thm-gluing-ringed-and-locally-ringed-spaces)

## Proof

1.1 By [F3], each rank function is well-defined and locally constant. A common rank locus is the finite intersection of its rank fibers, hence open; its complement is the union of the other such open loci, hence also open. Thus every common rank locus is clopen, and they partition $X$. Give each locus the restricted structure sheaf of [F4], so it is an open subscheme. The restrictions of the bundles have the prescribed constant ranks by [F3]. [given, F3, F4]

2.1 These pairwise disjoint loci form an open cover of $X$. Quasi-compactness gives a finite subcover; disjointness means every nonempty locus occurs in that subcover, so there are finitely many. Each locus is quasi-compact: extend any of its relative open covers by $X\setminus X_\alpha$ to cover $X$ and take a finite subcover. It is quasi-separated, since its quasi-compact opens are also quasi-compact opens in $X$, with the same intersections. Glue the loci along empty overlaps using [F5]. The resulting locally ringed space is a scheme by [F4], since its affine neighbourhoods are those in the components. Its open sets and sections identify with those of $X$: on an open $V$ the sheaf axiom gives $\mathcal O_X(V)\cong\prod_\alpha\mathcal O_X(V\cap X_\alpha)$. The component inclusions therefore induce the canonical scheme isomorphism $\coprod_\alpha X_\alpha\cong X$. [F4, F5, step 1.1, construct]

3.1 On each locus apply the constant-rank simultaneous construction in [F1] to the restricted bundles and concatenate the finitely many towers. Each $Y_\alpha$ is qcqs. Glue these schemes along empty overlaps using [F5], obtaining $Y$ with sections $\mathcal O_Y(V)=\prod_\alpha\mathcal O_{Y_\alpha}(V\cap Y_\alpha)$; [F4] again gives a scheme. Finitely many quasi-compact components make $Y$ quasi-compact by taking a finite subcover on each component. For any two quasi-compact opens $A,B$ in $Y$, the sets $A\cap Y_\alpha$ and $B\cap Y_\alpha$ are quasi-compact: the components are closed, and the closed-subset cover argument of step 2.1 applies. They are open in $Y_\alpha$, so their intersections are quasi-compact by its quasi-separatedness. Their finite union $A\cap B$ is quasi-compact. Thus $Y$ is quasi-separated. Define $q$ on $Y_\alpha$ as $q_\alpha$ followed by $X_\alpha\hookrightarrow X$. These maps give a continuous map, and their sheaf maps define its sheaf map componentwise by the displayed product. At each point its stalk map is the local homomorphism of the corresponding component map, so [F4] makes $q$ a scheme morphism. [F1, F2, F4, F5, step 2.1, construct]

4.1 The zero-rank cases use the zero sheaf of [F3] and the identity convention of [F1]. If every rank on a stratum is zero, its concatenation is empty and its tower is the identity. If the bundle family is empty and $X$ is nonempty, there is one common rank locus, indexed by the empty tuple, and its tower is also the identity. If $X$ is empty, there are no nonempty loci; the empty disjoint union is the empty scheme and its unique endomorphism is its identity, by [F4]. No bound on the dimension of $X$, no noetherianity, connectedness or integrality, and no global rank constancy was used. This proves the claims. [F1, F3, F4, step 1.1, step 2.1, step 3.1] ∎
