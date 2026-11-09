---
title: Rank-three alternating exterior class
status: draft
research_item: def-rank-three-euler-k-class
dependency_level: 12
---

PDF p. 17: Proof of Corollary 6.10, definition of beta

## Prerequisites

- [def-vector-bundle-classes](item-def-vector-bundle-classes)
- [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Definition

Assume the Axiom of Choice and the suitable universes used in the vector-bundle classes definition. Let $X$ be a quasi-compact, quasi-separated scheme and let $E$ be a rank-three vector bundle on $X$: that is, a locally free $\mathcal O_X$-module locally isomorphic to $\mathcal O_X^3$. Write $K_0(X)=\pi_0\mathbb K(\operatorname{Perf}(X))$ for the supplied degree-zero perfect K-theory group, and write $[V]$ for the class in it of a vector bundle $V$ viewed as a complex in degree zero.

The **rank-three alternating exterior class** of $E$ is
$$\beta(E)=[\mathcal O_X]-[E]+[\Lambda^2E]-[\det E]\in K_0(X).$$
Here $\Lambda^iE$ is the $i$th exterior power and $\det E=\Lambda^3E$. Equivalently, in the functional convention, define $\lambda_{-1}(E):=\sum_{i=0}^{3}(-1)^i[\Lambda^iE]$; then $\beta(E)=\lambda_{-1}(E)$. This notation applies the alternating exterior-power expression to the bundle $E$; no extension to arbitrary virtual classes is asserted.

## Definition references

[def-vector-bundle-classes](item-def-vector-bundle-classes)

## Facts & Assumptions

**Given:** A quasi-compact, quasi-separated scheme $X$, a rank-three vector bundle $E$, the Axiom of Choice and suitable universes as above.

**Goal:** Justify that the displayed expression defines an isomorphism-invariant element of $K_0(X)$ and equals the stated alternating sum.

[F1] For such $X$, the supplied $K_0(X)$ is an abelian group, and a vector bundle $V$ has an isomorphism-invariant class $[V]$ in it; its unit is $[\mathcal O_X]$. [def-vector-bundle-classes](item-def-vector-bundle-classes)

[F2] Exterior powers of a rank-three bundle are vector bundles, functorial in the bundle; $\Lambda^0E$ is canonically $\mathcal O_X$, $\det E=\Lambda^3E$, and $\Lambda^iE=0$ for $i>3$. [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)

[F3] The Axiom of Choice is assumed for the supplied perfect K-theory construction underlying the classes in [F1], with the same universe conventions as that supplier. This is the inherited use in step 1.1; the finite alternating-sum calculation requires no additional choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [def-vector-bundle-classes](item-def-vector-bundle-classes)

## Justification

1.1 By [F2], $\mathcal O_X$, $E$, $\Lambda^2E$ and $\det E$ are vector bundles. Their classes exist in the abelian group $K_0(X)$ by [F1], so their indicated sum and differences define an element of that group. An isomorphism $E\cong E'$ induces isomorphisms of the corresponding exterior powers by functoriality; consequently [F1] gives $\beta(E)=\beta(E')$. [given, F1, F2, F3]

2.1 Expanding the four terms in the defining sum for $\lambda_{-1}(E)$ and using $\Lambda^0E\cong\mathcal O_X$ and $\Lambda^3E=\det E$ gives precisely the displayed formula for $\beta(E)$. The higher exterior powers vanish, so the same expression is the full finite alternating exterior-power sum. [F2, step 1.1, algebra] ∎
