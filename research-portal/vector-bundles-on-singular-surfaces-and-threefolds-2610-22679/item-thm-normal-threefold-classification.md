---
title: Motivic Chern classification on normal affine threefolds
status: published
research_item: thm-normal-threefold-classification
dependency_level: 38
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 1, abstract; p. 2, Theorem B; p. 17, proof of Theorem B
      statement: The first three motivic Chern classes classify rank-three vector
        bundles on a normal affine threefold over an algebraically closed field.
      hypotheses: Normal affine threefold of finite type over an algebraically closed
        field.
      reading_limits: "Read the frozen article extraction at PDF p. 1, abstract; p. 2,
        Theorem B; p. 3, conventions; p. 12, injectivity proof of Theorem A; and
        p. 17, proof of Theorem B. Read the assigned generated body and the
        declared local supplier contracts for their applications, including the
        actual-to-virtual comparison in
        lem-author-3cde9692a7e9-first-class-and-coefficients, Statement and
        Proof step 3.1. The motivic constructions, source proofs behind those
        suppliers and cancellation theorem are not independently reconstructed
        or newly accepted here. The sole direct consumer
        cor-rank-two-threefold-existence was read in full: its use of the
        unchanged surjectivity statement needs no repair. This is a
        generated-argument repair; no new original-author defect or independent
        repair acceptance is asserted."
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
- [lem-author-3cde9692a7e9-first-class-and-coefficients](item-lem-author-3cde9692a7e9-first-class-and-coefficients)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)
- [` Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and threefolds · PDF p. 1, abstract; p. 2, Theorem B; p. 17, proof of Theorem B `](https://arxiv.org/abs/2610.22679v1)

## Statement
Assume the Axiom of Choice and the site and universe size bounds required by the cited motivic filtration and Chern-class constructions. Let $k$ be an algebraically closed field of arbitrary characteristic and let $X$ be a normal affine finite-type $k$-scheme of Krull dimension three. Then
$$ (c_1,c_2,c_3):\mathrm{Vect}_3(X)\longrightarrow\prod_{i=1}^{3}H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z) $$
is a bijection.

A vector bundle is a finite locally free $\mathcal O_X$-module; $\mathrm{Vect}_3(X)$ is the set of isomorphism classes of bundles of constant rank three. Normal means that every local ring is an integrally closed domain; affine finite type means $X=\operatorname{Spec}A$ for a finitely generated $k$-algebra $A$. Krull dimension is the supremum of lengths of strict chains of irreducible closed subsets. An algebraically closed field is a field in which every nonconstant one-variable polynomial has a root. A perfect complex is locally quasi-isomorphic to a bounded complex of vector bundles, and $K_0(X)$ is the zeroth homotopy group of its nonconnective $K$-theory spectrum. The class of a bundle $E$, viewed as a complex in degree zero, is denoted $[E]$. The group $H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$ is degree-$2i$ cohomology of the weight-$i$ motivic complex, and $c_i$ is the specified motivic Chern operation, evaluated on bundle classes. Choice asserts that every family of nonempty sets has a choice function; the size bounds fix the sites and ambient universes used by the suppliers.

## Facts & Assumptions

**Given:** The field, scheme, choice and size hypotheses in the statement.

**Goal:** Prove that the displayed map is injective and surjective.

[F0] Fields, schemes over the base, and affine schemes use [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) and [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme). The integrally closed domains in the normality hypothesis have the meaning of [math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain). Quasi-compact and quasi-separated have the meanings in [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme). Since $X$ is affine, it is quasi-compact under Choice by [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact) and quasi-separated by [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated). Thus all qcqs suppliers below apply to $X$. Here a $k$-algebra is a commutative unital ring $A$ with a specified unit-preserving homomorphism $k\to A$; finitely generated means that some finite tuple $a_1,\ldots,a_m$ in $A$ expresses every element of $A$ as a polynomial in that tuple with coefficients from $k$. Algebraic closedness is the root condition in the Statement. An irreducible closed subset is nonempty and is not the union of two proper closed subsets; a strict chain with $n+1$ members has length $n$. The empty space has no such chains, so it cannot have dimension three. These conventions require neither irreducibility nor equidimensionality of $X$.

[A1] Assume Choice as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and compatible universes with the closure convention in [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), large enough for the supplied scheme sites, perfect categories and motivic constructions. The existence of these universes and the required site-size bounds are separate assumptions, not consequences of Choice. Choice is used for affine quasi-compactness in [F0] and is inherited when applying [F1]–[F7] in steps 1.1–5.1, in particular the bundle-class and actual-to-virtual comparison, filtration, Chern-prescription and cancellation constructions. The finite formal-series calculation makes no additional choice.

