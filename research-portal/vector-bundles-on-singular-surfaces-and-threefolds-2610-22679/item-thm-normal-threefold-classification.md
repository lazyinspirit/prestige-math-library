---
title: Motivic Chern classification on normal affine threefolds
status: draft
research_item: thm-normal-threefold-classification
dependency_level: 35
---

PDF p. 1: Abstract; PDF p. 2: Theorem B; PDF p. 17: Proof of Theorem B

## Prerequisites

- [def-vector-bundle-classes](item-def-vector-bundle-classes)
- [def-motivic-filtration](item-def-motivic-filtration)
- [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)
- [lem-zero-projection-rank](item-lem-zero-projection-rank)
- [lem-first-projection-chern](item-lem-first-projection-chern)
- [prop-second-projection-chern](item-prop-second-projection-chern)
- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [cor-third-chern-isomorphism](item-cor-third-chern-isomorphism)
- [lem-threefold-chern-prescription](item-lem-threefold-chern-prescription)
- [thm-critical-rank-cancellation](item-thm-critical-rank-cancellation)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume the Axiom of Choice and the site and universe size bounds required by the cited motivic filtration and Chern-class constructions. Let $k$ be an algebraically closed field of arbitrary characteristic and let $X$ be a normal affine finite-type $k$-scheme of Krull dimension three. Then
$$ (c_1,c_2,c_3):\mathrm{Vect}_3(X)\longrightarrow\prod_{i=1}^{3}H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z) $$
is a bijection.

A vector bundle is a finite locally free $\mathcal O_X$-module; $\mathrm{Vect}_3(X)$ is the set of isomorphism classes of bundles of constant rank three. Normal means that every local ring is an integrally closed domain; affine finite type means $X=\operatorname{Spec}A$ for a finitely generated $k$-algebra $A$. Krull dimension is the supremum of lengths of strict chains of irreducible closed subsets. An algebraically closed field is a field in which every nonconstant one-variable polynomial has a root. A perfect complex is locally quasi-isomorphic to a bounded complex of vector bundles, and $K_0(X)$ is the zeroth homotopy group of its nonconnective $K$-theory spectrum. The class of a bundle $E$, viewed as a complex in degree zero, is denoted $[E]$. The group $H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$ is degree-$2i$ cohomology of the weight-$i$ motivic complex, and $c_i$ is the specified motivic Chern operation, evaluated on bundle classes. Choice asserts that every family of nonempty sets has a choice function; the size bounds fix the sites and ambient universes used by the suppliers.

## Facts & Assumptions

**Given:** The field, scheme, choice and size hypotheses in the statement.

**Goal:** Prove that the displayed map is injective and surjective.

[F1] The motivic image filtration $F^jK_0(X)$ is the image of the $j$th filtration stage in $K_0(X)$ and is decreasing. Its actual zeroth and first projections have respective kernels $F^1K_0(X)$ and $F^2K_0(X)$. The zeroth projection is pointwise rank, and the first projection on $F^1$ is the actual first Chern class. The kernel assertions use the descended projections and the stage exact sequence. [def-motivic-filtration](item-def-motivic-filtration) [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence) [lem-zero-projection-rank](item-lem-zero-projection-rank) [lem-first-projection-chern](item-lem-first-projection-chern)

[F2] On $F^2K_0(X)$, the actual second projection is $-c_2$ and has kernel $F^3K_0(X)$. [prop-second-projection-chern](item-prop-second-projection-chern)

[F3] The bundle total Chern series is multiplicative under direct sum. On the affine scheme $X$, its representative-independent virtual extension assigns $c_t([E]-[F])=c_t(E)c_t(F)^{-1}$; it agrees with the actual Chern operations on these classes. [prop-chern-whitney-identities](item-prop-chern-whitney-identities) [def-vector-bundle-classes](item-def-vector-bundle-classes)

[F4] The actual third Chern class is an isomorphism from $F^3K_0(X)$ to $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$. [cor-third-chern-isomorphism](item-cor-third-chern-isomorphism)

[F5] Every triple in the displayed target occurs as the first three Chern classes of a rank-three bundle. [lem-threefold-chern-prescription](item-lem-threefold-chern-prescription)

[F6] For bundles of constant rank at least the dimension on a nonempty affine finite-type scheme over an algebraically closed field, equality of their perfect $K_0$ classes is equivalent to isomorphism. The supplier assumes Choice and its stated universes. [thm-critical-rank-cancellation](item-thm-critical-rank-cancellation) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Proof

1.1 Let $E$ and $F$ be rank-three bundles with $c_i(E)=c_i(F)$ for $i=1,2,3$, and put $\alpha=[E]-[F]\in K_0(X)$. By [F3], the coefficients through degree three of $c_t(\alpha)=c_t(E)c_t(F)^{-1}$ vanish: the two bundle series agree through degree three, so their quotient is $1$ modulo $t^4$. Thus $c_1(\alpha)=c_2(\alpha)=c_3(\alpha)=0$. Both bundles have rank three at every point, so $\alpha$ has pointwise rank zero. [F3, given, algebra]

2.1 The zeroth projection of $\alpha$ is zero by its rank, and [F1] therefore puts $\alpha$ in $F^1K_0(X)$. Its first projection is $c_1(\alpha)=0$; the first kernel assertion in [F1] consequently puts $\alpha$ in $F^2K_0(X)$. [F1, step 1.1]

3.1 By [F2], the second projection of $\alpha$ is $-c_2(\alpha)=0$, so $\alpha\in F^3K_0(X)$. The third Chern class is injective on this group by [F4], and $c_3(\alpha)=0$ by step 1.1. Hence $\alpha=0$ in $K_0(X)$. [F2, F4, step 1.1, step 2.1]

4.1 Since $X$ has dimension three it is nonempty. The bundles $E$ and $F$ have constant rank three, equal to $\dim X$, and step 3.1 gives $[E]=[F]$. Applying [F6] yields $E\cong F$. Thus the displayed map is injective on isomorphism classes. [F6, step 3.1]

5.1 Given any triple in the target, [F5] provides a rank-three bundle having exactly those three classes. This proves surjectivity. Together with step 4.1, the displayed map is a bijection. [F5, step 4.1] ∎
