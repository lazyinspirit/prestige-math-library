---
title: Clopen rank extension and genuine representative independence
status: published
research_item: lem-author-4f94f7982b0d-virtual-independence
dependency_level: 22
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface)
- [def-bigraded-oriented-theory](item-def-bigraded-oriented-theory)
- [math:def-formal-power-series-and-coefficient-extraction](https://alphabetamath.cc/item/def-formal-power-series-and-coefficient-extraction)
- [lem-author-4f94f7982b0d-actual-whitney](item-lem-author-4f94f7982b0d-actual-whitney)
- [lem-author-ab0a6fc202cb-finite-common-rank-strata](item-lem-author-ab0a6fc202cb-finite-common-rank-strata)
- [lem-adjudicate-e61a86f4a27f-all-field-clopen-restriction](item-lem-adjudicate-e61a86f4a27f-all-field-clopen-restriction)
- [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion)
- [math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves)
- [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula)


## Statement
Assume the Axiom of Choice and the fixed site-size and universe bounds of the supplied motivic constructions. Let $k$ be a field and $X$ any qcqs $k$-scheme. For arbitrary finite locally free bundles on $X$, extend the supplied classes from constant-rank clopen strata by their unique finite-clopen gluing. The actual series are natural and satisfy Whitney for every exact sequence. Consequently they define a unique natural homomorphism $c_t:K^0_{\rm vb}(X)\to 1+\prod_{i\geq1}H^{2i,i}(X)t^i$ with multiplicative-series target, and $c_t([V]-[W])=c_t(V)c_t(W)^{-1}$ independently of the representative. No identification of $K^0_{\rm vb}$ with perfect $K_0$ on general schemes is asserted.

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated size bounds. These discharge the foundational hypotheses of [F1]–[F3] in steps 1.1–4.1. The finite rank stratification introduces no new arbitrary choice.

[F1] [lem-author-4f94f7982b0d-actual-whitney](item-lem-author-4f94f7982b0d-actual-whitney) proves actual Whitney and root factorization at constant rank; [def-motivic-chern-classes](item-def-motivic-chern-classes) gives naturality.

[F2] [lem-author-ab0a6fc202cb-finite-common-rank-strata](item-lem-author-ab0a6fc202cb-finite-common-rank-strata) supplies finite qcqs common clopen rank partitions. [lem-adjudicate-e61a86f4a27f-all-field-clopen-restriction](item-lem-adjudicate-e61a86f4a27f-all-field-clopen-restriction) supplies the actual motivic restriction isomorphism to their finite products over every field, including the empty scheme. No algebraically closed field convention is used.

[F0] The formulation uses [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) and [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank) for the field, qcqs base schemes and finite locally free bundles. Fix the compatible universes $U\in V\in W$ with $\omega\in U$ and scheme data in $U$, as in [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention); existence is assumed separately from Choice. Exact sequences mean exact sequences of $\mathcal O_X$-module sheaves, as in [math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves). The supplied bigraded ring contract is [def-bigraded-oriented-theory](item-def-bigraded-oriented-theory), and formal coefficient functions with their Cauchy product are [math:def-formal-power-series-and-coefficient-extraction](https://alphabetamath.cc/item/def-formal-power-series-and-coefficient-extraction).

[F3] [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula) establishes that the supplied motivic cohomology, extended by zero in negative weights, is an additively oriented bigraded theory satisfying the projective bundle contract on qcqs $k$-schemes over every field, under [A1] and the compatible size assumptions in [F0]. [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface) then gives the unique virtual extension for isomorphism-invariant natural actual series satisfying Whitney for every short exact sequence; [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion) gives formal coefficient arithmetic.

## Proof
**Given:** A field $k$, a qcqs $k$-scheme $X$, the Axiom of Choice and the stated site-size and universe bounds.

**Goal:** Close every hypothesis of virtual extension without circularity.

1.1 Each bundle has a locally constant rank function with finite image by quasi-compactness. On the finite common clopen rank partition for any finite bundle family, [F2] identifies cohomology with the product of component groups. Define each $c_i$ by the unique class restricting to the constant-rank values from [F1]; refinement does not change it by uniqueness. If $X$ is nonempty, the rank has a finite maximum, so coefficients above that maximum vanish and the actual series is a polynomial. If $X$ is empty, [F2] makes every coefficient group zero, and its unique series is the constant unit polynomial. [A1, F0, F1, F2, given, construct]

2.1 Pullback refines the rank partition and preserves the constant-rank classes, hence preserves the glued classes. For an exact sequence, use a common rank partition. On each component apply actual Whitney [F1]; joint injectivity in [F2] gives the global identity coefficient by coefficient. The same argument preserves isomorphism invariance. [A1, F0, F1, F2, step 1.1]

3.1 By the motivic contract in [F3] and the isomorphism invariance, naturality and Whitney identity established in step 2.1, all hypotheses of the virtual-extension interface in [F3] now hold. Its construction kills every exact-sequence relation in the presentation of $K^0_{\rm vb}(X)$, so descends to a unique homomorphism. Its value on any difference is the stated quotient, with the inverse defined recursively in formal series, not by convergence. Two differences representing the same class have the same image because this is a map on the presented group. Its naturality also follows from [F3]. Thus this is genuine representative independence. [A1, F0, F3, step 2.1]

4.1 The degree-zero series group is commutative by [F0], because all coefficient first degrees are even. The product and inverse formulas through degree3 in [F3] therefore apply. In particular higher coefficients need not be additive, whereas $c_1$ is additive on virtual sums and $c_2(x+y)=c_2(x)+c_1(x)c_1(y)+c_2(y)$. [A1, F0, F3, step 3.1] ∎
