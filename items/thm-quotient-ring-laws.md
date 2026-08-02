---
id: thm-quotient-ring-laws
kind: theorem
title: 'For a two-sided ideal $I$, the additive cosets form a ring $R/I$ with identity $1+I$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quotient-ring, thm-quotient-ring-multiplication-well-defined-iff-ideal, thm-quotient-group-laws, def-ring]
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

For a two-sided ideal $I$, the additive cosets form a ring $R/I$ with identity $1+I$.

## Facts & Assumptions

**Given:** A ring $R$ and a two-sided ideal $I\mathrel{\trianglelefteq}R$.

[L1] $R/I$ has the stated coset addition and multiplication ([[def-quotient-ring]]).

[L2] This multiplication is well defined for a two-sided ideal ([[thm-quotient-ring-multiplication-well-defined-iff-ideal]]).

[L3] The additive cosets already form a group ([[thm-quotient-group-laws]]).

[L4] Associativity and distributivity hold in $R$ ([[def-ring]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], coset addition has an abelian-group structure, and [L2] makes coset multiplication a defined operation. [L1, L2, L3, L4, given]

2.1 Associativity and both distributive laws follow by applying the corresponding ring law in $R$ to representatives; $1+I$ is a multiplicative identity. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 Hence $R/I$ is a ring with identity $1+I$. [step 2.1] ∎
