---
title: A common-core zero curve exists on a nonempty parameter open
status: published
research_item: lem-author-27d786ff4d27-common-core-nonempty
dependency_level: 14
---

PDF p. 15: Theorem6.7 second Bertini application

## Prerequisites

- [lem-author-27d786ff4d27-dual-global-controls](item-lem-author-27d786ff4d27-dual-global-controls)
- [lem-regular-section-parameter-family](item-lem-regular-section-parameter-family)
- [thm-author-27d786ff4d27-relative-jacobian-openness](item-thm-author-27d786ff4d27-relative-jacobian-openness)
- [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input)

## Statement
For the family just constructed, let $O$ be any nonempty smooth open subset of $U$. There is a nonempty open $T_O\subset T$ such that each $k$-parameter in $T_O$ has a nonempty zero scheme on $O$. At the generic parameter this zero scheme is nonempty as well. This conclusion uses an actual smooth point of the incidence projection, rather than an inference from its total dimension.

## Facts & Assumptions
**Given:** The integral threefold, rank-two section family, and $O$ as above.

**Goal:** Ensure nonemptiness on a common open core before asserting irreducibility by charts.

[F1] [lem-author-27d786ff4d27-dual-global-controls](item-lem-author-27d786ff4d27-dual-global-controls) gives first-jet surjectivity and value generation. [lem-regular-section-parameter-family](item-lem-regular-section-parameter-family) gives the actual universal zero-incidence $I_O\subset O\times T$ and its fibers.

[F2] [thm-author-27d786ff4d27-relative-jacobian-openness](item-thm-author-27d786ff4d27-relative-jacobian-openness) supplies the relative Jacobian criterion and openness of smooth maps. [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input) supplies rational closed points and dimension conventions.

## Proof
1.1 Choose a closed $x\in O$, whose residue field is $k$. First-jet surjectivity gives a $k$-parameter $a$ with value zero at $x$ and derivative $T_xO\to E(x)$ of rank two. On a local smooth presentation of $O$ and a frame of $E$, $I_O$ is defined in $O\times T$ by two coefficients. Their derivatives in the $O$ directions are independent at $(x,a)$. Augmenting the smooth presentation's Jacobian by these two rows produces an invertible maximal minor, so the relative Jacobian criterion makes $I_O\to T$ smooth of relative dimension one near $(x,a)$. This argument is valid in all characteristics. [F1, F2]

2.1 Choose that smooth open neighbourhood in $I_O$. Its image is a nonempty open $T_O$ by [F2]. Every point of $T_O$ has a preimage in the incidence, so its actual zero fiber on $O$ is nonempty, including the generic point of the irreducible parameter space. In particular its closed $k$-parameters have a zero there. This proves the asserted dominance on an actual incidence open and the needed nonempty fibers. [F1, F2, step 1.1] ∎
