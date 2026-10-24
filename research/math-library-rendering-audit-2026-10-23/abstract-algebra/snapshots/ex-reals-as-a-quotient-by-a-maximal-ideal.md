---
id: ex-reals-as-a-quotient-by-a-maximal-ideal
kind: example
title: 'The reals are the quotient of rational Cauchy sequences by the maximal ideal of null sequences'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-numbers, thm-cauchy-ring, lem-null-ideal, lem-null-maximal, thm-quotient-is-field-iff-ideal-maximal, thm-reals-field]
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
    - title: "Tao, Analysis I"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Example

The reals are the quotient of rational Cauchy sequences by the maximal ideal of null sequences.

## Facts & Assumptions

**Given:** The Cauchy-sequence ring $C$ and the null ideal $N$.

[L1] The real numbers are defined as the quotient of rational Cauchy sequences by null sequences ([[def-real-numbers]]).

[L2] Rational Cauchy sequences form the ring $C$ ([[thm-cauchy-ring]]).

[L3] $N$ is an ideal of $C$ ([[lem-null-ideal]]).

[L4] $N$ is maximal in $C$ ([[lem-null-maximal]]).

[L5] Quotienting a commutative ring by a maximal ideal gives a field ([[thm-quotient-is-field-iff-ideal-maximal]]).

[L6] The constructed real numbers form a field ([[thm-reals-field]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the underlying set and operations of $\mathbb R$ are the quotient $C/N$. [L1, L2, L3, L4, L5, L6, given]

2.1 Since [L3] and [L4] make $N$ a maximal ideal, [L5] also identifies $C/N$ as a field. [step 1.1, L1, L2, L3, L4, L5, L6, given]

3.1 This is the stated quotient realisation. [step 2.1] ∎
