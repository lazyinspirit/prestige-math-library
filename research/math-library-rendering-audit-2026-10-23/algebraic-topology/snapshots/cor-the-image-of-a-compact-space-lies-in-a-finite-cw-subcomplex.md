---
id: cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex
kind: corollary
title: The image of a compact space lies in a finite CW subcomplex
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-compact-cw-images-have-finite-cell-support-without-choice, def-skeleta-cw-subcomplex-and-relative-cw-complex]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Appendix A
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

If $K$ is compact and $f:K\to X$ is continuous into a CW complex, then $f(K)$ lies in a finite CW subcomplex of $X$.

## Facts & Assumptions

**Given:** A continuous map $f:K\to X$ with $K$ compact.

[L1] With characteristic maps supplied, a compact CW image lies in a finite subcomplex without choice ([[lem-compact-cw-images-have-finite-cell-support-without-choice]]).

## Proof

**Proof technique:** direct.

1.1 The characteristic maps are part of the supplied CW structure. Thus the given compact space and continuous map satisfy the hypotheses of [L1]. [given]

2.1 Apply [L1] to obtain a finite CW subcomplex containing $f(K)$, including the empty-image case. The supplier uses canonical coordinate minima to prove finite cell support without a choice premise. [L1, step 1.1] ∎
