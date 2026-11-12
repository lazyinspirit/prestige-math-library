---
title: Free stabilization passes through global sections
status: published
research_item: lem-author-f08c343a07fc-cancel-module-stabilization
dependency_level: 2
---

## Prerequisites

- [lem-author-f08c343a07fc-cancel-module-classes](item-lem-author-f08c343a07fc-cancel-module-classes)
- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)
- [math:def-direct-sum-of-a-family-of-modules](https://alphabetamath.cc/item/def-direct-sum-of-a-family-of-modules)
- [math:def-free-module-on-a-set-and-standard-basis](https://alphabetamath.cc/item/def-free-module-on-a-set-and-standard-basis)


## Statement
Assume AC. Let $A$ be a commutative ring with $1$, put $X=\operatorname{Spec}A$, and let $E,F$ be vector bundles on $X$. For an integer $N\geq0$, $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$ if and only if $\Gamma(X,E)\oplus A^N\cong\Gamma(X,F)\oplus A^N$. All modules here are finite projective.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated equivalence and finite projectivity.

[A1] AC is assumed for the affine equivalence and the isomorphism-class criterion below; no additional choice is used here. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] A vector bundle means a finite locally free sheaf, and a finite projective module means a finitely generated module with the lifting property through surjective module maps. The affine equivalence between these objects preserves finite direct sums and sends $A^N$ to $\mathcal O_X^N$. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

[F2] For any two vector bundles on $X$, they are isomorphic if and only if their modules of global sections are isomorphic. [lem-author-f08c343a07fc-cancel-module-classes](item-lem-author-f08c343a07fc-cancel-module-classes)

[F3] The commutative unital ring $A$ supplies the affine scheme $X=(\operatorname{Spec}A,\mathcal O_{\operatorname{Spec}A})$; write $\mathcal O_X$ for its structure sheaf. [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring) [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[F4] A finite module direct sum has coordinatewise operations. Write $A^N=\bigoplus_{i=1}^N A$, with its indexed standard basis. The finite direct sum of module sheaves is the sheaf of tuples, with componentwise restriction maps; in particular $(E\oplus F)(U)=E(U)\oplus F(U)$ for every open $U\subseteq X$. Write $\mathcal O_X^N$ for the $N$-fold such sum. Empty sums are zero, so $A^0=0$ and $\mathcal O_X^0=0$. [math:def-direct-sum-of-a-family-of-modules](https://alphabetamath.cc/item/def-direct-sum-of-a-family-of-modules) [math:def-free-module-on-a-set-and-standard-basis](https://alphabetamath.cc/item/def-free-module-on-a-set-and-standard-basis)

## Proof

1.1 Put $B=E\oplus\mathcal O_X^N$ and $C=F\oplus\mathcal O_X^N$. The tuple construction in [F4] is a sheaf because compatible tuples glue uniquely componentwise. Intersecting local trivializing neighbourhoods shows that $B,C$ are finite locally free, including $N=0$. Thus [F1] applies to $E,F,B,C$ and gives finite projective section modules and identifications $\Gamma(X,B)\cong\Gamma(X,E)\oplus A^N$ and $\Gamma(X,C)\cong\Gamma(X,F)\oplus A^N$. It also gives finite projectivity of $A^N$, corresponding to $\mathcal O_X^N$. If $B\cong C$, applying the forward direction of [F2] and these identifications gives the asserted module isomorphism. AC enters only through [F1] and [F2]. [A1, F1, F2, F3, F4, given]

2.1 Conversely, a module isomorphism $\Gamma(X,E)\oplus A^N\cong\Gamma(X,F)\oplus A^N$ and the identifications in step 1.1 give $\Gamma(X,B)\cong\Gamma(X,C)$. Since $B,C$ are vector bundles, the reverse direction of [F2] gives $B\cong C$: this is precisely the affine equivalence's passage back from sections to bundles. This proves the converse, and step 1.1 supplies the forward direction and finite projectivity. [A1, F1, F2, step 1.1] ∎
