---
title: The globally normalized first-layer Picard map is determinant
status: draft
research_item: lem-author-ec13f1db88a5-global-picard-projection
dependency_level: 17
---

PDF p. 8: Proposition3.2, perfect-complex first class and determinant

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage)
- [thm-author-16f30f6b95cb-lowweight-determinant-one-type-input](item-thm-author-16f30f6b95cb-lowweight-determinant-one-type-input)
- [thm-author-16f30f6b95cb-lowweight-em-map-normalizations](item-thm-author-16f30f6b95cb-lowweight-em-map-normalizations)
- [prop-motivic-weight-one](item-prop-motivic-weight-one)
- [lem-unit-section-of-k-one-determinant](item-lem-unit-section-of-k-one-determinant)
- [lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors)


## Statement
Assume the Axiom of Choice and fixed compatible site and universe size bounds for the constructions below. On the big Nisnevich site of qcqs $k$-schemes for any field $k$, identify $\Omega^\infty\operatorname{gr}^1K$ with the line-bundle stack $B\mathbb G_m$ by the actual EM weight-one comparison. Then the actual map $q_1:S=\Omega^\infty\operatorname{Fil}^1K\to B\mathbb G_m$ is the perfect-complex determinant/Picard map on the rank-zero fiber. In particular it determines global determinant line classes, including on singular nonaffine schemes.

## Facts & Assumptions

[A1] Choice and the fixed compatible site and universe bounds are retained when applying [lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage) in [F3] to the actual rank fiber and its homotopy groups in steps 1.1 and 2.1. The determinant and pointed-type suppliers in [F2] are used under those same stated foundational assumptions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [thm-author-16f30f6b95cb-lowweight-em-map-normalizations](item-thm-author-16f30f6b95cb-lowweight-em-map-normalizations) supplies, on all qcqs prime-field schemes, the actual lift $\kappa=-a:B\mathbb G_m\to S$ of $[L]-1$, the positive sign test on $\mathcal O(-1)$, and the actual weight-one comparison. [prop-motivic-weight-one](item-prop-motivic-weight-one) restricts this to any field.

[F2] [thm-author-16f30f6b95cb-lowweight-determinant-one-type-input](item-thm-author-16f30f6b95cb-lowweight-determinant-one-type-input) supplies the extended determinant/Picard construction, local $K_0=\mathbb Z$, local $K_1=\mathbb G_m$ by the actual determinant, and fully faithful classification of pointed connected1-types in any infinity-topos. [lem-unit-section-of-k-one-determinant](item-lem-unit-section-of-k-one-determinant) identifies the loop of the line-class construction with its unit section.

[F3] [lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage) identifies $S$ as the actual rank-zero space. [lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors) gives the line-frame-torsor convention for $B\mathbb G_m$.

## Proof
**Given:** The actual maps on the stated big Nisnevich site, AC and universe bounds.

**Goal:** Extend the completed smooth-site Postnikov argument using its exact premises, not local Picard-group agreement.

1.1 The sheaf $S$ is connected: every rank-zero perfect class is locally zero on affine free-complex charts, where its object class is its alternating free rank. Its fundamental-group sheaf is $\mathbb G_m$ through determinant by the local-ring calculation in [F2]; positive homotopy groups of the rank fiber agree with those of K by [F3]. Thus its pointed first Postnikov truncation is $B\mathbb G_m$, with its identification fixed by the actual determinant construction. These are local statements about sheaves of K-spaces and their isomorphisms, not statements that the global Picard group vanishes. [A1, F2, F3]

1.2 The composite $q_1\kappa:B\mathbb G_m\to B\mathbb G_m$ is a pointed stack map. By [F2] it is classified by a sheaf-group endomorphism of $\mathbb G_m$. This group is represented on the qcqs $k$-site by $\operatorname{Spec}k[t,t^{-1}]$; Yoneda and the Laurent-unit calculation over a field make the endomorphism $t\mapsto t^n$. The normalization of [F1] on $\mathcal O(-1)$ over $\mathbb P^1_k$ gives $\mathcal O(-n)=\mathcal O(-1)$ in $\operatorname{Pic}(\mathbb P^1_k)=\mathbb Z$, hence $n=1$. The same universal test applies on this larger site, so $q_1\kappa$ is identity as an actual pointed stack map. [F1, F2]

2.1 On fundamental-group sheaves, $\kappa$ is the unit section, and the determinant of that section is identity by [F2]. Hence $\kappa_*$ is the inverse of the determinant isomorphism on local K₁. Step1.2 forces $(q_1)_*$ to be determinant. Maps from the connected sheaf $S$ into the1-type $B\mathbb G_m$ factor through $\tau_{\leq1}S$; the full faithfulness in [F2] now identifies $q_1$ with the actual determinant/Picard map. Evaluate this equality of stack maps at any $X/k$ to retain its full line-bundle descent data. No inference from agreement of Picard groups on affine opens occurs. [A1, F1, F2, F3, step 1.1, step 1.2] ∎
