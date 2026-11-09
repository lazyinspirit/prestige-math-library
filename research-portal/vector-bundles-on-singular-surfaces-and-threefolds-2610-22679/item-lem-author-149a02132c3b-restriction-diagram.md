---
title: A coherent comparison of the particular open restriction
status: draft
research_item: lem-author-149a02132c3b-restriction-diagram
dependency_level: 15
---

PDF p. 13: Proposition 6.1 support argument

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-149a02132c3b-geometry](item-lem-author-149a02132c3b-geometry)
- [thm-author-149a02132c3b-em-regular-input](item-thm-author-149a02132c3b-em-regular-input)
- [thm-author-149a02132c3b-open-natural-classical-input](item-thm-author-149a02132c3b-open-natural-classical-input)
- [lem-bloch-chow-and-negative-range](item-lem-bloch-chow-and-negative-range)


## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the support and comparison constructions. Let $k$ be an algebraically closed field of arbitrary characteristic, let $X$ be an affine finite-type $k$-scheme of Krull dimension three, and let $T\subset X$ be a closed subset contained in the smooth locus $U=X_{\mathrm{smooth}}$ of $X\to\operatorname{Spec}k$. Equip $T$ with its reduced induced structure, and put $V=U\setminus T$ and $W=X\setminus T$. For the actual arrow $V\hookrightarrow U$, the weight-three motivic restriction diagram is equivalent to the actual cycle restriction diagram
$$[\mathbb Z(3)_{\mathrm{mot}}(U)\to\mathbb Z(3)_{\mathrm{mot}}(V)]\simeq[z^3(U,\bullet)[-6]\to z^3(V,\bullet)[-6]].$$
It follows in particular that its $H^6$ arrow is ordinary Chow restriction. The square is supplied before applying cohomology. In the cycle complexes, homological degree $n$ is reindexed as cochain degree $-n$ before the shift by $-6$.

## Facts & Assumptions
**Given:** The hypotheses in the statement, with the Axiom of Choice and fixed universe bounds.

**Goal:** Construct the stated actual maps and prove their consequence.

[F1] [thm-author-149a02132c3b-em-regular-input](item-thm-author-149a02132c3b-em-regular-input) and [lem-author-149a02132c3b-geometry](item-lem-author-149a02132c3b-geometry).

[F2] [thm-author-149a02132c3b-open-natural-classical-input](item-thm-author-149a02132c3b-open-natural-classical-input) with [lem-bloch-chow-and-negative-range](item-lem-bloch-chow-and-negative-range).

[F3] The assumed Axiom of Choice, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), and the fixed size bounds discharge the inherited hypotheses of the geometry and comparison constructions. Their comparison maps are natural transformations on the stated diagrams.

## Proof
1.1 Under the stated Choice and size assumptions, the geometry lemma makes the specified $U$ and $V$ regular Noetherian schemes. Apply the natural regular comparison of [F1] to these two objects and their open arrow. This gives an equivalence of arrow diagrams from the motivic arrow to the cdh arrow. It applies although k need not be finitely generated over its prime field. [F1, F3, given]

2.1 Apply the open-natural classical interface of [F2] over the fixed perfect k. Compose the equivalences of diagrams, inverting only natural equivalences. Its bottom arrow is the actual open restriction on cycles. Taking $H^6$ gives its degree-zero cycle homology arrow, which is ordinary Chow restriction by the completed degree-zero cycle supplier. This establishes the arrow identification before inferring any surjectivity. [F1, F2, step 1.1] ∎
