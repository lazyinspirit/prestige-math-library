---
id: thm-ring-homomorphism-kernel-is-an-ideal
kind: theorem
title: 'The kernel of a ring homomorphism is a two-sided ideal'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ring-homomorphism, lem-ring-homomorphism-basic-properties, def-kernel-and-image-of-group-homomorphism, def-left-right-and-two-sided-ideal]
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

The kernel of a ring homomorphism is a two-sided ideal.

## Facts & Assumptions

**Given:** A ring homomorphism $f:R\to S$.

[L1] A ring homomorphism preserves addition, multiplication, $0$, and $1$ ([[def-ring-homomorphism]]).

[L2] Ring homomorphisms preserve additive inverses ([[lem-ring-homomorphism-basic-properties]]).

[L3] The group kernel is the inverse image of $0$ in the additive groups ([[def-kernel-and-image-of-group-homomorphism]]).

[L4] A two-sided ideal is an additive subgroup with two-sided absorption ([[def-left-right-and-two-sided-ideal]]).

## Proof

**Proof technique:** direct.

1.1 The additive-group kernel of $f$ is an additive subgroup of $R$. [L1, L2, L3, L4, given]

2.1 If $x\in\ker f$ and $r\in R$, then $f(rx)=f(r)f(x)=0$ and $f(xr)=0$. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 Thus the additive and absorption properties make $\ker f$ a two-sided ideal. [step 2.1] ∎
