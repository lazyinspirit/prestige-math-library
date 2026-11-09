---
title: Normalization and the curve divisor quotient
status: published
research_item: lem-author-1437578267d2-normalization-quotient
dependency_level: 11
---

PDF p. 13: Divisor presentation for supported degree six

## Prerequisites

- [lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders)
- [lem-author-1437578267d2-graph-boundary](item-lem-author-1437578267d2-graph-boundary)
- [thm-author-1437578267d2-curve-norm-input](item-thm-author-1437578267d2-curve-norm-input)
- [lem-affine-curve-normalization-interface](item-lem-affine-curve-normalization-interface)
- [lem-algebraically-closed-residue-fields](item-lem-algebraically-closed-residue-fields)
- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)
- [math:thm-equivalent-characterisations-of-a-dvr](https://alphabetamath.cc/item/thm-equivalent-characterisations-of-a-dvr)
- [math:thm-cartier-divisors-mod-principal-to-picard](https://alphabetamath.cc/item/thm-cartier-divisors-mod-principal-to-picard)
- [math:cor-finite-morphism-proper](https://alphabetamath.cc/item/cor-finite-morphism-proper)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume AC. Let $T$ be an integral affine finite-type curve over an algebraically closed field, $\nu:C=\widetilde T\to T$ its normalization, and $K=k(T)=k(C)$. Write $Q(D)=Z_0(D)/\operatorname{div}_D(k(D)^\times)$. Then $\nu_*\operatorname{div}_C(f)=\operatorname{div}_T(f)$ for $f\in K^\times$, and $\nu_*$ induces $Q(C)\twoheadrightarrow Q(T)$. Explicitly, $\operatorname{ord}_x(f)=\sum_{y\in\nu^{-1}(x)}\operatorname{ord}_y(f)$, with DVR valuations upstairs and length orders downstairs. There is a canonical identification $\operatorname{Pic}(C)=\mathrm{CH}^1(C)=Q(C)$ sending $\mathcal O_C(y)$ to $[y]$; hence normalization induces a surjection from this Picard group to $Q(T)$. Here $\operatorname{Pic}$ is the group of isomorphism classes of line bundles under tensor product and $\mathrm{CH}^1$ is degree-zero Bloch homology.

## Facts & Assumptions
**Given:** AC and the curve and normalization in the Statement.

**Goal:** Establish divisor compatibility, surjectivity and the source identification.

[F1] Normalization is finite, smooth and integral, has the same function field, and has nonempty finite closed fibers with residue fields $k$. Finite morphisms are proper under AC. [lem-affine-curve-normalization-interface](item-lem-affine-curve-normalization-interface), [lem-algebraically-closed-residue-fields](item-lem-algebraically-closed-residue-fields), [math:cor-finite-morphism-proper](https://alphabetamath.cc/item/cor-finite-morphism-proper), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F2] Proper dominant curve pushforward commutes with principal divisors and norms; closed points are weighted by residue degrees. [thm-author-1437578267d2-curve-norm-input](item-thm-author-1437578267d2-curve-norm-input)

[F3] A one-dimensional noetherian normal local domain is a DVR. Length orders agree with its normalized valuation. [math:thm-equivalent-characterisations-of-a-dvr](https://alphabetamath.cc/item/thm-equivalent-characterisations-of-a-dvr), [lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders)

[F4] On an integral scheme Cartier divisors modulo principal Cartier divisors map isomorphically to the Picard group via $D\mapsto\mathcal O(D)$. A Cartier divisor is specified by local nonzero rational equations whose ratios are regular units. [math:thm-cartier-divisors-mod-principal-to-picard](https://alphabetamath.cc/item/thm-cartier-divisors-mod-principal-to-picard)

[F5] The codimension-one Bloch complex of the smooth curve has point cycles in degree zero and endpoint intersections in degree one; the endpoint boundary subgroup is the principal-divisor subgroup. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex), [lem-author-1437578267d2-graph-boundary](item-lem-author-1437578267d2-graph-boundary)

## Proof
1.1 The finite normalization is proper and dominant with field extension $K/K$. Applying [F2], whose norm is the identity in this case, yields $\nu_*\operatorname{div}_C(f)=\operatorname{div}_T(f)$. Each point in a closed fiber has residue degree one by [F1]; comparing coefficients gives the displayed order formula. [F1, F2, given]

2.1 The equality in step 1.1 makes pushforward descend to the quotient groups. Every closed point of $T$ has a closed preimage by [F1], and each such point pushes forward with coefficient one. Lifting the finitely many points in any zero-cycle proves surjectivity. [F1, step 1.1, construct]

3.1 By [F1] and [F3], each closed-point local ring of $C$ is a DVR. Taking valuations of the local equations of a Cartier divisor defines a zero-cycle: the support is finite by the finiteness of rational-function divisors on a finite trivializing cover. Unit ratios make the local valuations agree. If all valuations vanish, every equation is a unit at each closed point of its domain and also at the generic point, so the Cartier divisor is zero. [F1, F3, F4, algebra, step 2.1]

4.1 For any closed $y$, a uniformizer is regular on a neighbourhood of $y$. Remove its other finitely many zeros from that neighbourhood. The uniformizer there and the equation one on $C\setminus\{y\}$ have unit ratio on the overlap and define a Cartier divisor mapping to $[y]$. Therefore the map of step 3.1 is an isomorphism from Cartier divisors to zero-cycles, carrying principal Cartier divisors to principal length divisors. By [F4], $Q(C)\cong\operatorname{Pic}(C)$, with $[y]$ corresponding to $\mathcal O_C(y)$. [F3, F4, step 3.1, construct]

5.1 By [F5], degree-zero Bloch homology is the same quotient $Q(C)$. Combining this identification with steps 2.1 and 4.1 proves the claimed source and surjection. [F5, step 2.1, step 4.1] ∎