[F1] The motivic image filtration $F^jK_0(X)$ is the image of the $j$th filtration stage in $K_0(X)$ and is decreasing. Its actual zeroth and first projections have respective kernels $F^1K_0(X)$ and $F^2K_0(X)$. The zeroth projection is pointwise rank, and the first projection on $F^1$ is the actual first Chern class. The kernel assertions use the descended projections and the stage exact sequence. [def-motivic-filtration](item-def-motivic-filtration) [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence) [lem-zero-projection-rank](item-lem-zero-projection-rank) [lem-first-projection-chern](item-lem-first-projection-chern)

[F2] On $F^2K_0(X)$, the actual second projection is $-c_2$ and has kernel $F^3K_0(X)$. [prop-second-projection-chern](item-prop-second-projection-chern)

[F3] The bundle total Chern series is multiplicative under direct sum, and its representative-independent virtual extension on the bundle Grothendieck group sends a difference to the quotient of the bundle series. [prop-chern-whitney-identities](item-prop-chern-whitney-identities) The canonical bundle-to-perfect map sends each bundle generator to its degree-zero perfect class; it is an isomorphism for affine $X$. [def-vector-bundle-classes](item-def-vector-bundle-classes) Crucially, the actual perfect total Chern operations restrict along this map to that virtual series, in every coefficient, and their first coefficient is exactly the completed perfect first class used by [F1]. [lem-author-3cde9692a7e9-first-class-and-coefficients](item-lem-author-3cde9692a7e9-first-class-and-coefficients) Hence on this $X$ the actual perfect coefficients of $[E]-[F]$ are precisely those of $c_t(E)c_t(F)^{-1}$, including degrees one through three. This uses the operation comparison, not merely the affine isomorphism of groups.

[F4] The actual third Chern class is an isomorphism from $F^3K_0(X)$ to $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$. [cor-third-chern-isomorphism](item-cor-third-chern-isomorphism)

[F5] Every triple in the displayed target occurs as the first three Chern classes of a rank-three bundle. [lem-threefold-chern-prescription](item-lem-threefold-chern-prescription)

[F6] For bundles of constant rank at least the dimension on a nonempty affine finite-type scheme over an algebraically closed field, equality of their perfect $K_0$ classes is equivalent to isomorphism. The supplier assumes Choice and its stated universes. [thm-critical-rank-cancellation](item-thm-critical-rank-cancellation) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F7] The groups in the target are the cohomology of the specified integral motivic complexes, as in [def-motivic-cohomology](item-def-motivic-cohomology). The bundle Chern maps and their invariance under bundle isomorphism are supplied by [def-motivic-chern-classes](item-def-motivic-chern-classes), so the displayed map is well-defined on $\mathrm{Vect}_3(X)$. Its values on bundle classes are the restrictions of the same actual perfect operations appearing in [F1], [F2] and [F4], by [lem-author-3cde9692a7e9-first-class-and-coefficients](item-lem-author-3cde9692a7e9-first-class-and-coefficients).

## Proof

1.1 By [F0] and [F7], the Chern map is defined on the stated bundle classes. Let $E$ and $F$ be rank-three bundles with $c_i(E)=c_i(F)$ for $i=1,2,3$, and put $\alpha=[E]-[F]\in K_0(X)$. By [F3], the coefficients through degree three of $c_t(\alpha)=c_t(E)c_t(F)^{-1}$ vanish: the two bundle series agree through degree three, so their quotient is $1$ modulo $t^4$. Thus $c_1(\alpha)=c_2(\alpha)=c_3(\alpha)=0$. Both bundles have rank three at every point, so $\alpha$ has pointwise rank zero. [A1, F0, F3, F7, given, algebra]

2.1 The zeroth projection of $\alpha$ is zero by its rank, and [F1] therefore puts $\alpha$ in $F^1K_0(X)$. Its first projection is $c_1(\alpha)=0$; the first kernel assertion in [F1] consequently puts $\alpha$ in $F^2K_0(X)$. [A1, F1, step 1.1]

3.1 By [F2], the second projection of $\alpha$ is $-c_2(\alpha)=0$, so $\alpha\in F^3K_0(X)$. The third Chern class is injective on this group by [F4], and $c_3(\alpha)=0$ by step 1.1. Hence $\alpha=0$ in $K_0(X)$. [A1, F2, F4, step 1.1, step 2.1]

4.1 Since $X$ has dimension three it is nonempty. The bundles $E$ and $F$ have constant rank three, equal to $\dim X$, and step 3.1 gives $[E]=[F]$. Applying [F6] yields $E\cong F$. Thus the displayed map is injective on isomorphism classes. [A1, F0, F6, step 3.1]

5.1 Given any triple in the target, [F5] provides a rank-three bundle having exactly those three classes. This proves surjectivity. Together with step 4.1, the displayed map is a bijection. [A1, F5, step 4.1] ∎
