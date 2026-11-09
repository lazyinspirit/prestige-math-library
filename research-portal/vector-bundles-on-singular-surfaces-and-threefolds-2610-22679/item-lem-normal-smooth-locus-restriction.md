---
title: Smooth-locus restriction properties
status: published
research_item: lem-normal-smooth-locus-restriction
dependency_level: 4
---

PDF p. 9: Functions on the smooth locus; PDF p. 10: Lemmas 5.1 and 5.2; PDF p. 15: Singular locus

## Prerequisites

- [def-article-conventions](item-def-article-conventions)
- [lem-perfect-base-smooth-density](item-lem-perfect-base-smooth-density)
- [lem-codimension-two-extension](item-lem-codimension-two-extension)
- [lem-codimension-two-picard-restriction](item-lem-codimension-two-picard-restriction)
- [math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct](https://alphabetamath.cc/item/lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume the Axiom of Choice. Let $k$ be an algebraically closed field and $X$ a finite-type $k$-scheme. If $X$ is reduced, its smooth locus $U$ is open and meets every irreducible component densely. In particular, this applies to the reduced seminormal schemes in the proof of Lemma 5.1 of the article. If $X$ is normal, then $U$ is dense, $X\setminus U$ has codimension at least two in every irreducible component, and restriction induces isomorphisms $\Gamma(X,\mathcal O_X)\cong\Gamma(U,\mathcal O_U)$ and $\Gamma(X,\mathcal O_X)^\times\cong\Gamma(U,\mathcal O_U)^\times$, as well as an injection $\operatorname{Pic}(X)\hookrightarrow\operatorname{Pic}(U)$.

Here algebraically closed means that every nonconstant polynomial over $k$ has a root in $k$. Finite type means that $X$ has a finite affine cover by spectra of finitely generated $k$-algebras. Reduced means that its local rings have no nonzero nilpotents; normal means that its local rings are integrally closed domains. The smooth locus is the set of points at which the structure morphism $X\to\operatorname{Spec}k$ is smooth. Codimension of a point in an irreducible component is the supremum of the lengths of strict chains of irreducible closed subsets from that component to the closure of the point; the codimension of a subset is the infimum of the codimensions of its points, with the empty subset assigned $+\infty$. A global unit is a global function with a multiplicative inverse. The Picard group is the group of isomorphism classes of line bundles, meaning locally free $\mathcal O_X$-modules of rank one, under tensor product. Restriction is induced by pulling back functions or line bundles along $U\hookrightarrow X$.

## Facts & Assumptions

[F1] The article conventions specify the algebraically closed base field and scheme language ([def-article-conventions](item-def-article-conventions)).

[F2] Under the Axiom of Choice, the smooth locus of a reduced finite-type scheme over a perfect field is open and meets every irreducible component densely; for a normal such scheme its complement has codimension at least two in every component ([lem-perfect-base-smooth-density](item-lem-perfect-base-smooth-density)). A field is perfect when all its algebraic extensions are separable.

[F3] Under the Axiom of Choice, if $X$ is a noetherian normal scheme and an open immersion $j:U\hookrightarrow X$ contains all points of component codimension at most one, then $\mathcal O_X\to j_*\mathcal O_U$ is an isomorphism. Consequently global functions and global units restrict isomorphically ([lem-codimension-two-extension](item-lem-codimension-two-extension)).

[F4] Under the same hypotheses as [F3], restriction $\operatorname{Pic}(X)\to\operatorname{Pic}(U)$ is injective ([lem-codimension-two-picard-restriction](item-lem-codimension-two-picard-restriction)).

[F5] Every polynomial algebra in finitely many variables over a field is noetherian ([math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct](https://alphabetamath.cc/item/lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct)).

[A1] The Axiom of Choice, asserting that every family of nonempty sets has a choice function, is assumed for [F2], [F3], and [F4] ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

## Proof

**Given:** The Axiom of Choice, an algebraically closed field $k$, and a finite-type $k$-scheme $X$.

**Goal:** Prove the smooth-density assertion for reduced $X$ and the codimension, function, unit, and Picard assertions for normal $X$.

1.1 The field $k$ is perfect: if $L/k$ is algebraic and $a\in L$, its minimal polynomial over $k$ is irreducible and has a root in $k$ by algebraic closedness. It is therefore linear, so $a\in k$ and is separable over $k$. Thus every algebraic extension is separable. If $X$ is reduced, [F2] now shows that its smooth locus is open and meets every irreducible component densely. This applies in particular whenever a scheme in the article's seminormal setting is reduced; no further property of seminormality is used here. [F1, F2, A1, given]

2.1 Suppose $X$ is normal. Every integrally closed domain is reduced, so $X$ is reduced. Each coordinate ring in a finite affine cover of $X$ is a quotient of a finite-variable polynomial ring over $k$. By [F5] and the correspondence between ideals of a quotient and ideals containing its kernel, each such coordinate ring is noetherian. Hence $X$ is a noetherian normal scheme in the sense required by [F3] and [F4]. By [F2] and step 1.1, $U$ is open and dense and its complement has codimension at least two in every irreducible component. Consequently $U$ contains every point of component codimension zero or one. [F2, F5, A1, step 1.1, given]

3.1 Apply [F3] to $j:U\hookrightarrow X$ using step 2.1. It gives $\mathcal O_X\cong j_*\mathcal O_U$, and therefore the stated isomorphisms on global functions and global units. Applying [F4] to the same open immersion gives injectivity on Picard groups. Together with steps 1.1 and 2.1, these are all the asserted conclusions. [F3, F4, A1, step 1.1, step 2.1] ∎
