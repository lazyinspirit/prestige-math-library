---
title: Clopen rank extension and genuine representative independence
status: draft
research_item: lem-author-4f94f7982b0d-virtual-independence
dependency_level: 19
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-4f94f7982b0d-actual-whitney](item-lem-author-4f94f7982b0d-actual-whitney)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface)
- [lem-flag-tower-cohomology-detection](item-lem-flag-tower-cohomology-detection)
- [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion)


## Statement
Assume the Axiom of Choice and the fixed site-size and universe bounds of the supplied motivic constructions. Let $k$ be a field and $X$ any qcqs $k$-scheme. For arbitrary finite locally free bundles on $X$, extend the supplied classes from constant-rank clopen strata by their unique finite-clopen gluing. The actual series are natural and satisfy Whitney for every exact sequence. Consequently they define a unique natural homomorphism $c_t:K^0_{\rm vb}(X)\to 1+\prod_{i\geq1}H^{2i,i}(X)t^i$ with multiplicative-series target, and $c_t([V]-[W])=c_t(V)c_t(W)^{-1}$ independently of the representative. No identification of $K^0_{\rm vb}$ with perfect $K_0$ on general schemes is asserted.

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated size bounds. These discharge the foundational hypotheses of [F1]–[F3] in steps 1.1–4.1. The finite rank stratification introduces no new arbitrary choice.

[F1] [lem-author-4f94f7982b0d-actual-whitney](item-lem-author-4f94f7982b0d-actual-whitney) proves actual Whitney and root factorization at constant rank; [def-motivic-chern-classes](item-def-motivic-chern-classes) gives naturality.

[F2] [lem-flag-tower-cohomology-detection](item-lem-flag-tower-cohomology-detection) includes finite common clopen rank partitions and the actual motivic restriction isomorphism to their finite products.

[F3] [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface) gives the unique extension precisely when the actual exact-sequence identity holds; [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion) gives formal coefficient arithmetic.

## Proof
**Given:** A field $k$, a qcqs $k$-scheme $X$, the Axiom of Choice and the stated site-size and universe bounds.

**Goal:** Close every hypothesis of virtual extension without circularity.

1.1 Each bundle has a locally constant rank function with finite image by quasi-compactness. On the finite common clopen rank partition for any finite bundle family, [F2] identifies cohomology with the product of component groups. Define each $c_i$ by the unique class restricting to the constant-rank values from [F1]; refinement does not change it by uniqueness. The rank has a finite maximum, so coefficients above that maximum vanish and the actual series is a polynomial. [A1, F1, F2, given, construct]

2.1 Pullback refines the rank partition and preserves the constant-rank classes, hence preserves the glued classes. For an exact sequence, use a common rank partition. On each component apply actual Whitney [F1]; joint injectivity in [F2] gives the global identity coefficient by coefficient. The same argument preserves isomorphism invariance. [A1, F1, F2, step 1.1]

3.1 All hypotheses of [F3] now hold. Its construction kills every exact-sequence relation in the presentation of $K^0_{\rm vb}(X)$, so descends to a unique homomorphism. Its value on any difference is the stated quotient, with the inverse defined recursively in formal series, not by convergence. Two differences representing the same class have the same image because this is a map on the presented group. Its naturality also follows from [F3]. Thus this is genuine representative independence. [A1, F3, step 2.1]

4.1 The degree-zero series group is commutative because all coefficient first degrees are even. The product and inverse formulas through degree3 in [F3] therefore apply. In particular higher coefficients need not be additive, whereas $c_1$ is additive on virtual sums and $c_2(x+y)=c_2(x)+c_1(x)c_1(y)+c_2(y)$. [A1, F3, step 3.1] ∎
