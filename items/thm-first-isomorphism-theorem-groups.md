---
id: thm-first-isomorphism-theorem-groups
kind: theorem
title: 'First isomorphism theorem for groups: $G/\ker f\cong\operatorname{im}f$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-quotient-group-universal-property, thm-image-subgroup-and-kernel-normal, thm-group-homomorphism-injective-iff-trivial-kernel, lem-equal-images-iff-same-kernel-coset, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Judson, Abstract Algebra: Theory and Applications, Isomorphism Theorems"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/11%3A_Homomorphisms/11.02%3A_The_Isomorphism_Theorms"
pipeline_run: null
---

## Statement

First isomorphism theorem for groups: $G/\ker f\cong\operatorname{im}f$.

For every homomorphism $f:G\to H$, the rule
$g\ker f\mapsto f(g)$ is an isomorphism from $G/\ker f$ onto
$\operatorname{im}f$.

## Facts & Assumptions

**Given:** A group homomorphism $f:G\to H$.

[L1] A homomorphism killing a normal subgroup factors uniquely through the quotient ([[thm-quotient-group-universal-property]]).

[L2] $\ker f$ is normal and $\operatorname{im}f$ is a subgroup ([[thm-image-subgroup-and-kernel-normal]]).

[L3] A homomorphism is injective exactly when its kernel is trivial ([[thm-group-homomorphism-injective-iff-trivial-kernel]]).

[L4] Equal images are exactly equal kernel cosets ([[lem-equal-images-iff-same-kernel-coset]]).

[L5] An isomorphism is a bijective group homomorphism ([[def-group-isomorphism-and-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] and [L1], $\bar f:G/\ker f\to\operatorname{im}f$, $\bar f(g\ker f)=f(g)$, is a well-defined homomorphism; [L4] also gives representative independence directly. [L1, L2, L3, L4, L5, given, construct]

2.1 Its image is all of $\operatorname{im}f$, and $\bar f(g\ker f)=e_H$ implies $f(g)=e_H$, hence $g\ker f=\ker f$; therefore its kernel is trivial. [step 1.1, L1, L2, L3, L4, L5, given, algebra]

3.1 The trivial-kernel conclusion of step 2.1 makes $\bar f$ an isomorphism. [step 2.1] ∎
