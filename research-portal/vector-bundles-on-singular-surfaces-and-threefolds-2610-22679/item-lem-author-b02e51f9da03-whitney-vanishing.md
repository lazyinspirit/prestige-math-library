---
title: Stable triviality forces vanishing of the actual Chern coefficients
status: published
research_item: lem-author-b02e51f9da03-whitney-vanishing
dependency_level: 25
---

## Prerequisites

- [lem-author-b02e51f9da03-trivial-chern](item-lem-author-b02e51f9da03-trivial-chern)
- [def-stably-free-bundles](item-def-stably-free-bundles)
- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [lem-author-4f94f7982b0d-actual-whitney](item-lem-author-4f94f7982b0d-actual-whitney)
- [math:lem-operational-chern-classes-and-whitney-formula](https://alphabetamath.cc/item/lem-operational-chern-classes-and-whitney-formula)
- [math:def-chern-classes-of-a-vector-bundle](https://alphabetamath.cc/item/def-chern-classes-of-a-vector-bundle)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)


## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied motivic Chern constructions. If $E$ is stably trivial on a qcqs scheme over a field, all its positive motivic Chern classes vanish. If the scheme is smooth and equidimensional of finite type, all its positive ordinary integral Chow Chern classes vanish too. In either theory, this follows by applying the actual Whitney formula to a stable trivialization, without assuming that Chern classes of actual bundles depend only on an unspecified K-zero class.

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated compatible site and universe bounds. These are inherited from the actual motivic Chern and Whitney suppliers when they are applied below; their finite direct-sum and coefficient calculations add no further choice principle.


**Given:** The data and hypotheses in the statement, AC and the stated compatible site and universe bounds for the actual motivic constructions.

**Goal:** Establish the stated conclusion.

[F1] There is an actual stable isomorphism $E\oplus\mathcal O_X^N\cong\mathcal O_X^{r+N}$. [def-stably-free-bundles](item-def-stably-free-bundles)

[F2] In each of the stated theories trivial bundles have the unit Chern series. [lem-author-b02e51f9da03-trivial-chern](item-lem-author-b02e51f9da03-trivial-chern)

[F3] The actual motivic and Chow direct-sum Whitney formulas hold, and Chern classes are invariant under bundle isomorphism. [prop-chern-whitney-identities](item-prop-chern-whitney-identities), [lem-author-4f94f7982b0d-actual-whitney](item-lem-author-4f94f7982b0d-actual-whitney), [math:lem-operational-chern-classes-and-whitney-formula](https://alphabetamath.cc/item/lem-operational-chern-classes-and-whitney-formula), [math:def-chern-classes-of-a-vector-bundle](https://alphabetamath.cc/item/def-chern-classes-of-a-vector-bundle), [def-motivic-chern-classes](item-def-motivic-chern-classes)

[F4] The motivic coefficients are $c_i(V)\in H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$; in the smooth case the ordinary coefficients are $c_i(V)\in A^i(X)$, the integral Chow groups with their supplied products. In either theory $c_0(V)=1$ and coefficients above the rank are zero, including the rank-zero convention. Write $c_t(V)=\sum_{i\geq0}c_i(V)t^i$. Here a formal series is its coefficient list; equality means equality in every degree, and multiplication has degree-$i$ coefficient $\sum_{a+b=i}u_av_b$. Its unit is the list $(1,0,0,\ldots)$, so multiplication by this list leaves each coefficient unchanged. All such sums in a fixed degree are finite. These conventions use no convergence or K-zero identification. [def-motivic-chern-classes](item-def-motivic-chern-classes), [math:def-chern-classes-of-a-vector-bundle](https://alphabetamath.cc/item/def-chern-classes-of-a-vector-bundle), [prop-chern-whitney-identities](item-prop-chern-whitney-identities)

[F5] The scheme hypotheses are interpreted as follows. Qcqs means quasi-compact and quasi-separated, with the latter requiring quasi-compact intersections of affine open subschemes. Smoothness and finite type refer to the structural morphism $X\to\operatorname{Spec}k$. A finite-type morphism is locally of finite type and quasi-compact. Equidimensional means that all maximal irreducible closed subsets of $X$ have the same dimension; here irreducible means nonempty and not a union of two proper closed subsets, and dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets. This is only a formulation convention; no dimension theorem is used in the argument. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme), [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

## Proof

1.1 Apply the actual direct-sum formula to the isomorphism in [F1]. Isomorphism invariance and [F2] give $c_t(E)\cdot1=c_t(E)c_t(\mathcal O_X^N)=c_t(\mathcal O_X^{r+N})=1$. This argument applies independently to both the motivic and the ordinary Chow operations under their stated hypotheses. [A1, F1, F2, F3, F4, F5]

2.1 Equality of formal series is equality of coefficients. Hence $c_i(E)=0$ for every $i\geq1$ in each applicable coefficient group. No cancellation of bundles and no comparison inferred from equality of groups has entered this deduction. [A1, F4, step 1.1, algebra] ∎
