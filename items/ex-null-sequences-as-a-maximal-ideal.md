---
id: ex-null-sequences-as-a-maximal-ideal
kind: example
title: 'Null rational sequences form a maximal ideal in the ring of rational Cauchy sequences'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime-and-maximal-ideals, thm-cauchy-ring, lem-null-ideal, lem-null-maximal]
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

Null rational sequences form a maximal ideal in the ring of rational Cauchy sequences.

## Facts & Assumptions

**Given:** The ring $C$ of rational Cauchy sequences and its subset $N$ of null sequences.

[L1] Maximal ideals are maximal among proper ideals ([[def-prime-and-maximal-ideals]]).

[L2] Rational Cauchy sequences form a commutative ring $C$ ([[thm-cauchy-ring]]).

[L3] $N$ is an ideal of $C$ ([[lem-null-ideal]]).

[L4] The null ideal $N$ is maximal in $C$ ([[lem-null-maximal]]).

## Verification

**Proof technique:** direct.

1.1 The ambient object is the commutative ring $C$ of [L2], and $N$ is an ideal by [L3]. [L1, L2, L3, L4, given]

2.1 The maximality statement in [L4] is precisely maximality in the ideal order of [L1]. [step 1.1, L1, L2, L3, L4, given]

3.1 Thus null rational sequences give a maximal ideal. [step 2.1] ∎
