---
title: The support long exact sequence kills degree seven
status: draft
research_item: lem-author-8a080e7d9445-degree-seven-les
dependency_level: 15
---

PDF p. 13: Proposition 6.1 support argument

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-8a080e7d9445-support-fiber](item-lem-author-8a080e7d9445-support-fiber)
- [lem-author-8a080e7d9445-chow-restriction](item-lem-author-8a080e7d9445-chow-restriction)
- [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison)
- [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness)


## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds of the supplied comparisons. Let $k$ be an algebraically closed field, let $X$ be an affine finite-type $k$-scheme of dimension three, put $U=X_{\mathrm{smooth}/k}$, and let $T\subset X$ be a closed subset contained in $U$. Use the reduced structure on $T$ when a scheme structure is needed. Put $V=U\setminus T$ and $W=X\setminus T$. For the actual motivic support fiber on $U$ in weight three, its degree-seven group is zero. Via excision the same holds for support $T$ on $X$.

## Facts & Assumptions
**Given:** $k,X,U,T,V,W$ and the choice and size assumptions of the statement.

**Goal:** Construct the stated actual maps and prove their consequence.

[F1] [lem-author-8a080e7d9445-support-fiber](item-lem-author-8a080e7d9445-support-fiber), [lem-author-8a080e7d9445-chow-restriction](item-lem-author-8a080e7d9445-chow-restriction) and [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness).

[F2] [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison), applied to the actual smooth $U$.

[F3] The assumed Axiom of Choice, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), discharges the foundational hypotheses of the support and Chow suppliers in [F1] and the smooth comparison in [F2], invoked in step 1.1. The following exact-sequence deduction makes no additional choice.

## Proof
1.1 Apply the long exact cohomology sequence of the actual support fiber to obtain $H^{6,3}_{\mathrm{mot}}(U)\to H^{6,3}_{\mathrm{mot}}(V)\to H^{7,3}_{\mathrm{mot},T}(U)\to H^{7,3}_{\mathrm{mot}}(U)$. The first arrow is surjective by the preceding local Chow-restriction lemma. The last group is zero by the completed smooth comparison: $2\cdot3-7=-1$ and the cycle complex has no negative homology. [F1, F2, F3]

2.1 Exactness gives zero for the middle supported group: its map to the zero last group has kernel equal to the image of the preceding zero connecting map. The support-fiber lemma gives the actual excision equivalence to support on $X$, proving the claim there as well. [F1, F2, step 1.1] ∎
