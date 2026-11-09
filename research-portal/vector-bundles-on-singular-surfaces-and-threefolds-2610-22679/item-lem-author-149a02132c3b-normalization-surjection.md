---
title: The divisor presentation and actual Picard surjection
status: published
research_item: lem-author-149a02132c3b-normalization-surjection
dependency_level: 17
---

PDF p. 13: Proposition 6.1 support argument

## Prerequisites

- [lem-author-149a02132c3b-geometry](item-lem-author-149a02132c3b-geometry)
- [lem-author-149a02132c3b-support-fiber](item-lem-author-149a02132c3b-support-fiber)
- [lem-affine-curve-normalization-interface](item-lem-affine-curve-normalization-interface)
- [lem-curve-support-divisor-complex](item-lem-curve-support-divisor-complex)
- [prop-affine-curve-picard-divisible](item-prop-affine-curve-picard-divisible)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the motivic and support constructions. Let $k$ be an arbitrary algebraically closed field, let $X$ be an affine finite-type $k$-scheme of Krull dimension three, and put $U=X_{\mathrm{smooth}}$. Let $T\subset X$ be a closed integral curve contained in $U$, with normalization $\nu:\widetilde T\to T$. Let $U_d\subset U$ be the open-and-closed relative-dimension stratum containing $T$. If $d=3$, the fixed-support group is the actual divisor quotient
$$\mathrm{CH}^3_T(U)=\operatorname{coker}(k(T)^\times\xrightarrow{\operatorname{div}_T}\bigoplus_{x\in T\ \mathrm{closed}}\mathbb Z[x]),$$
and normalization gives the surjection $q:\operatorname{Pic}(\widetilde T)\twoheadrightarrow\mathrm{CH}^3_T(U)$ induced by $[y]\mapsto[\nu(y)]$. If $d<3$, this supported group is zero. Thus the support-fiber identification gives an actual surjection from a divisible group onto $H^{6,3}_{\mathrm{mot},T}(X,\mathbb Z)$.

## Facts & Assumptions
**Given:** The algebraically closed field $k$, affine finite-type threefold $X$, smooth locus $U$, closed integral curve $T\subset U$, normalization and stratum specified in the statement, the Axiom of Choice, and the fixed site and universe bounds.

**Goal:** Construct the stated actual maps and prove their consequence.

[F1] [lem-author-149a02132c3b-geometry](item-lem-author-149a02132c3b-geometry) and [lem-author-149a02132c3b-support-fiber](item-lem-author-149a02132c3b-support-fiber).

[F2] [lem-affine-curve-normalization-interface](item-lem-affine-curve-normalization-interface), [lem-curve-support-divisor-complex](item-lem-curve-support-divisor-complex) and [prop-affine-curve-picard-divisible](item-prop-affine-curve-picard-divisible) apply with the stated Choice and size assumptions. Their normalization, divisor and Picard constructions use the Axiom of Choice, recorded by [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). The Picard divisibility includes all nonzero integers, with no characteristic restriction.

## Proof
1.1 The curve is affine by the geometry lemma. The completed normalization supplier therefore gives finite smooth affine $\widetilde T$ over the perfect field, with every closed residue field equal to k. On the smooth pure-three-dimensional stratum containing T, the completed divisor supplier gives its displayed quotient and the actual pushforward $q$. It proves that pushforward sends principal divisors to the length-order divisor downstairs, with residue degrees one; hence the map descends and is surjective, even if T is singular. The other open-and-closed strata do not meet T and contribute zero support. [F1, F2]

2.1 If T instead lies on a smooth stratum of dimension $d<3$, there are no codimension-three cycles in degree zero on that stratum; hence $z_T^3(U,0)=0$ and $H_0z_T^3(U)=0$. This branch is zero and already divisible. In the dimension-three case the completed affine Picard supplier makes $\operatorname{Pic}(\widetilde T)$ divisible by every nonzero integer, including the characteristic when the characteristic is positive. Compose $q$ with the actual supported-comparison isomorphism of the support-fiber lemma, obtaining the claimed surjection to supported motivic cohomology. [F1, F2, step 1.1] ∎
