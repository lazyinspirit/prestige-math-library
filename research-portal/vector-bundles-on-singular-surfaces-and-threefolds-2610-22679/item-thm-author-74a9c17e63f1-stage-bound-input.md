---
title: External actual motivic stagewise boundedness
status: draft
research_item: thm-author-74a9c17e63f1-stage-bound-input
dependency_level: 12
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [thm-author-98a750efd0cc-motivic-filtration-input](item-thm-author-98a750efd0cc-motivic-filtration-input)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)


## Statement
Assume the Axiom of Choice and the fixed universe bounds of the selected perfect-K-theory and motivic-filtration constructions. For a qcqs scheme $X$ over a prime field $F=\mathbb Q$ or $\mathbb F_p$ with finite valuative dimension, there exists an integer $B(X)\geq0$ such that the actual EM filtration satisfies
$$F^r_{\mathrm{mot}}K(X)\in\mathrm{Sp}_{\geq r-B(X)}$$
for every integer stage $r$ under the source’s constant extension to $r\leq0$. Equivalently its cohomological support, with $H^m(E)=\pi_{-m}E$, is in degrees $\leq B(X)-r$. The same actual tower is nonnegative, augmented by $F^0=K$, multiplicative, and induces the source’s bounded multiplicative spectral sequence. The value of $B$ need not equal a Krull or valuative dimension.

## Facts & Assumptions
**Given:** The Axiom of Choice, the fixed universe bounds, a qcqs scheme $X$ over the specified prime field with finite valuative dimension, the actual source filtration, and the source valuative convention.

**Goal:** Import the precise stagewise, rather than merely graded or total-$K$, boundedness statement.

[A1] The Axiom of Choice in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is inherited through [def-motivic-filtration](item-def-motivic-filtration). It is used to invoke the selected common-family perfect-$K$-theory realization when applying the source theorem to that local tower.

[F1] EM Theorems 4.12(1) and 4.27(1), in the exact version and at the locators recorded above, assert boundedness for the stated qcqs schemes of finite valuative dimension. Section 2.2 defines this by a common cohomological upper bound $B-r$ on the individual stages for all integer indices.

[F2] [thm-author-98a750efd0cc-motivic-filtration-input](item-thm-author-98a750efd0cc-motivic-filtration-input) supplies the source tower, its multiplication and zeroth-stage equivalence. [def-motivic-filtration](item-def-motivic-filtration) identifies the local tower and its constant nonpositive extension. [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness) fixes the valuative convention.

## External input
Import [F1] with the full source records and reading limits. This actual bound is additional input beyond the completed existence-only supplier. The printed proof paragraphs contain false homological sign/type inequalities recorded in the assistance findings; those estimates are not used. Only the explicit theorem assertion interpreted by its definition, with some finite $B(X)$, is imported. No deduction of stagewise vanishing from total K-theory vanishing is made.

## Proof

1.1 Under [A1], use the actual tower of [F2]. Apply Theorem 4.12(1) in characteristic zero or Theorem 4.27(1) in characteristic $p$, as specified in [F1]. The hypotheses are exactly that $X$ is qcqs over the selected prime field and has finite valuative dimension. Import the qualitative boundedness assertion with its section 2.2 definition, giving a finite integer $B(X)\geq0$ with cohomological support in degrees $\leq B(X)-r$ for every integer $r$, including the constant nonpositive stages. This applies the external theorem without reconstructing its proof. [A1, F1, F2, given]

2.1 Since $H^m(E)=\pi_{-m}E$, step 1.1 is equivalent to $\pi_iF^r_{\mathrm{mot}}K(X)=0$ for $i<r-B(X)$, which is the displayed connectivity assertion. The indexing, augmentation and multiplication are the data of [F2]; the bounded multiplicative spectral sequence is included in [F1]. No particular dimension formula for $B(X)$ is claimed, and the erroneous numerical estimates in the printed proofs are not used. [F1, F2, step 1.1] ∎
