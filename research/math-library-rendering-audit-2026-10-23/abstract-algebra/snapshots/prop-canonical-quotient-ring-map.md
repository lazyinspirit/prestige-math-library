---
id: prop-canonical-quotient-ring-map
kind: proposition
title: 'The canonical projection $R\to R/I$ is a surjective ring homomorphism with kernel $I$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-quotient-ring-laws, def-ring-homomorphism, prop-canonical-quotient-map, def-kernel-and-image-of-group-homomorphism, lem-coset-membership-and-equality]
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
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Ideals and Quotient Rings"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/08%3A_An_Introduction_to_Rings/8.03%3A_Ideals_and_Quotient_Rings"
pipeline_run: null
---

## Statement

The canonical projection $R\to R/I$ is a surjective ring homomorphism with kernel $I$.

For $I\mathrel{\trianglelefteq}R$, $\pi(r)=r+I$ has these properties.

## Facts & Assumptions

**Given:** A ring $R$ and a two-sided ideal $I\mathrel{\trianglelefteq}R$.

[L1] $R/I$ is a ring with the stated coset operations ([[thm-quotient-ring-laws]]).

[L2] A ring homomorphism preserves addition, multiplication, and identity ([[def-ring-homomorphism]]).

[L3] The additive quotient map is surjective ([[prop-canonical-quotient-map]]).

[L4] A kernel is the inverse image of the identity element ([[def-kernel-and-image-of-group-homomorphism]]).

[L5] The coset-equality criterion gives $r+I=0+I$ exactly when $-r\in I$, hence exactly when $r\in I$ because $I$ is an additive subgroup ([[lem-coset-membership-and-equality]]).

## Proof

**Proof technique:** direct.

1.1 The identities $\pi(r+s)=\pi(r)+\pi(s)$, $\pi(rs)=\pi(r)\pi(s)$, and $\pi(1)=1+I$ show that $\pi$ is a ring homomorphism. [L1, L2, given, algebra]

2.1 By [L3] it is surjective; by [L4] and [L5], its kernel is exactly $I$. [step 1.1, L3, L4, L5, given, algebra]

3.1 Thus $\ker\pi=I$. [step 2.1] ∎
