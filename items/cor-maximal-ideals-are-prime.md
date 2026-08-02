---
id: cor-maximal-ideals-are-prime
kind: corollary
title: 'Every maximal ideal of a commutative ring is prime'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-quotient-is-field-iff-ideal-maximal, thm-quotient-is-domain-iff-ideal-prime, lem-field-is-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Maximal and Prime Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/08%3A_An_Introduction_to_Rings/8.04%3A_Maximal_and_Prime_Ideals"
pipeline_run: null
---

## Statement

Every maximal ideal of a commutative ring is prime.

## Facts & Assumptions

**Given:** A maximal ideal $M$ of a commutative ring $R$.

[L1] $R/M$ is a field when $M$ is maximal ([[thm-quotient-is-field-iff-ideal-maximal]]).

[L2] $R/P$ is a domain exactly when $P$ is prime ([[thm-quotient-is-domain-iff-ideal-prime]]).

[L3] Every field is an integral domain ([[lem-field-is-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $R/M$ is a field. [L1, L2, L3, given]

2.1 By [L3], that quotient is an integral domain. [step 1.1, L1, L2, L3, given]

3.1 The domain conclusion of step 2.1 yields that $M$ is prime. [step 2.1] ∎
