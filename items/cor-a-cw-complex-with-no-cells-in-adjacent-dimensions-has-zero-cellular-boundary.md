---
id: cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary
kind: corollary
title: A CW complex with no cells in adjacent dimensions has zero cellular boundary
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cellular-homology, thm-cellular-homology-computes-singular-homology]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Theorem 2.35
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

If $X$ has no cells in adjacent dimensions, every cellular differential is zero; consequently $H_n(X;G)\cong C_n^{\mathrm{cell}}(X;G)$.

## Facts & Assumptions

**Given:** A CW complex with no two nonzero cellular chain groups in consecutive degrees.

## Proof

**Proof technique:** direct.

1.1 For every $n$, either $C_n^{\mathrm{cell}}$ or $C_{n-1}^{\mathrm{cell}}$ is zero, so $d_n=0$. [given]

2.1 Thus cellular homology equals the chain group in each degree; [[thm-cellular-homology-computes-singular-homology]] transfers this calculation to singular homology. [step 1.1] ∎
