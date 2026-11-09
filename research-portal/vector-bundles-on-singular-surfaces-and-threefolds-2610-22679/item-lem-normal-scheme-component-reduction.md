---
title: Normal noetherian schemes reduce to integral components
status: draft
research_item: lem-normal-scheme-component-reduction
dependency_level: 1
---

PDF p. 9: Normal schemes and smooth-locus restriction

## Prerequisites

- [lem-author-a9a51f3554f8-normal-ring-product](item-lem-author-a9a51f3554f8-normal-ring-product)
- [math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)
- [math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components)
- [math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume the Axiom of Choice. A noetherian normal scheme $X$ is a finite disjoint union of open-and-closed integral normal subschemes, namely its irreducible components with their restricted structure sheaves. Every affine open $\operatorname{Spec} A\subseteq X$ has $A$ a finite product of noetherian integrally closed domains. Consequently functions, units, line bundles and finite-rank vector bundles are specified componentwise; the rank of a vector bundle is constant on each component.

Here a scheme is noetherian if it has a finite affine open cover by spectra of noetherian rings; it is normal if every local ring is an integrally closed domain. An irreducible space is a nonempty space that is not the union of two proper closed subsets; an irreducible component is a maximal irreducible subset. A scheme is integral if it is irreducible and reduced, where reduced means that its structure sheaf has no nonzero nilpotent local sections. A line bundle is a locally free sheaf of rank one; a finite-rank vector bundle is a locally free sheaf of finite rank, whose rank at a point is the rank on a trivializing neighborhood.

## Statement references

[lem-author-a9a51f3554f8-normal-ring-product](item-lem-author-a9a51f3554f8-normal-ring-product)

[math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)

## Facts & Assumptions

[F1] Under the Axiom of Choice, a normal noetherian ring is a finite product of noetherian integrally closed domains ([lem-author-a9a51f3554f8-normal-ring-product](item-lem-author-a9a51f3554f8-normal-ring-product)).

[F2] Under the Axiom of Choice, a noetherian topological space is a finite union of its irreducible closed components ([math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components)).

[F3] On an affine scheme $\operatorname{Spec} A$, the stalk at a prime $\mathfrak p$ is $A_{\mathfrak p}$ ([math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)). A noetherian ring is normal when all these localizations are integrally closed domains ([math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)).

[A1] The Axiom of Choice is assumed; it supplies the choice used by [F1] and [F2] ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

## Proof

**Given:** A noetherian normal scheme $X$ and the Axiom of Choice.

**Goal:** Prove the finite open-and-closed integral normal decomposition and its stated componentwise consequences.

1.1 Every affine open $U=\operatorname{Spec} A$ has $A$ noetherian: a finite cover of $X$ by noetherian affine opens refines the quasi-compact open $U$ by finitely many principal opens whose coordinate rings are localizations of noetherian rings; the ascending-chain condition on ideals can then be checked after these finitely many localizations, where equality of localized ideals implies equality on $U$. By [F3] and normality of $X$, every prime localization of $A$ is an integrally closed domain. Thus [F1] writes $A$ as a finite product of noetherian integrally closed domains. The corresponding spectra are disjoint open-and-closed subschemes of $U$; each is irreducible and reduced, since it is the spectrum of a domain. In particular, every point of $X$ has an integral affine open neighborhood. [F1, F3, A1, given]

2.1 The underlying topological space of $X$ is noetherian: each member of a finite noetherian affine cover has descending-chain condition on closed sets, and a descending chain of closed subsets of $X$ stabilizes once its restrictions to these finitely many opens stabilize. By [F2], $X$ is the union of finitely many irreducible closed components. If such a component $C$ contains $x$, choose an integral open neighborhood $U$ of $x$ from step 1.1. The nonempty open subset $C\cap U$ is dense in $C$; its closure is contained in the irreducible closure $\overline U$. Maximality of $C$ therefore gives $C=\overline U$. Consequently two components containing $x$ are equal. The finitely many components are thus pairwise disjoint, and each is open as the complement of the union of the others. The empty scheme corresponds to the empty union. [F2, A1, step 1.1]

3.1 Give each open-and-closed component $C$ the restricted structure sheaf. It is irreducible by construction. It is reduced because the integral affine neighborhoods from step 1.1 cover $X$, and nilpotence and vanishing of sections can be checked locally. Its local rings are those of $X$, so they are integrally closed domains; hence $C$ is normal and integral. This proves the decomposition and the affine-ring assertion. [step 1.1, step 2.1, given]

4.1 For a finite disjoint open cover $X=\coprod_i C_i$, restriction and gluing give an equivalence between sheaves on $X$ and tuples of sheaves on the $C_i$: overlaps between different components are empty, so there are no compatibility conditions. Applied to the structure sheaf and its invertible sections, this gives functions and units componentwise; applied to locally free sheaves, it gives line bundles and finite-rank vector bundles componentwise. The rank is locally constant by local freeness; on an irreducible space two disjoint nonempty open rank loci cannot occur, so it is constant on each $C_i$. [step 2.1, step 3.1] ∎
