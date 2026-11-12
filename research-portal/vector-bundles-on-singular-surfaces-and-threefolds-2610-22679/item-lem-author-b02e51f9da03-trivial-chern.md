---
title: The actual Chern series of a trivial bundle is the unit
status: published
research_item: lem-author-b02e51f9da03-trivial-chern
dependency_level: 24
---

## Prerequisites

- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [lem-author-4f94f7982b0d-actual-whitney](item-lem-author-4f94f7982b0d-actual-whitney)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [math:def-chern-classes-of-a-vector-bundle](https://alphabetamath.cc/item/def-chern-classes-of-a-vector-bundle)
- [math:lem-operational-chern-classes-and-whitney-formula](https://alphabetamath.cc/item/lem-operational-chern-classes-and-whitney-formula)
- [math:def-intersection-with-a-cartier-divisor-and-first-chern-class](https://alphabetamath.cc/item/def-intersection-with-a-cartier-divisor-and-first-chern-class)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)


## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied motivic Chern constructions. Let $k$ be a field. For every integer $m\geq0$, the actual total motivic Chern series of the trivial bundle on any qcqs $k$-scheme $X$ is $c_t(\mathcal O_X^m)=1$. On any smooth equidimensional $k$-scheme $X$ of finite type, the same identity holds for the ordinary integral Chow Chern series. These statements refer to the actual projective-relation classes and their Whitney formulas. A formal variable $t$ records degree, so $c_t(V)=1+\sum_{i\geq1}c_i(V)t^i$.

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated compatible site and universe bounds. These are inherited from the actual motivic Chern and Whitney suppliers when they are applied below; AC is also required by the ordinary Chow suppliers. The finite direct-sum and coefficient calculations add no further choice principle.

**Given:** The field, schemes and integer in the statement, AC and the stated compatible site and universe bounds for the actual motivic constructions.

**Goal:** Establish the stated conclusion in each of the two supplied theories.

[F1] The completed actual motivic Whitney formula and additive first-Chern orientation hold for these classes; a line has no higher classes and $c_t(0)=1$. The actual motivic coefficients are invariant under bundle isomorphism. [prop-chern-whitney-identities](item-prop-chern-whitney-identities), [lem-author-4f94f7982b0d-actual-whitney](item-lem-author-4f94f7982b0d-actual-whitney), [def-motivic-chern-classes](item-def-motivic-chern-classes)

[F2] For the ordinary first Chern operation, $c_1(\mathcal O_X)\cap\alpha=0$ for every Chow class $\alpha$. On a smooth equidimensional $k$-scheme of finite type the corresponding Chow class is its value on the fundamental class and hence is zero. A line has no higher Chern classes, Whitney holds, and $c_t(0)=1$. [math:def-intersection-with-a-cartier-divisor-and-first-chern-class](https://alphabetamath.cc/item/def-intersection-with-a-cartier-divisor-and-first-chern-class), [math:def-chern-classes-of-a-vector-bundle](https://alphabetamath.cc/item/def-chern-classes-of-a-vector-bundle), [math:lem-operational-chern-classes-and-whitney-formula](https://alphabetamath.cc/item/lem-operational-chern-classes-and-whitney-formula)

[F3] Fields and schemes over a base are as in [math:def-field](https://alphabetamath.cc/item/def-field) and [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base); a $k$-scheme includes its structure morphism $X\to\operatorname{Spec}k$. Qcqs means quasi-compact and quasi-separated, with the latter requiring quasi-compact intersections of affine open subschemes, as in [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme). A vector bundle is a finite locally free $\mathcal O_X$-module, and a line bundle has rank one. The trivial rank-$m$ bundle is the sheaf $U\mapsto\mathcal O_X(U)^m$ with componentwise restrictions; $\mathcal O_X^0=0$ and $\mathcal O_X^1=\mathcal O_X$. These are the conventions of [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank).

[F4] Tensor products mean sheafification of the sectionwise module tensor product, as in [math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product), with scalars in $\mathcal O_X$. A finite direct sum of module sheaves is given by tuples of sections, with componentwise restrictions and scalar action. Its sheaf condition follows by gluing each coordinate, and local frames concatenate. The coordinate inclusions and projections identify $\mathcal O_X^m$ with the direct sum of $m$ copies of $\mathcal O_X$; the empty sum is the zero sheaf. The tensor-unit identification used in step 1.1 is proved there explicitly.

[F5] Smoothness and finite type in the Chow assertion refer to the structure morphism $X\to\operatorname{Spec}k$, in the senses of [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) and [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism). Equidimensional means that all maximal irreducible closed subsets of $X$ have the same dimension. Here irreducible means nonempty and not a union of two proper closed subsets, and dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets. This is a formulation convention; no dimension theorem is used in the proof.

## Proof

1.1 On sections, multiplication $a\otimes b\mapsto ab$ and $a\mapsto a\otimes1$ are mutually inverse: tensor balancing gives $a\otimes b=ab\otimes1$. These maps commute with restriction and therefore induce inverse sheaf maps $\mathcal O_X\otimes_{\mathcal O_X}\mathcal O_X\cong\mathcal O_X$ after sheafification. Isomorphism invariance and tensor-additivity now give $c_1(\mathcal O_X)=c_1(\mathcal O_X\otimes_{\mathcal O_X}\mathcal O_X)=2c_1(\mathcal O_X)$ for the motivic trivial line. Subtracting in its coefficient group yields zero. Higher line classes vanish, so its total series is 1. The ordinary Chow trivial line has the same unit series by [F2]. [A1, F1, F2, F3, F4, F5, algebra]

2.1 For $m>0$, use the coordinate direct-sum identification in [F4] and iterate the respective actual two-summand Whitney formula over the $m$ trivial line summands. The product is $1^m=1$. For $m=0$ the zero-bundle convention gives the same result. Thus both assertions include all finite stabilizations. [A1, F1, F2, F3, F4, F5, step 1.1] ∎
