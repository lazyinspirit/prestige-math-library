---
id: thm-first-isomorphism-theorem-rings
kind: theorem
title: 'First isomorphism theorem for rings: $R/\ker f\cong\operatorname{im}f$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-quotient-ring-universal-property, thm-ring-homomorphism-kernel-is-an-ideal, lem-ring-homomorphism-basic-properties, thm-first-isomorphism-theorem-groups, def-ring-homomorphism]
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
    - title: "Judson, Abstract Algebra: Theory and Applications, Ring Homomorphisms and Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/16%3A_Rings/16.05%3A_Ring_Homomorphisms_and_Ideals"
pipeline_run: null
---

## Statement

First isomorphism theorem for rings: $R/\ker f\cong\operatorname{im}f$.

## Facts & Assumptions

**Given:** A ring homomorphism $f:R\to S$.

[L1] A ring homomorphism whose kernel contains a two-sided ideal factors uniquely through the quotient ring ([[thm-quotient-ring-universal-property]]).

[L2] $\ker f$ is an ideal ([[thm-ring-homomorphism-kernel-is-an-ideal]]).

[L3] Ring homomorphisms preserve additive inverses and products ([[lem-ring-homomorphism-basic-properties]]).

[L4] The underlying group map is isomorphic modulo its kernel to its image ([[thm-first-isomorphism-theorem-groups]]).

[L5] A ring homomorphism preserves $1$ ([[def-ring-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] and [L1], $f$ induces a ring homomorphism $\bar f:R/\ker f\to\operatorname{im}f$ with $\bar f(r+\ker f)=f(r)$. [L1, L2, L3, L4, L5, given, construct]

2.1 This map is surjective by the definition of image, and its additive kernel is trivial, hence it is injective by [L4]. [step 1.1, L1, L2, L3, L4, L5, given, algebra]

3.1 Thus $\bar f$ is a ring isomorphism. [step 2.1] ∎
