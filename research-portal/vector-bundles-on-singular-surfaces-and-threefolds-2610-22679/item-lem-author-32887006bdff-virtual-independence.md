---
title: Clopen rank extension and genuine representative independence
status: draft
research_item: lem-author-32887006bdff-virtual-independence
dependency_level: 19
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [lem-author-32887006bdff-actual-whitney](item-lem-author-32887006bdff-actual-whitney)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [lem-author-ab0a6fc202cb-clopen-derived-descent](item-lem-author-ab0a6fc202cb-clopen-derived-descent)
- [lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the compatible universe and site-size bounds of the supplied motivic constructions. Let $k$ be a field and $X$ any qcqs $k$-scheme. For arbitrary finite locally free bundles on $X$, extend the supplied classes from constant-rank clopen strata by their unique finite-clopen gluing. The actual series are natural and satisfy Whitney for every exact sequence. Consequently they define a unique natural homomorphism $c_t:K^0_{\rm vb}(X)\to 1+\prod_{i\geq1}H^{2i,i}(X)t^i$ with multiplicative-series target, and $c_t([V]-[W])=c_t(V)c_t(W)^{-1}$ independently of the representative. No identification of $K^0_{\rm vb}$ with perfect $K_0$ on general schemes is asserted.

## Facts & Assumptions

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated size bounds. These are inherited from the actual Whitney, motivic-class, derived-sheaf and virtual-extension constructions in [F1]–[F3] when invoked in steps 1.1–6.1. The finite common rank partition requires no additional arbitrary choice.

[F1] [lem-author-32887006bdff-actual-whitney](item-lem-author-32887006bdff-actual-whitney) proves actual Whitney and root factorization at constant rank; [def-motivic-chern-classes](item-def-motivic-chern-classes) gives naturality.

[F2] For every field $k$, the actual weight-$j$ motivic complex, $j\geq0$, is the restriction of a homotopy-coherent derived Nisnevich sheaf on qcqs schemes over the prime subfield. [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) Finite clopen descent identifies such a sheaf with the product of its values on the pieces, including zero on the empty scheme. [lem-author-ab0a6fc202cb-clopen-derived-descent](item-lem-author-ab0a6fc202cb-clopen-derived-descent) Cohomology commutes with finite derived products, and motivic cohomology is cohomology of the actual complexes. [lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products), [def-motivic-cohomology](item-def-motivic-cohomology)

[F3] [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface) gives the unique extension precisely when the actual exact-sequence identity holds; [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion) gives formal coefficient arithmetic.


**Given:** A field $k$, a qcqs $k$-scheme $X$, AC and the stated compatible universe and site-size bounds.

**Goal:** Close every hypothesis of virtual extension without circularity.

## Proof

1.1 Each bundle has a locally constant rank function, so the common rank loci for a finite bundle family are pairwise disjoint open-and-closed subschemes covering $X$. Quasi-compactness gives a finite subcover, which contains every nonempty locus by disjointness. Each locus is quasi-compact because it is closed in $X$, and quasi-separated because it is open in $X$. Thus this is a finite clopen partition by qcqs $k$-schemes. For empty $X$ use the empty partition. [given, construct]

2.1 Let $F$ be the prime subfield of $k$. Forgetting to $F$ changes neither the underlying qcqs schemes nor the clopen cover and its fiber products. For every $j\geq0$, [F2] therefore supplies the actual derived Nisnevich sheaf and applies finite-clopen descent to exactly this cover. It gives $\mathbb Z(j)_{\mathrm{mot}}(X)\simeq\prod_\alpha\mathbb Z(j)_{\mathrm{mot}}(X_\alpha)$ by restriction. Taking cohomology and using finite-product compatibility in [F2] gives $H^{a,j}(X)\cong\prod_\alpha H^{a,j}(X_\alpha)$ for every integer $a$. The same holds for every finite clopen refinement. Empty covers give the zero complex and zero groups. This argument imposes no algebraic-closure assumption. [A1, F2, step 1.1]

3.1 For each $i\geq1$, use the isomorphism of step 2.1 in bidegree $(2i,i)$ to define $c_i$ as the unique class restricting to the constant-rank values from [F1]. Refinement leaves this class unchanged by uniqueness and naturality of those values. Use the unit for $c_0$. For nonempty $X$ the rank has a finite maximum, so coefficients above that maximum vanish by injectivity of restriction; on empty $X$ all coefficient groups are zero and the series is the prescribed unit. Thus the actual series is a polynomial in every case. [A1, F1, step 1.1, step 2.1, construct]

4.1 Pullback refines the rank partition and preserves the constant-rank classes, hence preserves the glued classes by step 2.1. For an exact sequence, use a common rank partition. On each component apply actual Whitney [F1]; joint injectivity from step 2.1 gives the global identity coefficient by coefficient. The same argument preserves isomorphism invariance. [A1, F1, step 2.1, step 3.1]

5.1 All hypotheses of [F3] now hold. Its construction kills every exact-sequence relation in the presentation of $K^0_{\rm vb}(X)$, so descends to a unique homomorphism. Its value on any difference is the stated quotient, with the inverse defined recursively in formal series, not by convergence. Two differences representing the same class have the same image because this is a map on the presented group. Its naturality also follows from [F3]. Thus this is genuine representative independence. [A1, F3, step 4.1]

6.1 The degree-zero series group is commutative because all coefficient first degrees are even. The product and inverse formulas through degree3 in [F3] therefore apply. In particular higher coefficients need not be additive, whereas $c_1$ is additive on virtual sums and $c_2(x+y)=c_2(x)+c_1(x)c_1(y)+c_2(y)$. [A1, F3, step 5.1] ∎
