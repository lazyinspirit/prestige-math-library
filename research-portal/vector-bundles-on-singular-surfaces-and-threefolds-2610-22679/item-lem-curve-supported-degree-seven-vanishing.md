---
title: Supported degree-seven vanishing
status: published
research_item: lem-curve-supported-degree-seven-vanishing
dependency_level: 16
---

PDF p. 13: First paragraph of Proposition 6.1 proof

## Prerequisites

- [lem-author-8a080e7d9445-geometry](item-lem-author-8a080e7d9445-geometry)
- [lem-author-8a080e7d9445-restriction-diagram](item-lem-author-8a080e7d9445-restriction-diagram)
- [lem-author-8a080e7d9445-support-fiber](item-lem-author-8a080e7d9445-support-fiber)
- [lem-author-8a080e7d9445-chow-restriction](item-lem-author-8a080e7d9445-chow-restriction)
- [lem-author-8a080e7d9445-degree-seven-les](item-lem-author-8a080e7d9445-degree-seven-les)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume the Axiom of Choice and the completed size conventions. Let $X$ be an affine finite-type threefold over an arbitrary algebraically closed field $k$, let $U=X_{\mathrm{smooth}}$, and let $T\subset X$ be a closed integral subset contained in $U$ (in particular the curve of Proposition6.1). Then
$$H^{7,3}_{\mathrm{mot}}(X/(X\setminus T),\mathbb Z)=0.$$
The quotient notation denotes the actual support fiber of the completed definition. The proof identifies the actual smooth restriction with Chow restriction before using its surjectivity.

## Facts & Assumptions
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and fixed size bounds discharge the inherited hypotheses of the five supplied comparison and support prerequisites [F1] at their applications in steps 1.1–2.1. The exact-sequence deduction makes no additional choice.

**Given:** The hypotheses in the statement, with the Axiom of Choice and fixed universe bounds.

**Goal:** Construct the stated actual maps and prove their consequence.

[F1] The five fully authored local prerequisites in deps, under their exact AC, field, geometry and map conventions.

## Proof
1.1 The geometry and actual restriction-diagram prerequisites apply over this perfect field, without any finite-generation assumption on k over the prime field. The support-fiber prerequisite supplies excision with the exact indexing and maps. [A1, F1]

2.1 The fourth prerequisite proves surjectivity of the actual motivic degree-six restriction using cycle localization and the commuting diagram. The fifth applies the support long exact sequence and smooth degree-seven vanishing, then transports the zero group by excision. This is the asserted full statement. [A1, F1, step 1.1] ∎
