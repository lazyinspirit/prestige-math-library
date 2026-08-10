---
id: cor-polynomial-ring-over-a-domain-is-a-domain
kind: corollary
title: 'A polynomial ring over an integral domain is an integral domain'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-polynomial-ring-is-a-commutative-ring, thm-polynomial-degree-of-a-product-over-a-domain, def-zero-divisor-and-integral-domain]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Theorem 17.4'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
pipeline_run: null
---

## Statement

If $R$ is an integral domain, then $R[x]$ is an integral domain.

## Facts & Assumptions

**Given:** An integral domain $R$.

[L1] Polynomial convolution makes $R[x]$ a commutative ring and embeds $R$ injectively as the constant polynomials ([[thm-polynomial-ring-is-a-commutative-ring]]).

[L2] The product of two nonzero polynomials over a domain is nonzero ([[thm-polynomial-degree-of-a-product-over-a-domain]]).

[L3] An integral domain is a commutative ring with distinct zero and one and no zero divisors ([[def-zero-divisor-and-integral-domain]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $R[x]$ is a commutative ring and its zero and one are distinct because the constant embedding is injective. [given, L1]

2.1 By [L2], two nonzero polynomials have nonzero product, so [L3] applied with step 1.1 makes $R[x]$ an integral domain. [step 1.1, L2, L3] ∎
