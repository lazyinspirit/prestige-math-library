---
title: Determinants detect vanishing of the rank-one exterior-dual class
status: draft
research_item: lem-author-394a5b71198d-line-determinant
dependency_level: 14
---

## Prerequisites

- [lem-author-394a5b71198d-exterior-dual-interface](item-lem-author-394a5b71198d-exterior-dual-interface)
- [lem-k-zero-stable-equivalence](item-lem-k-zero-stable-equivalence)
- [def-vector-bundle-classes](item-def-vector-bundle-classes)
- [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume AC. For a line bundle $L$ on a noetherian affine scheme, $\varepsilon(L)=1-[L^\vee]$ in the article\'s perfect $K_0$, and $\varepsilon(L)=0$ if and only if $L\cong\mathcal O_X$. Thus the rank-one vanishing criterion uses the actual line bundle, not an abstract identification of its target groups.

## Facts & Assumptions

**Given:** The hypotheses and data in the statement, with AC and the article's fixed universes wherever perfect K-theory is used.

**Goal:** Establish the asserted conclusion.

[F1] For rank one the exterior-dual sum has only its degree-zero and degree-one terms. [lem-author-394a5b71198d-exterior-dual-interface](item-lem-author-394a5b71198d-exterior-dual-interface)

[F2] The affine perfect/bundle comparison identifies object classes, and equality in the latter group is equivalent to a common finite free stabilization. [def-vector-bundle-classes](item-def-vector-bundle-classes), [lem-k-zero-stable-equivalence](item-lem-k-zero-stable-equivalence)

[F3] Determinant is the top exterior power, with the increasing-wedge local bases. [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)

## Proof

1.1 By [F1], vanishing is exactly $[L^\vee]=[\mathcal O_X]$. By [F2] this yields $L^\vee\oplus\mathcal O_X^N\cong\mathcal O_X^{N+1}$ for some $N\geq0$. Take the top exterior power of this actual isomorphism. Wedge bases give $\det(L^\vee\oplus\mathcal O_X^N)\cong L^\vee$ and $\det(\mathcal O_X^{N+1})\cong\mathcal O_X$; the usual wedge-of-summands map is canonical and glues. Hence $L^\vee\cong\mathcal O_X$, and dualizing gives $L\cong\mathcal O_X$ by local double-dual evaluation. [F1, F2, F3, construct]

2.1 Conversely, if $L$ is trivial, its dual is trivial and the two terms of $1-[L^\vee]$ cancel. This proves the equivalence with the precise spectral class. [F1, step 1.1, algebra] ∎
