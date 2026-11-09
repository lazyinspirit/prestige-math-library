---
title: The scheme of nontransverse zero jets has small dimension
status: draft
research_item: lem-author-fc2380accb47-nontransverse-incidence
dependency_level: 3
---

PDF p. 15: Theorem6.7: rank-three Bertini functional

## Prerequisites

- [lem-author-fc2380accb47-coordinate-first-jets](item-lem-author-fc2380accb47-coordinate-first-jets)
- [lem-regular-section-parameter-family](item-lem-regular-section-parameter-family)
- [lem-surjection-kernel-bundle](item-lem-surjection-kernel-bundle)
- [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Use the family and $T=\mathbb A^N$ above. Let $I_W\subset W\times T$ be the universal zero-incidence scheme. On it, differentiation in the $W$ direction defines the intrinsic linear map $d_W\Phi:T_{W/k}\to E$ (pulled back to $I_W$). Let $B\subset I_W$ be its determinant-zero closed subscheme. Then $\dim B\leq N-1$. A point of a specialized zero scheme is outside $B$ exactly when this derivative is an isomorphism. These are equations for the scheme and its derivative, rather than only a count of set-theoretic fibers.

## Facts & Assumptions
**Given:** The smooth three-dimensional $W$, the rank-three $E$, and the surjective first-jet map of the preceding lemma, retaining that lemma's Axiom of Choice assumption.

**Goal:** Bound the complete incidence of nontransverse zeros in every characteristic.

[A1] The Axiom of Choice is inherited from the first-jet family supplier in [F1], where it supplies affine global generation. The subsequent local determinant and dimension calculations introduce no additional choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [lem-author-fc2380accb47-coordinate-first-jets](item-lem-author-fc2380accb47-coordinate-first-jets) constructs the rank-twelve jet bundle and its locally split surjection from $\mathcal O_W^N$ under [A1].

[F2] [lem-regular-section-parameter-family](item-lem-regular-section-parameter-family) constructs the actual universal zero ideal and its parameter fibers. Apply its functional-family construction to $E^\vee$; local dual bases identify $E^{\vee\vee}$ with $E$, so the resulting functional has the same coefficients and zero ideal as the present section of $E$. [lem-surjection-kernel-bundle](item-lem-surjection-kernel-bundle) supplies local splitting.

[F3] Dimension adds for products of finite-type schemes over a field and does not exceed the source dimension on taking image closure. [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input)

## Proof
1.1 On a frame chart the universal section has three coefficients. At a zero, differentiating a change of frame adds $(dG)\Phi=0$, so the derivative transforms by invertible matrices. Hence its determinant-zero condition glues to the stated closed subscheme $B$. In jet space it is the condition that the value part is zero and the derivative, a $3\times3$ matrix, is singular. These equations are pulled back by the actual jet-evaluation morphism of [F1]. [A1, F1, F2, given]

1.2 Singular $3\times3$ matrices form a variety of dimension eight over any field. On a chart where a chosen $2\times2$ minor is invertible, a block matrix has rank at most two precisely when its last entry is the forced Schur complement; the other eight entries are free with that minor inverted. These charts cover rank two. For rank at most one, choosing a nonzero entry as pivot expresses the remaining entries from its row and column, leaving five free parameters; the zero matrix is a further point. Thus the dimension is eight, without a characteristic restriction. The bad jets in each twelve-dimensional jet fiber have zero value and this eight-dimensional derivative locus. [algebra]

2.1 Locally split the surjection of [F1] and trivialize $E$ and $\Omega^1$. The inverse image of that bad-jet locus is locally its product with affine space of dimension $N-12$. Its dimension is therefore at most $\dim W+8+N-12=N-1$ by [F3]. A finite such open cover suffices because $W$ is Noetherian and quasi-compact. This proves the bound globally, and the determinant definition proves the specialized derivative assertion. [F1, F3, step 1.1, step 1.2] ∎
