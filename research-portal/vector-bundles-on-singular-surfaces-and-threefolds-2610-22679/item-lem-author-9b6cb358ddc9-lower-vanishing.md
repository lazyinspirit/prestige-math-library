---
title: The first two perfect Chern classes vanish on the third image piece in
  full scope
status: draft
research_item: lem-author-9b6cb358ddc9-lower-vanishing
dependency_level: 25
---

PDF p. 14: Lemma6.4; scheme conventions p3

## Prerequisites

- [lem-author-9b6cb358ddc9-actual-second-fiber](item-lem-author-9b6cb358ddc9-actual-second-fiber)
- [def-motivic-filtration](item-def-motivic-filtration)
- [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)
- [prop-first-chern-determinant](item-prop-first-chern-determinant)
- [lem-author-ec13f1db88a5-global-picard-projection](item-lem-author-ec13f1db88a5-global-picard-projection)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the supplied constructions. For every qcqs $k$-scheme $X$ over any field, every $\alpha\in F^3_{\rm mot}K_0(X)$ has rank zero and $c_1(\alpha)=c_2(\alpha)=0$. This uses actual stage maps and needs neither normality nor an image-stage isomorphism.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated size bounds. Choice and the fixed size bounds are inherited from the first-layer comparison in [F2] at step 1.1 and the actual second-fiber comparison in [F3] at step 2.1.

[F1] [def-motivic-filtration](item-def-motivic-filtration) defines nested image groups. [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence) gives the consecutive stage-to-layer fiber sequences.

[F2] [lem-author-ec13f1db88a5-global-picard-projection](item-lem-author-ec13f1db88a5-global-picard-projection) and [prop-first-chern-determinant](item-prop-first-chern-determinant) identify the actual first layer with determinant/first Chern on the rank-zero space for all qcqs field-schemes.

[F3] [lem-author-9b6cb358ddc9-actual-second-fiber](item-lem-author-9b6cb358ddc9-actual-second-fiber) identifies the actual second layer with minus the actual second Chern operation in the same scope.

## Proof
**Given:** $X,\alpha$ and a third-stage representative $a\in\pi_0\operatorname{Fil}^3K(X)$, which exists by the image definition.

**Goal:** Prove lower-class vanishing without transporting projections through a finite-type image-stage identification.

1.1 Send $a$ to the second, first and zeroth stages. Their common augmentation is $\alpha$. Consecutive stage-to-layer composites are null by their fiber sequences. In particular its rank is zero, and the actual first-layer map of the first-stage representative is zero. By [F2] this gives $c_1(\alpha)=0$. [A1, F1, F2]

2.1 Its second-stage representative is in the image of the third stage, so its actual second-layer value is zero. By [F3] that value is $-c_2(\alpha)$. Thus $c_2(\alpha)=0$. No injectivity of any stage augmentation or representation of $\alpha$ by global bundles has been used. [A1, F1, F3, step 1.1] ∎
