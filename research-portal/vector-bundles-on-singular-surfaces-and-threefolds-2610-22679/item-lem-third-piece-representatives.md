---
title: Rank-three representatives with two zero Chern classes
status: draft
research_item: lem-third-piece-representatives
dependency_level: 28
---

PDF p. 15: First sentence of Theorem 6.7 proof

## Prerequisites

- [def-motivic-filtration](item-def-motivic-filtration)
- [lem-critical-rank-representatives](item-lem-critical-rank-representatives)
- [lem-second-piece-rank-determinant](item-lem-second-piece-rank-determinant)
- [prop-second-projection-chern](item-prop-second-projection-chern)
- [lem-second-chern-additive](item-lem-second-chern-additive)
- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the site and universe size bounds required by the completed filtration and Chern comparisons. Let $k$ be an algebraically closed field and let $X$ be a normal affine $k$-scheme of finite type and dimension three. Every $\alpha\in F^3_{\mathrm{mot}}K_0(X)$ can be written
$$\alpha=[P]-[\mathcal O_X^3]$$
for a rank-three vector bundle $P$ with $c_1(P)=0$, $c_2(P)=0$, and $\det P\cong\mathcal O_X$.

A vector bundle is a finite locally free $\mathcal O_X$-module, and rank three means that it is locally isomorphic to $\mathcal O_X^3$. Its determinant is the line bundle $\bigwedge^3P$. Normal means that every local ring is an integrally closed domain; finite type means that the affine coordinate ring is a finitely generated $k$-algebra. Dimension is the supremum of lengths of strict chains of irreducible closed subsets. Here $K_0(X)=\pi_0K(X)$ for the specified nonconnective K-theory spectrum of perfect complexes, and $[P]$ denotes the class of $P$ concentrated in degree zero. The subgroup $F^i_{\mathrm{mot}}K_0(X)$ is the image of the zeroth homotopy group of the $i$th motivic filtration stage in $K_0(X)$. The bundle Chern classes $c_i(P)$ lie in $H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$ and are the classes defined by the supplied motivic projective-bundle relation. Choice asserts that every family of nonempty sets has a choice function; the size bounds fix the sites and ambient universes of the cited comparisons.

## Facts & Assumptions

**Given:** $k$, $X$, $\alpha$, Choice, and the site and universe bounds as stated.

**Goal:** Construct a rank-three representative and prove the two Chern-class vanishings and determinant triviality.

[F1] The motivic image filtration is decreasing: $F^3_{\mathrm{mot}}K_0(X)\subseteq F^2_{\mathrm{mot}}K_0(X)$. [def-motivic-filtration](item-def-motivic-filtration)

[F2] Every class in the second image piece has pointwise rank zero and first perfect Chern class zero. If it is a difference of two bundle classes, the two bundles have isomorphic determinants. [lem-second-piece-rank-determinant](item-lem-second-piece-rank-determinant)

[F3] Under Choice as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and suitable universes, every pointwise rank-zero perfect K-zero class on a nonempty affine finite-type field-scheme of dimension three has the form $[P]-[\mathcal O_X^3]$ with $P$ of constant rank three. [lem-critical-rank-representatives](item-lem-critical-rank-representatives)

[F4] On the second image piece, the actual second projection $p_2$ is minus the actual perfect second Chern operation, and its kernel is the third image piece. No injectivity of the third stage into K-zero is required. [prop-second-projection-chern](item-prop-second-projection-chern)

[F5] For a bundle difference $[V]-[W]$ in the second image piece, the actual perfect operation satisfies $c_2([V]-[W])=c_2(V)-c_2(W)$. [lem-second-chern-additive](item-lem-second-chern-additive)

[F6] The total bundle Chern class is multiplicative on direct sums, and a line bundle has no Chern classes above degree one. [prop-chern-whitney-identities](item-prop-chern-whitney-identities)

## Proof

**Proof technique:** Represent the rank-zero class at the critical rank, then apply the actual filtration projections and bundle comparison.

1.1 Since $X$ has dimension three it is nonempty. By [F1], $\alpha$ lies in the second image piece, so [F2] gives pointwise rank zero. Applying [F3] yields a rank-three vector bundle $P$ with $\alpha=[P]-[\mathcal O_X^3]$. [F1, F2, F3, given]

2.1 The bundle-difference assertion of [F2], applied to the expression in step 1.1, gives $\det P\cong\det(\mathcal O_X^3)$. The standard basis trivializes the latter determinant, so $\det P\cong\mathcal O_X$. The first perfect Chern class of $\alpha$ is zero by [F2]; its bundle-difference comparison in the same supplied contract, together with the first-class normalization for the trivial determinant, gives $c_1(P)=0$. Equivalently, the determinant comparison identifies $c_1(P)$ with the image of the trivial line under the weight-one orientation. [F2, step 1.1]

2.2 Since $\alpha$ belongs to the third image piece, [F4] gives $p_2(\alpha)=0$, hence $c_2(\alpha)=0$. By [F5] and step 1.1, $c_2(\alpha)=c_2(P)-c_2(\mathcal O_X^3)$. The latter trivial bundle is a direct sum of three trivial lines. Its total Chern class is $1$: the first class of the trivial line is zero by the determinant normalization in [F2], its higher classes vanish by [F6], and [F6] multiplies the three total classes. Thus $c_2(\mathcal O_X^3)=0$, and consequently $c_2(P)=0$. [F2, F4, F5, F6, step 1.1]

3.1 Steps 1.1 through 2.2 prove all the stated assertions. [step 1.1, step 2.1, step 2.2] ∎
