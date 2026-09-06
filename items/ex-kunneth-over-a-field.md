---
id: ex-kunneth-over-a-field
title: "Kunneth over a field"
kind: example
status: draft
origin: pipeline
deps: ["cor-kunneth-over-a-field"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For $C=(0\to k\xrightarrow0 k\to0)$ and $D=(0\to k\to0)$ concentrated in degree $0$, cross product identifies $H_*(C\otimes_kD)$ with $H_*(C)\otimes_kH_*(D)$.

## Verification

**Given:** the displayed complexes of $k$-vector spaces.

1.1 The zero differential makes $H_0C\cong H_1C\cong k$ and $H_0D\cong k$. [given]

2.1 The tensor complex has $k$ in total degrees zero and one with zero differential, matching the two cross-product summands; no Tor term occurs over $k$. [step 1.1] ∎
