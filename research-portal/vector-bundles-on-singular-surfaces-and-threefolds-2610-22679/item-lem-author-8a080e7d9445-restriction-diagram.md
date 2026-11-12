---
title: A coherent comparison of the particular open restriction
status: published
research_item: lem-author-8a080e7d9445-restriction-diagram
dependency_level: 11
---

PDF p. 13: Proposition 6.1 support argument

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-8a080e7d9445-geometry](item-lem-author-8a080e7d9445-geometry)
- [thm-author-8a080e7d9445-em-regular-input](item-thm-author-8a080e7d9445-em-regular-input)
- [thm-author-8a080e7d9445-open-natural-classical-input](item-thm-author-8a080e7d9445-open-natural-classical-input)
- [lem-bloch-chow-and-negative-range](item-lem-bloch-chow-and-negative-range)
- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)


## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds of the supplied comparisons. Let $k$ be an algebraically closed field, let $X$ be an affine finite-type $k$-scheme of dimension three, put $U=X_{\mathrm{smooth}/k}$, and let $T\subset X$ be a closed subset contained in $U$. Use the reduced structure on $T$ when a scheme structure is needed. Put $V=U\setminus T$ and $W=X\setminus T$. For the actual arrow $V\hookrightarrow U$, the weight-three motivic restriction diagram is equivalent to the actual cycle restriction diagram
$$[\mathbb Z(3)_{\mathrm{mot}}(U)\to\mathbb Z(3)_{\mathrm{mot}}(V)]\simeq[z^3(U,\bullet)[-6]\to z^3(V,\bullet)[-6]].$$
It follows in particular that its $H^6$ arrow is ordinary Chow restriction. The square is supplied before applying cohomology.

## Facts & Assumptions
**Given:** $k,X,U,T,V,W$ and the choice and size assumptions of the statement.

**Goal:** Construct the stated actual maps and prove their consequence.

[F1] [thm-author-8a080e7d9445-em-regular-input](item-thm-author-8a080e7d9445-em-regular-input) and [lem-author-8a080e7d9445-geometry](item-lem-author-8a080e7d9445-geometry).

[F2] [thm-author-8a080e7d9445-open-natural-classical-input](item-thm-author-8a080e7d9445-open-natural-classical-input) with [lem-bloch-chow-and-negative-range](item-lem-bloch-chow-and-negative-range).

[F3] The assumed Axiom of Choice, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), discharges the foundational hypothesis of the open-natural classical comparison in [F2], used in step 2.1. Both comparison diagrams use the fixed universe bounds. The composition of diagram equivalences makes no additional choice.

[F4] [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex) defines the admissible cycle groups, face differential, and homology of Bloch's cycle complex. Its smooth finite-type hypotheses hold for $U$ and $V$ by [F1], and its Axiom of Choice assumption is retained in [F3].

## Proof
1.1 Apply the natural regular comparison of [F1] to the two regular Noetherian objects of the geometry lemma and their open arrow. This gives an equivalence of arrow diagrams from the motivic arrow to the cdh arrow. It applies although $k$ need not be finitely generated over its prime field. [F1]

2.1 Apply the fixed-site classical interface of [F2] with the single smooth ambient $S=U$ over the fixed perfect field $k$, and restrict its equivalence to the two opens $U$ and $V$. Compose the equivalences of diagrams, inverting only natural equivalences. Its bottom arrow is the actual open restriction on cycles. Taking $H^6$ gives its degree-zero cycle homology arrow, which is ordinary Chow restriction by the completed degree-zero cycle supplier. This establishes the arrow identification before inferring any surjectivity. [F1, F2, F3, F4, step 1.1] ∎
