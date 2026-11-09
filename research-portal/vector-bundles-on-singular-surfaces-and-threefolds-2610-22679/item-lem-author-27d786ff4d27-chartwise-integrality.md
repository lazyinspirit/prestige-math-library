---
title: Swan chartwise integrality glues on the actual quasi-affine open
status: published
research_item: lem-author-27d786ff4d27-chartwise-integrality
dependency_level: 15
---

PDF p. 15: Theorem6.7 second Bertini application

## Prerequisites

- [lem-author-27d786ff4d27-dual-global-controls](item-lem-author-27d786ff4d27-dual-global-controls)
- [lem-author-27d786ff4d27-common-core-nonempty](item-lem-author-27d786ff4d27-common-core-nonempty)
- [lem-author-27d786ff4d27-fixed-locus-avoidance](item-lem-author-27d786ff4d27-fixed-locus-avoidance)
- [thm-author-27d786ff4d27-swan-controlled-bertini](item-thm-author-27d786ff4d27-swan-controlled-bertini)
- [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice. In the integral case let $W=U\setminus(Z\cup U_{\mathrm{sing}})$, and use the finite principal charts $W_i=D(g_i)$ and global controlling family above. There is a nonempty parameter open on which the entire zero scheme in $U$ is a nonempty smooth geometrically integral curve of pure codimension two, avoiding $Z$.

## Facts & Assumptions
**Given:** The Axiom of Choice, the actual global sections, fixed $Z$, and the finite cover of the nonempty smooth integral threefold $W$.

**Goal:** Obtain global irreducibility, not merely smoothness or an expected dimension.

[F1] [lem-author-27d786ff4d27-dual-global-controls](item-lem-author-27d786ff4d27-dual-global-controls) supplies the controlling family on each smooth affine chart.

[F2] [thm-author-27d786ff4d27-swan-controlled-bertini](item-thm-author-27d786ff4d27-swan-controlled-bertini) gives a nonempty parameter open $G_i$ where that chart's zero scheme is empty or a smooth geometrically integral curve, of dimension $3-2=1$.

[F3] [lem-author-27d786ff4d27-common-core-nonempty](item-lem-author-27d786ff4d27-common-core-nonempty) and [lem-author-27d786ff4d27-fixed-locus-avoidance](item-lem-author-27d786ff4d27-fixed-locus-avoidance) provide nonempty-core and avoidance opens. Rational points of finite-type parameter opens use [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input).

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed when invoking the controlling-family supplier in [F1] and its applications in [F3]. The finite intersections of parameter opens and the common-core gluing introduce no further arbitrary choice.

## Proof
1.1 Every $W_i$ is a nonempty open of the integral $X$, so their finite intersection contains a nonempty principal open $O$ of $X$. Apply the common-core lemma to this $O$. Intersect its nonempty open $T_O$, the avoidance open, and all finitely many $G_i$. This is a nonempty open $G\subset\mathbb A^N$, and has a $k$-point. The local Swan conditions apply to the restrictions of the very same global parameter family, since its indexed list contains the controlling sections of each chart. [F1, F2, F3, A1]

2.1 Choose that parameter and let $Y$ be its scheme-theoretic zero locus in $U$. Avoidance places $Y$ in $W$. Each $Y_i=Y\cap W_i$ is smooth geometrically integral of dimension one by [F2], and is nonempty because it contains the nonempty open subset $Y\cap O$. The latter is an open subset of $Y_1$, hence irreducible, and is a nonempty open, therefore dense, in every $Y_i$. Its closure in $Y$ contains every $Y_i$, and these cover $Y$. Thus $Y$ is irreducible; it is smooth and reduced because these are local and hold on this cover. The dimension and codimension assertions follow from those on every chart. [F2, F3, step 1.1]

3.1 The same common-core and open-cover argument survives every extension of $k$: each chart curve is geometrically integral, and the common core remains a nonempty open in it. The extended cover is therefore still irreducible and reduced. Consequently $Y$ is geometrically integral. This proves the assertion for the actual quasi-affine $U$ without claiming that global generation alone implies irreducibility. [F2, step 2.1] ∎
