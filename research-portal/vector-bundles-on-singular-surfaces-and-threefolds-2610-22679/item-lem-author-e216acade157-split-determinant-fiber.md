---
title: The actual determinant fiber is a natural retract of the rank-zero K-space
status: published
research_item: lem-author-e216acade157-split-determinant-fiber
dependency_level: 18
---

PDF p. 11: Proposition 5.5; pp. 11–12

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-ec13f1db88a5-global-picard-projection](item-lem-author-ec13f1db88a5-global-picard-projection)
- [lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage)
- [prop-motivic-weight-one](item-prop-motivic-weight-one)
- [def-motivic-filtration](item-def-motivic-filtration)


## Statement
Assume the Axiom of Choice and fixed compatible site and universe size bounds for the constructions below. On the Nisnevich site of qcqs schemes over a field, put $S=\Omega^\infty\operatorname{Fil}^1K$, $B=\Omega^\infty\operatorname{gr}^1K\simeq B\mathbb G_m$ and $T=\Omega^\infty\operatorname{Fil}^2K$. The actual first projection $d:S\to B$ is determinant. Its actual pointed section $\kappa:B\to S$ sends a line to $[L]-1$. There is a natural equivalence of spaces over $B$, $T\times B\simeq S$, with map $(t,b)\mapsto i(t)+\kappa(b)$, and consequently a pointed retraction $r:S\to T$ of $i:T\to S$. On underlying K-classes, $r(s)=s-\kappa(d(s))$. For every qcqs $Y$, both $\pi_0T(Y)\to\pi_0S(Y)$ and $\pi_0S(Y)\to K_0(Y)$ are injective. The space $T$ is the actual homotopy fiber, retaining determinant-trivialization data.

## Facts & Assumptions

[A1] Choice and the fixed compatible site and universe bounds are retained for [lem-author-ec13f1db88a5-global-picard-projection](item-lem-author-ec13f1db88a5-global-picard-projection) in [F1] and [lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage) in [F2]. Step 1.1 uses their actual rank and determinant maps and homotopies; step 3.1 uses their evaluated fiber identifications. The translation and retraction arguments then use these supplied maps. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [lem-author-ec13f1db88a5-global-picard-projection](item-lem-author-ec13f1db88a5-global-picard-projection) supplies the actual pointed maps $d,\kappa$ and the pointed homotopy $d\kappa\simeq\mathrm{id}_B$, not merely equality on Picard groups. [prop-motivic-weight-one](item-prop-motivic-weight-one) identifies $B$ as the actual Picard 1-type with its additive structure.

[F2] [def-motivic-filtration](item-def-motivic-filtration) makes $d$ a map of grouplike infinite-loop spaces and $T$ its homotopy fiber. [lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage) identifies $S$ with the rank fiber over the discrete locally constant rank sheaf.

## Proof
**Given:** These actual sheaf maps, their homotopies, AC and the existing universe bounds.

**Goal:** Construct the fiber retraction and prove injectivity without a fiber-preservation assertion for a plus map.

1.1 Define $\Phi:T\times B\to S$ by addition of $i(t)$ and $\kappa(b)$. Additivity of $d$ and the chosen homotopy in [F1] make this a map over $B$. On the fiber over any generalized point $b$, translation by $\kappa(b)$ is an equivalence from the fiber over zero to the fiber over $b$; its inverse is translation by $-\kappa(b)$, using that same homotopy. Therefore $\Phi$ is an equivalence over $B$. This argument is internal to the sheaf infinity-topos and hence is natural on restriction. It does not require $\kappa$ to be additive. [A1, F1, F2]

2.1 Take $r$ to be the first component of $\Phi^{-1}$. Its underlying expression is $s-\kappa(d(s))$ with the nullhomotopy furnished by $d\kappa\simeq\mathrm{id}$. Because $\kappa$ is pointed, the restriction over zero identifies $ri$ with identity, including the fiber path. This constructs an actual homotopy-fiber map rather than choosing a lift of an object class. [step 1.1]

3.1 Evaluation of the section makes $\pi_1S(Y)\to\pi_1B(Y)$ surjective. The fiber exact sequence thus makes $\pi_0T(Y)\to\pi_0S(Y)$ injective; equivalently use the product equivalence. The rank target in [F2] is discrete on derived sections, so its $\pi_1$ vanishes and the rank-fiber sequence makes $\pi_0S(Y)\to K_0(Y)$ injective. No assertion about generation by global bundles is involved. [A1, F1, F2, step 1.1, step 2.1] ∎
