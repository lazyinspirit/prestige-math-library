---
title: Divisibility of the Picard group of an affine curve
status: published
research_item: prop-affine-curve-picard-divisible
dependency_level: 3
---

PDF p. 13: Ful98 Example 1.6.6

## Prerequisites

- [lem-affine-curve-picard-boundary](item-lem-affine-curve-picard-boundary)
- [lem-author-9ab3274efad8-positive-roots](item-lem-author-9ab3274efad8-positive-roots)
- [lem-author-9ab3274efad8-surjective-image-roots](item-lem-author-9ab3274efad8-surjective-image-roots)
- [lem-author-9ab3274efad8-finite-product-roots](item-lem-author-9ab3274efad8-finite-product-roots)
- [lem-author-9ab3274efad8-picard-disjoint-union](item-lem-author-9ab3274efad8-picard-disjoint-union)
- [lem-author-9ab3274efad8-smooth-affine-components](item-lem-author-9ab3274efad8-smooth-affine-components)
- [thm-author-9ab3274efad8-jacobian-input](item-thm-author-9ab3274efad8-jacobian-input)
- [thm-author-9ab3274efad8-abelian-variety-divisibility-input](item-thm-author-9ab3274efad8-abelian-variety-divisibility-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice. The Picard group of a smooth affine curve over an algebraically closed field is divisible.

A curve is a finite-type scheme of pure dimension one. A line bundle is a locally free module of rank one, and the Picard group consists of its isomorphism classes under tensor product. Divisible means that for each nonzero integer $n$ and each Picard class $L$ there is a class $M$ with $nM = L$; in multiplicative notation this means that the $n$-fold tensor power of $M$ is $L$ for positive $n$.

## Facts & Assumptions

[F1] A smooth connected affine curve $C$ over an algebraically closed field has a smooth projective integral completion $X$, and restriction maps the degree-zero Picard group $\operatorname{Pic}^0(X)$ surjectively onto $\operatorname{Pic}(C)$ ([lem-affine-curve-picard-boundary](item-lem-affine-curve-picard-boundary)).

[F2] For such $X$, $\operatorname{Pic}^0(X)$ is isomorphic to $J(k)$ for an abelian variety $J$ over $k$; multiplication by every positive integer is surjective on $J(k)$, without a characteristic restriction ([thm-author-9ab3274efad8-jacobian-input](item-thm-author-9ab3274efad8-jacobian-input), [thm-author-9ab3274efad8-abelian-variety-divisibility-input](item-thm-author-9ab3274efad8-abelian-variety-divisibility-input)).

[F3] Roots descend along surjective homomorphisms, and finite products retain surjectivity of a fixed positive multiplication map ([lem-author-9ab3274efad8-surjective-image-roots](item-lem-author-9ab3274efad8-surjective-image-roots), [lem-author-9ab3274efad8-finite-product-roots](item-lem-author-9ab3274efad8-finite-product-roots)).

[F4] Under the Axiom of Choice, a smooth affine curve is a finite disjoint union of open and closed connected smooth affine curves, and its Picard group is the product of their Picard groups ([lem-author-9ab3274efad8-smooth-affine-components](item-lem-author-9ab3274efad8-smooth-affine-components), [lem-author-9ab3274efad8-picard-disjoint-union](item-lem-author-9ab3274efad8-picard-disjoint-union)).

[F5] Surjectivity of multiplication by every positive integer is equivalent to divisibility of an abelian group ([lem-author-9ab3274efad8-positive-roots](item-lem-author-9ab3274efad8-positive-roots)).

[A1] Assume the Axiom of Choice, used in the component suppliers ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

**Given:** A smooth affine curve $C$ over an algebraically closed field $k$, and the Axiom of Choice.

**Goal:** Prove $\operatorname{Pic}(C)$ divisible.

## Proof

1.1 First suppose $C$ is connected and fix a positive integer $n$. Choose $X$ and the surjective restriction map $\operatorname{Pic}^0(X) \to \operatorname{Pic}(C)$ from [F1]. By [F2], transport multiplication by $n$ across the group isomorphism $\operatorname{Pic}^0(X) \cong J(k)$; it is surjective on $\operatorname{Pic}^0(X)$, including if the characteristic divides $n$. [F1, F2, A1, given, choose]

2.1 Apply the surjective-image result in [F3] to restriction. Multiplication by $n$ is therefore surjective on $\operatorname{Pic}(C)$. Since $n$ was arbitrary, this holds for every positive integer. [F3, step 1.1]

3.1 In general, decompose $C$ into finitely many connected smooth affine components as in [F4]. Step 2.1 applies to each component. By [F3], multiplication by each positive $n$ is surjective on the finite product of their Picard groups, and [F4] transports that conclusion to $\operatorname{Pic}(C)$. The empty product case is included. [F3, F4, A1, step 2.1]

4.1 By [F5], $\operatorname{Pic}(C)$ is divisible, as required. [F5, step 3.1] ∎
