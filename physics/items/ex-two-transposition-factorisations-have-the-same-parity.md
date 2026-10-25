---
id: ex-two-transposition-factorisations-have-the-same-parity
kind: example
title: 'Two different transposition factorisations of the same permutation have the same parity'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-parity-of-transposition-factorisations-is-well-defined,
       def-inversions-inversion-number-and-sign]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

In $S_3$, the three-cycle $(0\,1\,2)$ has the two factorizations

$$(0\,1\,2)=(0\,2)(0\,1)=(0\,2)(0\,1)(1\,2)(1\,2).$$

Their lengths are $2$ and $4$, so both are even, as the parity theorem predicts.

## Facts & Assumptions

**Given:** Products in $S_3$ act from right to left.

[L1] Every transposition factorisation of a permutation has parity equal to its inversion sign ([[thm-parity-of-transposition-factorisations-is-well-defined]]).

[L2] Inversion sign is $(-1)$ raised to the number of decreasing pairs in one-line notation ([[def-inversions-inversion-number-and-sign]]).

## Verification

**Proof technique:** direct.

1.1 The product $(0\,2)(0\,1)$ sends $0\mapsto1\mapsto2\mapsto0$, hence equals $(0\,1\,2)$, and the final pair $(1\,2)(1\,2)$ is the identity, so the four-factor product is the same permutation. [given, L1]

2.1 The one-line form of $(0\,1\,2)$ is $[1,2,0]$, with two inversions and sign $+1$ by [L2]. The factor counts $2$ and $4$ are both even and therefore both have parity $+1$, in agreement with [L1]. [step 1.1, L1, L2] ∎
