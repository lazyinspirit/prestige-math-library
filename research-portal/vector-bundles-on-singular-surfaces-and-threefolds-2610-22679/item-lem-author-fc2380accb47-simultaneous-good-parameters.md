---
title: One nonempty parameter open gives smooth-locus avoidance and transversality
status: draft
research_item: lem-author-fc2380accb47-simultaneous-good-parameters
dependency_level: 4
---

PDF p. 15: Theorem6.7: rank-three Bertini functional

## Prerequisites

- [lem-author-fc2380accb47-normal-smooth-strata](item-lem-author-fc2380accb47-normal-smooth-strata)
- [lem-author-fc2380accb47-coordinate-first-jets](item-lem-author-fc2380accb47-coordinate-first-jets)
- [lem-author-fc2380accb47-nontransverse-incidence](item-lem-author-fc2380accb47-nontransverse-incidence)
- [lem-regular-section-parameter-family](item-lem-regular-section-parameter-family)
- [lem-surjection-kernel-bundle](item-lem-surjection-kernel-bundle)
- [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
In the preceding setting with $X$ normal of dimension at most three, there is a nonempty Zariski open $T^\circ\subset T$ such that the zero scheme of every parameter over any field extension whose point factors through $T^\circ$ avoids $D=X\setminus W$ and has invertible derivative at every zero in $W$. In particular $T^\circ$ has a $k$-rational parameter. On a pure threefold the forbidden incidence over the singular locus has dimension at most $N-2$; with lower-dimensional components permitted it has dimension at most $N-1$.

## Facts & Assumptions
**Given:** The actual universal family on $X$, with $W,D$ as defined above, retaining the Axiom of Choice assumed by its first-jet construction.

**Goal:** Choose a parameter meeting both requirements simultaneously, without characteristic-zero generic smoothness or an assumed dominant projection.

[A1] The Axiom of Choice is inherited from the first-jet family in [F2] and the nontransverse-incidence supplier in [F3]. It is used there for affine global generation; the subsequent dimension and open-complement argument makes no additional arbitrary choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [lem-author-fc2380accb47-normal-smooth-strata](item-lem-author-fc2380accb47-normal-smooth-strata) gives $\dim D\leq2$, or $\leq1$ in pure dimension three.

[F2] [lem-author-fc2380accb47-coordinate-first-jets](item-lem-author-fc2380accb47-coordinate-first-jets) gives value generation on $X$. [lem-regular-section-parameter-family](item-lem-regular-section-parameter-family) identifies incidence and all its base changes; [lem-surjection-kernel-bundle](item-lem-surjection-kernel-bundle) makes the value kernel a rank-$(N-3)$ bundle, also after restriction to $D$.

[F3] [lem-author-fc2380accb47-nontransverse-incidence](item-lem-author-fc2380accb47-nontransverse-incidence) bounds $B$ by $N-1$. Image closures, product dimensions and rational closed points use [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input).

## Proof
1.1 Under [A1], use the given family of [F2]. The zero-incidence scheme $I_D$ over $D$ is the total space of the kernel of the surjection $\mathcal O_D^N\to E|_D$. Indeed local splitting identifies its equations with three independent parameter coordinates set to zero. Its dimension is at most $\dim D+N-3\leq N-1$, and in pure dimension three it is at most $N-2$. This is a scheme dimension bound even when $D$ is singular. [A1, F1, F2, F3]

2.1 By [F3], the closures of the images of $I_D$ and $B$ in $T$ have dimension at most $N-1$. Their union is a proper closed subset of the irreducible $N$-dimensional affine space $T$. Let $T^\circ$ be its complement. It is nonempty and has a closed $k$-rational point by the Jacobson/residue-field assertion in [F3]. Thus the parameter exists over the original field, not merely over an unspecified extension. [F3, step 1.1]

3.1 By definition of those image closures, their open complement has empty inverse image in $I_D$ and $B$. This remains true after any field extension. Therefore every corresponding zero lies in $W$ with nonzero derivative determinant. This controls actual incidence schemes and all geometric zeros. No generic-smoothness assertion from the total dimension of $I_W$ is used, and no dominance of $I_W\to T$ is required for this conclusion. The next lemma identifies its actual fibers over $T^\circ$, including its generic fiber. [F2, F3, step 2.1] ∎
